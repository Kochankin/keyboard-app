const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/app/index.js",
    output: {
        path: __dirname + '/dist', 
        filename: 'bundle.js', 
        publicPath: '/'
    },
    mode: 'development',

    devServer: {  
        contentBase: './src/public', 
        port: 7700,
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                  /node_modules/
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: "style-loader" }, 
                    { loader: "css-loader" }, 
                    { loader: "postcss-loader" },
                    { loader: "sass-loader" }
                ]
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 outputPath: 'images'
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/public/index.html",
            inject: 'body'
        })
    ]
};