const join = require('path').join;
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: join(__dirname, '../src'),
    entry: [
        './index'
    ],
    output: {
        filename: 'app.js',
        path: join(__dirname, '../public/assets'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            join(__dirname, '../node_modules'),
            join(__dirname, '../src')
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.less$/,
            use: ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            })
        }]
    },
    plugins: [
        new ExtractTextWebpackPlugin('app.css')
    ]
};
