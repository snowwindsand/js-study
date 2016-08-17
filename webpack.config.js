/**
 * Created by Administrator on 2016/7/1.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: "inline-source-map",
    //entry: ["babel-polyfill", __dirname + "/app/react/tutorial/index.js" ],
    entry: [
        'babel-polyfill',
        __dirname + "/app/es6/Root.js"
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 3888,
        hot: true
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css?modules!postcss"
        }, {
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.js[x]?$/,
            exclude: /node-modules/,
            loader: "babel"
        }]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new webpack.BannerPlugin('this file is created by dn'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            d3: 'd3'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:3888'
        })
    ]
};