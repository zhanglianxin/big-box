const path = require('path');
const webpack = require('webpack');


//公共配置部分
var config = {

    //***********************************************

    // 入口点
    entry: {

        //源代码入口点
        app: path.join(__dirname, 'resources/assets/js/app.js'),
        style:[
            path.join(__dirname, 'resources/assets/css', 'main.css')
        ]
    },

    //***********************************************

    //输出
    output: {

        //输出路径
        path:  path.join(__dirname, 'public/js'),

        //最终输出脚本
        filename: '[name].js',
        //filename: '[name].[hash].js'

        publicPath: "/public/"
    },

    //***********************************************

    //插件
    plugins: [

    ],


    module: {
        loaders: [

            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
                loader: 'url-loader?limit=500000&name=/images/[name].[ext]'
            },

            //CSS Loader
            //npm i css-loader style-loader --save-dev
            {
                test: /\.css$/,

                //开发环境下使用这个加载器
                loaders: ['style', 'css'],

                //这里指定样式表的路径
                include: [
                    //path.join(__dirname, 'node_modules', 'purecss'),
                    path.join(__dirname, 'resources/assets/css', 'main.css')
                ]
            },


            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                },
                include: path.join(__dirname, 'resources/assets/js')
            }
        ]
    },

    externals: {
        "jquery": "jQuery"
    }
};



module.exports = config;