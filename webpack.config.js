const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const modules = {
        js: {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "ts-loader",
                },
            ],
        },
        images: {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf|pdf|docx)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'images/[hash].[ext]',
                esModule: false
            }
        },
        styleModules: {
            test: /\.module\.s[ac]ss$/,
            // [ac] - означает что у нас будет ловить sAss и sCss
            // Добавили метку \.module, что бы модульными были только наши файлы стилей еторые будут оканчиаться
            // на module.scss и module.sass. Иначе, в случаи импорта внешней библиотеки с стилями (например bootstrap) их файлом
            // стеилей так же примениться данное изменение нейминга, что может его сломать
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
                'postcss-loader',
                'sass-loader'
            ]
        },
        styleNoModules: {
            test:  /^((?!\.module).)*scss/, // файл заканчивающийся НЕ на module.scss
            exclude: [path.resolve(__dirname, 'node_modules')],
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'typings-for-css-modules-loader',
                    options: {
                        modules: true,
                        namedExport: true,
                        camelCase: true,
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        namedExport: true
                    }
                }
            ]
        },
        styleLess: {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }]
        },
        styleCss: {
            test: /\.css/,
            use: ['style-loader', 'css-loader']
        },
    }

    if (env === 'production') {
        //modules.stylus.use.splice(2, 0, { loader: "postcss-loader" })
        //modules.stylusIsomorph.use.splice(2, 0, { loader: "postcss-loader" })
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            App: path.resolve(__dirname, 'src/App/'),
            Pages: path.resolve(__dirname, 'src/pages/'),
        },
    }

    return {
        modules,
        resolve,
    }
}
