window.THREE = require('three') // ! for debugging purposes, remove when done
const Experience = require('./modules/Experience');
const Cube = require('./modules/Cube.js')
const Background = require('./modules/Background')

const experience = Experience.make()
if (process.env.DEVELOPMENT) {
    console.log('adding the experience to the window')
    window.experience = experience
}

const cube1 = Cube.make({
    name: 'test-cube-1',
    position: new THREE.Vector3(1, 2, 0),
    callOnRender: cube => {
        cube.rotation.y += 0.01
    }
})
const cube2 = Cube.make({
    name: 'test-cube-2',
    position: {
        x: -1,
        y: -1,
        z: -1
    },
    color: 0xff0000,
    callOnRender: cube => {
        cube.rotation.x += 0.05
        cube.rotation.y += 0.05
    }
})
const cube3 = Cube.make({
    name: 'test-cube-3',
    color: 0x4488aa,
    position: {
        x: 1,
        y: -1,
        z: 3
    },
    callOnRender: cube => {
        cube.rotation.x += 0.1
        cube.rotation.y += 0.1
    }
})
const cube4 = Cube.make({
    name: 'test-cube-4',
    color: 0x112233,
    callOnRender: cube => {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const color = new THREE.Color(`rgb(${r}, ${g}, ${b})`)
        cube.material.color.set(color)
    }
})
const cube5 = Cube.make({
    name: 'test-cube-5',
    color: 0x112233,
    callOnRender: cube => {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        const x = Math.floor(Math.random() * 10)
        const y = Math.floor(Math.random() * 10)
        const z = Math.floor(Math.random() * 10)
        const v = new THREE.Vector3(x, y, z)
        cube.position.copy(v)

        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)


        const color = new THREE.Color(`rgb(${r}, ${g}, ${b})`)
        cube.material.color.set(color)
    }
})

const background = Background.make({
    // wireframe: true,
    name: 'background',
    scale: {
        x: -1,
        y: 1,
        z: 1
    },
    radius: 500,
    widthSegmeants: 60,
    heighSegments: 40,
    // phiStart: 2,
    // phiLength: Math.PI,
    mediaSource: {
        // src: 'images/room.jpg'
        src: 'video/pano.webm'
    },
    callOnRender: background => {
        background.rotation.y += 0.001
    }
})

experience.addToScene(background)
experience.addToScene(cube1)
experience.addToScene(cube2)
experience.addToScene(cube3)
experience.addToScene(cube4)
experience.addToScene(cube5)

experience.setCameraPosition({
    z: 10
})
experience.animate()