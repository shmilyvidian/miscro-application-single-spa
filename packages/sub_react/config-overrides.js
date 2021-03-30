const { override } = require('customize-cra');
const addCustomize = () => config => {
    if (process.env.NODE_ENV === 'production') {
      // 关闭sourceMap
      config.devtool = false;
      // 配置打包后的文件位置
      config.output.library = 'sub_react';
      config.output.publicPath = '//localhost:3000';
      config.output.libraryTarget = 'umd';
    }
    return config;
}

module.exports = {
    webpack: override(
        addCustomize()
    )
};
