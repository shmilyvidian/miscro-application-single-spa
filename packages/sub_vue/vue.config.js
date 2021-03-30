module.exports = {
    // publicPath: '//localhost:9000',
    // devServer: {
    //     port: 9000
    // },
    configureWebpack: {
        output: {
            library: "sub_vue",
            libraryTarget: "umd",
        }
    }
}
