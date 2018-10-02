const THREE = require('three')
require('three/examples/js/controls/OrbitControls')

class OrbitControls {
    constructor(camera, rendererElement) {
        this.controls = null

        this.camera = camera
        this.rendererElement = rendererElement
        this.initalize()
    }

    static make(camera, rendererElement) {
        const controls = new OrbitControls(camera, rendererElement)
        return controls
    }

    initalize() {
        this.controls = new THREE.OrbitControls(this.camera, this.rendererElement)
        this.controls.enableDamping = true
        this.controls.dampingFactor = 0.25
        this.controls.screenSpacePanning = false
        this.controls.minDistance = 100
        this.controls.maxDistance = 100
        this.controls.maxPolarAngle = Math.PI / 2
    }

    update() {
        this.controls.update()
    }
}

module.exports = OrbitControls