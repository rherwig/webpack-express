const join = require('path').join;
const merge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const common = require('./common');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CopyWebpackPlugin([{
            from: join(__dirname, '../package.json'),
            to: join(__dirname, '../public')
        }])
    ]
});
