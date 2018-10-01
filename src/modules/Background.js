const THREE = require('three')

class Background {
    constructor(object3d = null, config = {}) {
        this.object3d = object3d
        this.uuid = object3d.uuid
        this.initalConfig = config

        if (config.hasOwnProperty('callOnRender')) {
            this.callOnRender = config.callOnRender
        }
    }

    static make(config = {}) {
        if (typeof config.mediaSource !== 'undefined') {
            config.texture = this.makeMediaTexture(config.mediaSource)
        }
        const object3d = Background.makeObject3d(config)

        const background = new Background(object3d, config)
        return background
    }

    // ! note that if it makes sense, we could move the
    // ! defaults here to the constructor, create a base
    // ! class for creating the three objects, and then
    // ! extend the base class and make the `makeObject3d`
    // ! a more generic call
    static makeObject3d(config = {}) {
        const workingConfig = Object.assign({
            name: 'unnamed-background-object',
            color: 0xff0000,
            position: new THREE.Vector3(0, 0, 0),
            scale: {
                x: 0,
                y: 0,
                z: 0
            },
            radius: 20,
            widthSegments: 10,
            heightSegments: 10,
            phiStart: undefined,
            phiLength: undefined,
            thetaStart: undefined,
            thetaLength: undefined,
            texture: null,
            wireframe: false
        }, config)


        const geometry = new THREE.SphereBufferGeometry(
            workingConfig.radius,
            workingConfig.widthSegments,
            workingConfig.heightSegments,
            workingConfig.phiStart,
            workingConfig.phiLength,
            workingConfig.thetaStart,
            workingConfig.thetaLength
        )
        // * Set the scale of the mesh
        let scale = workingConfig.scale
        geometry.scale(scale.x, scale.y, scale.z)


        const material = new THREE.MeshBasicMaterial({
            color: workingConfig.color,
            wireframe: workingConfig.wireframe,
        })

        if (workingConfig.texture) {
            material.map = workingConfig.texture
        }

        const object3d = new THREE.Mesh(geometry, material)
        object3d.name = workingConfig.name


        // * Set the position of the mesh
        let position = workingConfig.position
        if (position instanceof THREE.Vector3 === false) {
            position = new THREE.Vector3(position.x, position.y, position.z)
        }
        object3d.position.copy(position)




        return object3d
    }

    static makeMediaTexture(mediaSourceConfig = {}) {
        // ? does it make sense to be generic like this? like should we say "media" and then be able to handle video vs image?
        // ? if it does make sense to do it this way, move the vid vs image out into their own methods kicked off from here
        let texture = null
        const mediaExtension = mediaSourceConfig.src.split('.').pop()

        // ! look at this sloppy shit!
        switch (mediaExtension) {
            case 'mp4':
            case 'webm':
                // ! this is ultra rough, replace with smarter interogation
                const workingConfig = Object.assign({
                    crossOrigin: 'anonymous',
                    width: 640,
                    height: 360,
                    loop: true,
                    muted: true,
                    src: null,
                    playsInline: 'webpkit-playsinline'
                }, mediaSourceConfig)

                const media = document.createElement('video')
                media.crossOrigin = workingConfig.crossOrigin
                media.width = workingConfig.width
                media.height = workingConfig.height
                media.loop = workingConfig.loop
                media.muted = workingConfig.muted
                media.src = workingConfig.src
                media.setAttribute('webkit-playsinline', workingConfig.playsInline)

                media.play()
                window.media = media

                // ? Separate ?
                texture = new THREE.VideoTexture(media)
                texture.minFilter = THREE.LinearFilter
                texture.format = THREE.RGBFormat
                break
        }

        return texture
    }

    get object3d() {
        return this._object3d
    }
    set object3d(object) {
        this._object3d = object
        this.uuid = object.uuid
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

module.exports = Background