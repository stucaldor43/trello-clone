const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: ["whatwg-fetch", "./index.js"],
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
      rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        {
            test: /\.js$/,
            exclude: path.resolve(__dirname, "node_modules"),
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                }
            }
        },
        {
            test: /\.css/,
            exclude: path.resolve(__dirname, "node_modules"),
            use: "raw-loader"
        },
        {
            test: /\.html/,
            exclude: path.resolve(__dirname, "node_modules"),
            use: "raw-loader"
        },
      ]  
    },
    devtool: "source-map",
    plugins: [
        new BrowserSyncPlugin({
            server: true
        })
    ],
    node: {
        fs: "empty",
        net: "empty"
    }
};