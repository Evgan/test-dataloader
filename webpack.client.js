const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Stylish = require('webpack-stylish');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
    const watchMode = argv.liveReload || false
    const modeEnv = argv.mode || 'development'
    const isProd = modeEnv === 'production'
    const config = webpackConfig(modeEnv)

    const optimizations = {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimizer: [],
    }

    if (isProd) {
        optimizations.minimizer.push(new UglifyJsPlugin())
    }

    // Что бы хэши были в PROD режиме
    const fileName = (ext) => isProd ? `[name].[contenthash].${ext}` : `[name].${ext}` ;

    return {
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 4200,
            host: require('os').hostname().toLowerCase(), // что бы по ip открывался а не по localhost
            watchContentBase: true,
            progress: true,
            hot: true,
            open: true,
            historyApiFallback: true,
        },
        resolve: config.resolve,
        module: {
            rules: [
                config.modules.js,
                config.modules.images,
                config.modules.styleModules,
                config.modules.styleNoModules,
                config.modules.styleLess,
                config.modules.styleCss,
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: fileName('css'), // Что бы хэши были в PROD режиме
                allChunks: true
            }),
            new Stylish(),
            new HtmlWebpackPlugin({
                template: './src/html/template.html',
                favicon: './src/static/favicons/favicon.ico',
            }),
            new WebpackNotifierPlugin({ alwaysNotify: false }),
            new Dotenv(),
        ],
        entry: ['./src/Client.tsx', './src/styles.scss'],
        output: {
            filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        performance: {
            hints: false,
        },
        optimization: optimizations,
    }
}
