const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js', // default: main.js
        publicPath: '/',
    },
    devtool: 'inline-source-map',  // readable src code in dist/
    devServer: {
        contentBase: './dist',
        // port: 9000,
        // open: true
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    require('autoprefixer')
                                ],
                            ],
                        },
                    },
                },
            ],
        }, ],
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Web Dev',
        }),
    ],
};