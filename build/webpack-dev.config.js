const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
let baseConfig = require('./webpack-base.config');
let WebpackChunkHash = require("webpack-chunk-hash");
let ipv4;
try{
    ipv4 = require('macaddress').networkInterfaces().en0.ipv4;
}catch(e){
    ipv4 = '127.0.0.1';
}
const devPort = 6100

// const nodeModulePath = path.join(__dirname, '../node_modules')
module.exports = merge(baseConfig, {
    devtool: '#cheap-module-source-map',
    entry: {
        hrm: [
            `webpack-dev-server/client?http://${ipv4}:${devPort}`,
            // 为 webpack-dev-server 的环境打包代码
            // 然后连接到指定服务器域名与端口
            'webpack/hot/only-dev-server'
        ]
    },
    devServer: {
        hot: true,
        // 开启服务器的模块热替换(HMR)

        contentBase: path.resolve(__dirname, '../__dist'),
        // 输出文件的路径

        publicPath: '/',
        // 浏览器的访问路径

        // noInfo: true,

        // historyApiFallback: true,
        host: "0.0.0.0",
        disableHostCheck: true,
        port: devPort
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // 开启全局的模块热替换(HMR),此处已经在命令行进行配置,故去掉了

        new webpack.NamedModulesPlugin(),
        // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息

        new WebpackChunkHash()
    ]
});