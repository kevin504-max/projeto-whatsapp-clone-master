const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// set NODE_OPTIONS=--openssl-legacy-provider
module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
        publicPath: 'dist',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        },
        port: 8080,
        open: true,
        hot: true,
        compress: true,
    },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         filename: 'index.html',
    //         template: path.resolve(__dirname, './index.html'),
    //     })
    // ]
}	