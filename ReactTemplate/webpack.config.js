module.exports = {
    entry: './Scripts/app/App.tsx',
    output: {
        filename: 'Scripts/build/bundle.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    }
};