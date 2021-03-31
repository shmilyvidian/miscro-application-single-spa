module.exports = {
    configureWebpack: {
        
    },
    css:{
        loaderOptions:{
            postcss:{
                plugins:[require('postcss-plugin-namespace')('.single-spa-main',{ ignore: [ '*','#app' ] })]
            }
        }
    }
}
