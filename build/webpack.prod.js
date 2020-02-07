const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩代码
const CopyWebpackPlugin = require('copy-webpack-plugin'); //打包静态资源
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//css压缩
const {CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionWebpackPlugin = require('compression-webpack-plugin')
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
                uglifyOptions: {
                    warnings: false,
                    drop_debugger: true,
                    drop_console: true
                },
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
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/), // 挑选zh-cn语言
        new BundleAnalyzerPlugin(), // 是否显示打包分布情况图
        // copy custom static assets
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, '../static'),
			to: 'static',
			ignore: ['.*']
        }]),
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:path.join(__dirname,'../dist/index.html'),
            inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			},
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			chunksSortMode: 'dependency'
        }),
        // 是否开启gzip 如果不开启请注释 或者新建config.index.js文件写个控制
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8
            })
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        // 'redux': 'Redux',
        // 'redux-thunk': 'ReduxThunk',
        // 'react-redux': 'ReactRedux',
        // 'redux-form': 'ReduxForm',
        // 'immutable': 'Immutable',
        // 'babel-polyfill': 'window', // polyfill 直接写 {} 也是可以的,
        // 'transit-js': 'transit',
    }
})

