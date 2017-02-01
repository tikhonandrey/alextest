var path = require('path');
var DefinePlugin = require('webpack/lib/DefinePlugin');

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
            target: 'http://localhost:3000'
        }],
        historyApiFallback: true
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'PROJECT_URL': JSON.stringify('http://localhost:3000/api/')
            }
        })
    ],
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
    node: {
        fs: 'empty'
    }
};