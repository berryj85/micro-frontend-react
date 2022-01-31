const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = function (env, argv) {
    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.[hash].js'
        },
        mode: env.production ? 'production' : 'development',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 8081,
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "static/media/[name].[ext]"
                        }
                    },
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    loader: require.resolve("file-loader"),
                    options: {
                        name: "static/media/[name].[ext]"
                    }
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack', 'url-loader']
                }
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "assets/css/[name].[contenthash:8].css",
                chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
                favicon: 'public/favicon.ico',
                inject: true
            }),
            new InterpolateHtmlPlugin({
                PUBLIC_URL: ''
            }),
            new ModuleFederationPlugin({
                name: 'dashboard',
                filename: 'dashboard-remote-entry.js',
                exposes: {
                    './DashboardApp': './src/DashboardApp.js',
                    './Widget': './src/reducer/Widget.js',
                    './routes': './src/routes.js'
                },
                remotes: {
                    'container': 'container@http://localhost:8080/container-remote-entry.js'
                },
                shared: {
                    ...deps,
                    react: {
                        eager: true,
                        singleton: true,
                        requiredVersion: deps.react,
                    },
                    'react-dom': {
                        eager: true,
                        singleton: true,
                        requiredVersion: deps['react-dom'],
                    },
                    'react-router-dom': {
                        eager: true,
                        singleton: true,
                        requiredVersion: deps['react-router-dom'],
                    },
                },
            })
        ],
    }
}