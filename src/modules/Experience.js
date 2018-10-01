const THREE = require('three')
const autoBind = require('auto-bind')
const {
    descendAndAct
} = require('@helpers/Traverser')



class Experience {
    constructor() {
        this.scene = null
        this.camera = null
        this.renderer = null
        this.sceneInventory = []

        autoBind(this)
    }

    static make(intitalize = true) {
        const experience = new Experience()
        if (intitalize) {
            experience.initalize()
        }
        return experience
    }

    initalize() {
        this.scene = this.createScene()
        this.camera = this.createCamera()
        this.renderer = this.createRenderer()

        document.body.appendChild(this.renderer.domElement)
    }

    animate() {
        requestAnimationFrame(this.animate)
        descendAndAct(this.scene.children, child => {
            let inventoryItem = this.getFromInventory(child)
            if (typeof inventoryItem === 'undefined' || inventoryItem === null) throw new Error(`Child isn't in experience inventory: ${child}`)

            if (typeof inventoryItem.onRender !== undefined && typeof inventoryItem.onRender === 'function') {
                inventoryItem.onRender(child)
            }
        })

        this.renderer.render(this.scene, this.camera)

    }


    createScene() {
        const scene = new THREE.Scene()
        scene.name = "experience-secene"
        if (process.env.DEVELOPMENT) {
            console.log('Adding scene to the window')
            window.scene = scene
        }
        return scene
    }

    createCamera(type = 'perspective', config = {}) {
        let camera = null
        const cameraConfig = Object.assign({
            fov: 75,
            aspectRatio: window.innerWidth / window.innerHeight,
            near: 0.1,
            far: 1000
        }, config)

        switch (type) {
            case 'perspective':
                camera = new THREE.PerspectiveCamera(cameraConfig.fov, cameraConfig.aspectRatio, cameraConfig.near, cameraConfig.far)
                break
            default:
                throw new Error(`Invalid camera type specified: ${type}`)
        }
        return camera
    }

    createRenderer(width = window.innerWidth, height = window.innerHeight) {
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(width, height)

        return renderer
    }

    addToScene(thing = null) {
        // ? what kind of checks would we want here?
        this.addToSceneInventory(thing)
        this.scene.add(thing.object3d)
    }

    addToSceneInventory(thing) {
        // ? how would we handle nested things??
        this.sceneInventory.push(thing)
    }

    removeFromSceneInventory(thing) {
        // ? how would we handle nested things??

    }

    getFromInventory(entity) {
        if (entity.hasOwnProperty('uuid')) {
            const item = this.sceneInventory.filter(item => item.uuid === entity.uuid)
            return Array.isArray(item) ? item[0] : item
        }

        throw new Error(`unable to find the entity in the inventory: ${entity}`)
    }

    setCameraPosition(config = {}) {
        const position = Object.assign(this.camera.position, config)
        this.camera.position.set(position.x, position.y, position.z)
    }
}

module.exports = Experience