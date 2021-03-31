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
    },
    css:{
        loaderOptions:{
            postcss:{
                plugins:[require('postcss-plugin-namespace')('.single-spa-subVue',{ ignore: [ '*','#app' ] })]
            }
        }
    }
}
