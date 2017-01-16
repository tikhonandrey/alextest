var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: [
        path.resolve(__dirname,'./src/app.js')
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        proxy: [{
            path: '/api/',
            target: 'http://localhost:3001'
        }],
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            // images
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(node_modules|bower_components)/,
                loaders: [
                    'file?hash=sha512&digest=hex&path=build&name=[name].[hash:6].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }

        ]
    },
    resolve: {
        root: [
            path.join(__dirname, 'src')
        ],
        //модули будут искать в папках
        modulesDirectories: ['node_modules'],
        //при импорте модулей автоподстановка расширений
        extensions: ['','.js']

    },

}