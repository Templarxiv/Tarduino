module.exports = {
    output: {
        filename: "tard.js",
        library: "Tard",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: "awesome-typescript-loader"
            }]
        }]
    },
    externals: {
        "johnny-five": "johnny-five"
    }
}