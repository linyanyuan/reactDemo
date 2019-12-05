const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const htmlplugin = new HtmlWebpackPlugin({
    template:path.join(__dirname,'../src/index.html'),
    filename:'index.html',
    hash:true,
})
module.exports = merge(common,{
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        htmlplugin
    ],
    devServer: {
        contentBase:'../dist'
    }
})