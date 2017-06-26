const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        /*'polyfills' : './source/app/polyfills.ts',
        'vendor'    : './source/app/vendor.ts',*/
        'app'       : './source/app/main.ts'
    },
    output : {
        path       : __dirname + '/source/public',
        publicPath : '/public/',
        filename   : '[name].js'
    },
    resolve : {
        extensions : ['.ts', '.js']
    },
    module : {
        rules : [
            {
                test : /\.ts$/,
                loaders : [
                    {
                        loader  : 'awesome-typescript-loader',
                        options : {
                            configFileName : path.resolve('tsconfig.json')
                        }
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test   : /\.html$/,
                loader : 'html-loader'
            },
            {
                test   : /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader : 'file-loader?name=assets/[name].[ext]'
            },
            {
                test    : /\.css$/,
                exclude : path.resolve('source', 'app'),
                loader  : ExtractTextPlugin.extract({
                    fallbackLoader : 'style-loader',
                    loader         : 'css-loader?sourceMap'
                })
            },
            {
                test    : /\.css$/,
                include : path.resolve('source', 'app'),
                loader  : 'raw-loader'
            }]
    },
    plugins : [
        new webpack.ContextReplacementPlugin(
            /angular(\|\/)core(\|\/)(esm(\|\/)src|src)(\|\/)linker/,
            path.resolve(__dirname + '/source/node/public'),
            {}
        ),
        /*new webpack.optimize.CommonsChunkPlugin({
            name : ['app'/!*, 'vendor', 'polyfills'*!/]
        }),*/
        new HtmlWebpackPlugin({
            template: 'source/node/public/index.html'
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.NoEmitOnErrorsPlugin(),
        /*new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),*/
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false
            }
        })
    ]
};