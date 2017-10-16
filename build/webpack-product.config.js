const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
let baseConfig = require('./webpack-base.config');
var ImageminPlugin = require('imagemin-webpack-plugin').default
// const nodeModulePath = path.join(__dirname, '../node_modules');
module.exports = merge(baseConfig, {
    devtool: false,
    output: {
        path: path.resolve(__dirname, '../__dist/'),

        publicPath: './',
        // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)

        filename: 'js/[name].[chunkhash:6].js',
        // 输出的打包文件

        chunkFilename: 'js/[name].[chunkhash:6].js'
            //「附加分块(additional chunk)」的文件名模板
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // new webpack.NamedModulesPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        // new WebpackChunkHash()

        new ImageminPlugin({
            pngquant: {
              quality: '50'
            }
        })
    ]
});