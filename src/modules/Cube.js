const THREE = require('three')

class Cube {
    constructor(object3d = null, config = {}) {
        this.object3d = object3d
        this.uuid = object3d.uuid
        this.initialConfiguration = config

        if (config.hasOwnProperty('callOnRender')) {
            this.callOnRender = config.callOnRender
        }
    }

    /**
     * * The named constructor for this class. This will create a new instance that is
     * * already populated with the object3d it's meant to track.
     *
     * @param {object} config A js object containing overrides and settings for the class
     */
    static make(config = {}) {
        // * make the object3d
        const object3d = Cube.makeObject3d(config)

        const cube = new Cube(object3d, config)
        return cube
    }

    /**
     * * Makes the object3d with our specific defaults provided.
     * ? I can't decide if the configuration portions of this method should
     * ? be in here or if they should be moved up to the make method.
     * ? I have them here at the moment because we can call this static function
     * ? outside of the named `make` constructor so it would be good to have the
     * ? defaults in one spot (e.g. if we want to make a new object3d and set it
     * ? as the new `object3d` for an existing instance of this class), but I don't
     * ? know how often or if we'd ever need to do that. I'm leaving this in up front
     * ? because it's still an isolation of the responsibility so we're still gaining
     * ? on the SOLID refactor side.
     *
     * @param {object} config A js object containing overrides for the object3d construction
     */
    static makeObject3d(config = {}) {
        // * build the working config out of the defaults and any
        // * passed in overrides
        const workingConfig = Object.assign({
            name: 'unnamed-cube-object',
            width: 1,
            height: 1,
            depth: 1,
            color: 0xff00ff,
            position: new THREE.Vector3(0, 0, 0)
        }, config)

        // * make the building blocks for the mesh
        const geometry = new THREE.BoxGeometry(workingConfig.width, workingConfig.height, workingConfig.depth)
        const material = new THREE.MeshBasicMaterial({
            color: workingConfig.color
        })

        // * make the mesh
        const object3d = new THREE.Mesh(geometry, material)
        object3d.name = workingConfig.name

        // * Set the position of the mesh
        let position = workingConfig.position
        if (position instanceof THREE.Vector3 === false) {
            position = new THREE.Vector3(position.x, position.y, position.z)
        }
        object3d.position.copy(position)

        // * here ya go!
        return object3d
    }

    set callOnRender(callable) {
        this._callOnRender = callable
    }
    get callOnRender() {
        return this._callOnRender
    }

    onRender() {
        this.callOnRender(this.object3d)
    }
}


module.exports = Cube