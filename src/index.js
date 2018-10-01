window.THREE = require('three') // ! for debugging purposes, remove when done
const Experience = require('./modules/Experience');
const Cube = require('./modules/Cube.js')

const experience = Experience.make()
if (process.env.DEVELOPMENT) {
    console.log('adding the experience to the window')
    window.experience = experience
}

const cube = Cube.make()
experience.addToScene(cube.object3d)
experience.setCameraPosition({
    z: 5
})
experience.animate()