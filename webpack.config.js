const { resolve } = require('path');

module.exports = {
    entry: {
        'script.site.js': [
            resolve('src/js/index.js')
        ]
    },
    output: {
        pathinfo: true,
        path: resolve('dist/'),
        filename: '[name]'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["@babel/preset-env", {
                            "loose": true,
                            "modules": false
                        }]
                    ]
                }
            }
        }]
    },
    resolve: {
        alias: {
            '@': resolve('src/js/')
        },
        extensions: ['.js', '.json']
    },
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             uglifyOptions: {
    //                 output: {
    //                     comments: false
    //                 }
    //             }
    //         })
    //     ]
    // },
    devtool: false,
    mode: 'development'
}