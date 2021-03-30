import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './set-public-path'
import singleSpaVue from "single-spa-vue"

Vue.use(router)
Vue.config.productionTip = false

const appOptions = {
    el: "#microApp",
    router,
    render: h => h(App)
};

// singleSpaVue包装一个vue微前端服务对象
const vueLifecycles = singleSpaVue({
    Vue,
    appOptions
});
// if(window.singleSpaVue){
//     __webpack_public_path__ = 'http://localhost:9000/'

// }
if(!window.singleSpaVue){
    delete appOptions.el
    new Vue(appOptions).$mount("#app")
}

export const bootstrap = vueLifecycles.bootstrap; // 启动时
export const mount = vueLifecycles.mount; // 挂载时
export const unmount = vueLifecycles.unmount; // 卸载时

export default vueLifecycles;
