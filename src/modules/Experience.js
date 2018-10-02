const THREE = require('three')
const autoBind = require('auto-bind')
const {
    descendAndAct
} = require('@helpers/Traverser')
const OrbitControls = require('@helpers/OrbitControls')



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
        this.controls = this.createControls()

        document.body.appendChild(this.renderer.domElement)
    }

    animate() {
        requestAnimationFrame(this.animate)
        this.controls.update()
        descendAndAct(this.scene.children, child => {
            let inventoryItem = this.getFromInventory(child, 'object3d')
            if (typeof inventoryItem === 'undefined' || inventoryItem === null) throw new Error(`Child isn't in experience inventory: ${child}`)

            if (typeof inventoryItem.onRender !== undefined && typeof inventoryItem.onRender === 'function') {
                inventoryItem.onRender(child)
            }
        })

        this.renderer.render(this.scene, this.camera)

    }

    createControls() {
        return OrbitControls.make(this.camera, this.renderer.domElement)
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

    getFromInventory(identifier, type, log = false) {

        let item = null
        // ! uuuuuuh I don't like how sloppy this whole thing is. refactor later when you care more
        switch (type) {
            case 'name':
                item = this.sceneInventory
                    .filter(item => item['object3d']['name'] === identifier)
                break
            case 'object3d':
                identifier = identifier.uuid
            case 'uuid':
                item = this.sceneInventory.filter(item => item['uuid'] === identifier)
                break
        }
        return item.length === 0 ? null : item[0]

    }

    setCameraPosition(config = {}) {
        const position = Object.assign(this.camera.position, config)
        this.camera.position.set(position.x, position.y, position.z)
    }
}

module.exports = Experience