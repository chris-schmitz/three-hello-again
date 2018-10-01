const THREE = require('three')

class Cube {
    constructor() {
        this.object3d = null
    }

    static make() {
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        })

        this.object3d = new THREE.Mesh(geometry, material)
        this.object3d.name = "test cube"
        return this
    }

    onUpdate() {
        this.rotation.x += 0.01
        this.rotation.y += 0.01
    }
}

module.exports = Cube