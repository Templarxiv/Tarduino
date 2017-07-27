var webpack = require('webpack');

module.exports = {
    output: {
        filename: "app.js"
    },
    devtool: "source-map",
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
        "react": "React",
        "react-dom": "ReactDOM"
    }
}