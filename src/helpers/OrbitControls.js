const THREE = require('three')
require('three/examples/js/controls/OrbitControls')

class OrbitControls {
    constructor(camera, rendererElement) {
        this.controls = null

        this.camera = camera
        this.rendererElement = rendererElement
        this.selectedObject = null
        this.mouseVector = new THREE.Vector2()
        this.raycaster = new THREE.Raycaster()

        this.children = []

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
        this.controls.minDistance = 5
        this.controls.maxDistance = 100
        this.controls.maxPolarAngle = Math.PI / 2

        this.initializeMouseTracking()
    }

    initializeMouseTracking() {
        window.addEventListener('mousemove', this.onMouseMove.bind(this), false)
    }

    addIntersectableItem(item) {
        this.children.push(item)
    }

    removeIntersectableItem(identifier) {
        // TODO: put stuff in here
    }

    update() {
        this.controls.update()
    }

    onMouseMove(event) {
        // * cribbing from example:
        // * https://github.com/mrdoob/three.js/blob/master/examples/webgl_raycast_sprite.html

        event.preventDefault()

        if (this.selectedObject) {
            this.selectedObject.material.color.set('#69f')
            this.selectedObject = null
        }

        this.mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1
        this.mouseVector.y = -(event.clientY / window.innerWidth) * 2 + 1
        const intersects = this.getIntersects()

        if (intersects.length > 0) {
            console.log('something intercepted!')
            const result = intersects.filter(result => result && result.object)[0]
            if (result && result.object) {
                this.selectedObject = result.object
                this.selectedObject.material.color.set('#f00')
            }
        }

    }

    getIntersects(x, y) {

        this.raycaster.setFromCamera(this.mouseVector, this.camera)
        return this.raycaster.intersectObjects(this.children, true)
    }

}

module.exports = OrbitControls