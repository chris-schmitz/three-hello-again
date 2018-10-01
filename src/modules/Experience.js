const THREE = require('three')
const autoBind = require('auto-bind')



class Experience {
    constructor() {
        this.scene = null
        this.camera = null
        this.renderer = null

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
        this.scene.children[0].rotation.x += 0.01
        this.scene.children[0].rotation.y += 0.01
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
        this.scene.add(thing)
    }

    setCameraPosition(config = {}) {
        const position = Object.assign(this.camera.position, config)
        this.camera.position.set(position.x, position.y, position.z)
    }
}

module.exports = Experience