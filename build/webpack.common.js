
//生产环境和开发环境公用部分 webpack.common.js
//webpack 4.x有一个较大的特性 即约定大于配置 默认打包的入口路径是src->idnex.js
const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 单独分离出css文件
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'../dist')
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/[name].[hash].css' // css 命名
        }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'../src/index.html'),
            filename:'index.html',
            hash:true,
        })
    ],
    module:{
        rules:[
            {
                test:/\.js[x]?$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/transform-runtime']}
                }],
                exclude:/(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    optimization: {
        splitChunks:{
            chunks: 'all',
            cacheGroups:{
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendors',
                    priority: 10, // 优先
                    minChunks:2,
                    enforce: true,
                },
                commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
                    chunks: 'initial',
                    name: 'foo',
                    minSize: 0, 
                    maxInitialRequests: 5,
                    minChunks: 2 // 重复2次才能打包到此模块
                },
                antd: { // 单独讲antd拆包
                    name:'chunk-antd',
                    priority: 20, // 权重大于vendor
                    test:/[\\/]node_modules[\\/](.*@antd|.*@ant-design)[\\/]/,
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    },
    performance:{ //性能提示和配置
       //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
	    	assetFilter: function(assetFilename) {
	    		return assetFilename.endsWith('.js');
	    	}
    }
}