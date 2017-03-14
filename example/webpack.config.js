/**
 * Created by june on 2017/3/13.
 */
const webpack = require('webpack');
const path = require('path');

const webapp = __dirname;

module.exports = {
    entry: {
        'index': path.join(webapp, 'entry', 'index.js'),
    },
    output: {
        filename: '[name].js',
        path: path.join(webapp, 'dist')
    },
    module: {
        loaders: [
            // {
            //     test: /.js$/,
            //     loader: 'babel-loader',
            //     query: {
            //         "presets": [
            //             [
            //                 require.resolve("babel-preset-es2015")
            //             ]
            //         ],
            //         "plugins": [
            //             require.resolve("babel-plugin-transform-remove-strict-mode")
            //         ]
            //     }
            // },
            {
                test: /nej\-commonjs/,
                loader: "imports-loader?this=>window"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: JSON.stringify(false),
            CMPT: JSON.stringify(true)
        })
    ],
    resolve: {
        alias: {
            'nej-commonjs': path.resolve(webapp, '../nej-commonjs')
        }
    },
    devtool: 'cheap-source-map'
};
