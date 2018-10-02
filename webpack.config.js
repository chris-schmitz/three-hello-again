const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    resolve: {
        alias: {
            "@helpers": path.join(__dirname, 'src', 'helpers'),
            "@three/controls": path.join(__dirname, 'node_modules', 'three', 'examples', 'js', 'controls')
        }
    }
}