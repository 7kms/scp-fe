const isProduct = process.env.NODE_ENV === 'production';
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let configObj = {
    preserveWhitespace: false,
    extractCSS: isProduct,
    cssModules: {
        localIdentName: '[name]-[local]-[hash:base64:6]',
        camelCase: true
    },
    postcss: [
        require('autoprefixer')({
            browsers: ['last 10 versions']
        })
    ]
}
if(isProduct){
    configObj.loaders = {
        css:ExtractTextPlugin.extract({
            publicPath:'../',
            use: 'css-loader',
            fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
        }),
        less:ExtractTextPlugin.extract({
            publicPath:'../',
            use: ['css-loader','less-loader'],
            fallback: 'vue-style-loader'
        })
    }
}
module.exports = configObj