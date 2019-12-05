
//生产环境和开发环境公用部分 webpack.common.js
//webpack 4.x有一个较大的特性 即约定大于配置 默认打包的入口路径是src->idnex.js
const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 单独分离出css文件
module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/[name].[hash].css' // css 命名
        }),
    ],
    module:{
        rules:[
            {
                test:/\.js|jsx$/,
                use:'babel-loader',
                exclude:/node_modules/
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
            chunks: 'initial',
            cacheGroups:{
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    priority: 10,
                    chunks: "all"
                },
                commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
                    test: /common\/|components\//,
                    name: 'commons',
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    }
}