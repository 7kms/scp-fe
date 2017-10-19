const path = require('path');
const webpack = require('webpack');
const nodeModulePath = path.join(__dirname, '../node_modules');
const isProduct = process.env.NODE_ENV === 'production';
const vueConfig = require('./vue-loader.config');

let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        vendor:['vue'],
        app:['../src/pages/index.js']
    },
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

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "commons",
        //     minChunks: 2
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest']
        }),
        new HtmlWebpackPlugin({
            title:'商链',
            template: '../src/template/index.html',
            filename: `index.html`
        })
    ]
}