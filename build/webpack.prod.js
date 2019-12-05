const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩代码
const {CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.common.js');
module.exports = merge(common,{
    mode:'production',
    plugins:[
        // new BundleAnalyzerPlugin(), // 是否显示打包分布情况图
        new UglifyJsPlugin({ // 压缩
            sourceMap: false //启用或者不启用sorceMap
        }),
        new CleanWebpackPlugin(), // 清除dist
        new webpack.DefinePlugin({ // 设置成产环境 第三方插件和生成的bundle.js会体积变小
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.HashedModuleIdsPlugin(),
    ]
})

