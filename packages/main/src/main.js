import Vue from 'vue'
import App from './App.vue'
import {registerApplication,start} from 'single-spa';
import router from './router'

Vue.config.productionTip = false

const loadScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
};

registerApplication('sub_vue',
  async ()=>{
      //当匹配成功的时候，加载子应用的js
      await loadScript(`http://localhost:9000/app.js`)
      // await loadScript(`http://localhost:9000/chunk-vendors.js`);
      return window.sub_vue; // 子应用打包umd格式。bootstrap mount unmount
  },
  //当匹配到/vue的时候执行上面的方法
  location => location.pathname.startsWith('/sub_vue'), 
)


registerApplication('sub_react',
  async ()=>{
      //当匹配成功的时候，加载子应用的js
      await loadScript(`http://localhost:3000/static/js/bundle.js`)
      await loadScript(`http://localhost:3000/static/js/vendors~main.chunk.js`)
      await loadScript(`http://localhost:3000/static/js/main.chunk.js`)
      
      return window.sub_react; // 子应用打包umd格式。bootstrap mount unmount
  },
  //当匹配到/vue的时候执行上面的方法
  location => location.pathname.startsWith('/sub_react'), 
)
//启动应用
start();

new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');