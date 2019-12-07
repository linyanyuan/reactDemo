const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩代码
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//css压缩
const {CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const common = require('./webpack.common.js');
module.exports = merge(common,{
    mode:'production',
    output:{
        publicPath: "./",
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name]-[hash:7].js',
        chunkFilename: 'js/[name]-[chunkhash:7].js'
    },
    optimization:{//优化项
        moduleIds: 'hashed',
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false, // set to true if you want JS source maps
              }),],
    },
    plugins:[
       
        new UglifyJsPlugin({ // 压缩
            sourceMap: false //启用或者不启用sorceMap
        }),
        new CleanWebpackPlugin(), // 清除dist
        new webpack.DefinePlugin({ // 设置成产环境 第三方插件和生成的bundle.js会体积变小
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8889,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
        }), // 是否显示打包分布情况图
    ]
})

