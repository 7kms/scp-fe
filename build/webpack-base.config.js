const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const nodeModulePath = path.join(__dirname, '../node_modules');
const isProduct = process.env.NODE_ENV === 'production';
const vueConfig = require('./vue-loader.config');

let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

//生成html文件的输出配置
const templatesFn = (modules) => {
    return Object.keys(modules).map((entryName) => {
        let arr = ['manifest', 'vendor', 'commons', entryName];
        let chunks = arr;
        let iconPath = '../src/assets/images';
        let obj = {}
        if(!isProduct){
            chunks.push('hrm');
        }
        switch(entryName){
            case 'scp':
                obj.title = '商链 SCP';
                obj.favicon = `${iconPath}/scp-logo.png`;
                break;
            case 'asc':
                obj.title = 'ASC';
                obj.favicon = `${iconPath}/asc/asc-logo.png`;
                break;
        }
        return new HtmlWebpackPlugin(Object.assign({
            template: '../src/template/index.html',
            filename: `${entryName}.html`,
            chunks
        },obj))
    });
}
const pagePath = '../src/pages/containers';
let pageArr = fs.readdirSync(path.resolve(__dirname, pagePath));

//构造页面入口文件
let pageEntries = {};
pageArr = pageArr.map((page) => {
    let nameArr = page.split('.');
    let ext = nameArr.pop();

    if (ext == 'js') {
        pageEntries[nameArr.join('')] = [`${pagePath}/${page}`];
        return nameArr.join('');
    }
    return '';
}).filter(page => !!page);
let htmlTemplateOutPutArr = templatesFn(pageEntries);
pageEntries.vendor = [
    // 'babel-polyfill',
    'vue'
];
module.exports = {
    context: path.resolve(__dirname),
    entry: pageEntries,
    output: {
        path: path.resolve(__dirname, '../__dist'),
        publicPath: './',
        filename: "js/[name].js",
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test:  /\.((jsx?)|(vue))$/,
            //     use: 'eslint-loader',
            //     include: /src/
            // },
            {
                test: /\.vue$/,
                // include: '/src/',
                exclude: '/node_modules/',
                use: {
                    loader: 'vue-loader',
                    options: vueConfig
                }
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.min.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /[^(min)]\.css$/,
                use: isProduct ? ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    publicPath: '../',
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')({
                                browsers: ['last 10 versions']
                            })]
                        }
                    }]
                }) : ['vue-style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')({
                                browsers: ['last 10 versions']
                            })]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: isProduct ? ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: '../',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            importLoader: true,
                            localIdentName: '[name]-[local]-[hash:base64:6]'
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')({
                                browsers: ['last 10 versions']
                            })]
                        }
                    }, {
                        loader: 'less-loader',
                        options: {
                            modules: false
                        }
                    }]
                }) : ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        importLoader: true,
                        localIdentName: '[name]-[local]-[hash:base64:6]'
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')({
                            browsers: ['last 10 versions']
                        })]
                    }
                }, 'less-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[hash:6].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            "vue": path.join(nodeModulePath, 'vue/dist/vue.runtime.esm.js'),
            "@src": path.join(__dirname, '../src'),
            "@img": path.join(__dirname, '../src/assets/images')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NEWS_VERSION': Math.ceil(Date.now()/1000)
        }),

        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash:6].css',
            allChunks: true
        }),
        // 单独提取入口依赖的css文件

        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /[^(min)]\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: { removeAll: true } ,
                reduceIdents: false,
                zindex: false
                },
            canPrint: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            minChunks: 2,
            chunks: [...pageArr]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest']
        })
    ].concat(htmlTemplateOutPutArr)
}