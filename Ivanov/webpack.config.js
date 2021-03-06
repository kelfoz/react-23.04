const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname,"build"),
        filename:"[name].js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    },
    plugins: [new HtmlWebpackPlugin({
        template: "src/index.html"
    })],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env',"@babel/preset-react"]
                }
            }
            }
        ]
    }
};