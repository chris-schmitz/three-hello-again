const common = require('./webpack.config.js')
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(common, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                DEVELOPMENT: false
            }
        })
    ]
})