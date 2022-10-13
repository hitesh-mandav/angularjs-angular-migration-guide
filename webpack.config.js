module.exports = {
    mode: 'development',
    entry: './src/app/main.ts',
    output: {
        filename: '../src/dist/bundle.js',
    },
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            }
        ]
    }
}
