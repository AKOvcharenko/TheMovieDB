var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './sandbox/index.js'],
    output: {
        path: path.join(__dirname, "production"),
        filename: 'bundle.js'
    },
    devServer:{
        inline: true,
        contentBase: './production',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$|.scss$/,
                exclude: /(node_modules)/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    /*plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ],*/
    watch: true

};