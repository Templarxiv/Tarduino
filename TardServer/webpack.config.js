module.exports = {
    output: {
        filename: "TardServer.js",
        library: "TardServer",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    target: 'node',
    // devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                },
                {
                    loader: "awesome-typescript-loader"
                }
            ]
        }]
    },
    externals: {
        // "../../TardLib/src/main": "require(\"./tard.js\")"
    }
}