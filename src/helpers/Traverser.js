// ! note: this is an augmented port from the helper descend and dispose function
// ! I wrote for graybar. I'm kind of on the fence re: if we should leave it as it's
// ! own specialized function or if we should make that the responsibility of the
// ! code using the traversing tools.
// ! I'm leaning more towards leaving it since it's a common task needed in our threejs
// ! projects.
/**
 * * Recursively descends a group/entity tree and disposes of common properties.
 *
 * ! Note that it may be worth pulling this out to a helper function since it could be
 * ! beneficial in other cases. you can look at the `dispose` method above for an example
 * ! of how it could be called once imported.
 *
 * @param {object|Array} Either a threejs object that can have children OR an array of threejs objects.
 *                  I don't know if there's a specific base class that we can expect,
 *                  but basically anything that you can `entity.add()` threejs objects to
 **/
function descendAndDispose(entity) {
    descendAndAct(entity, child => {
        if (child.geometry) child.geometry.dispose()
        if (child.material && child.material.map) child.material.map.dispose()
        if (child.material) child.material.dispose()
    })
}

/**
 *
 * @param {Threejs children | Array | anything} entity The entity to act on.
 *                                                      This function is meant for use within threejs, so
 *                                                      we're focusing on passing in threejs groups or an array
 *                                                      of stuff, but really, we can descend and act on an array of
 *                                                      anything since the caller is responsible for passing in the
 *                                                      callable function
 * @param {fn} callable A callable function that takes one parameter
 */
function descendAndAct(entity, callable) {
    _traverse(entity, callable)
}

function _traverse(entity, callable) {
    if (entity.type !== 'Group' && !Array.isArray(entity)) {
        throw new Error("The entity does not have children.")
    }

    let workingArray = entity

    if (entity.type === 'Group') {
        workingArray = entity.children
    }

    workingArray.forEach(child => {
        if (child.type === "Group") {
            descendAndDispose(child.children)
        } else if (Array.isArray(child)) {
            workingArray.forEach(child => callable(child))
        } else {
            // * At this point we're assuming that we're dealing with a
            // * single entity
            callable(child)
        }
    })
}

export {
    descendAndDispose,
    descendAndAct
}