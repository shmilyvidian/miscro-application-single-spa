import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import App from './App'

if (process.env.NODE_ENV === 'development') {
  // 开发环境直接渲染
  ReactDOM.render(<App />, document.getElementById('root'))
}

//创建生命周期实例
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById('root')
})

// 项目启动的钩子
export const bootstrap = [
  reactLifecycles.bootstrap,
]
// 项目启动后的钩子
export const mount = [
  reactLifecycles.mount,
]
// 项目卸载的钩子
export const unmount = [
  reactLifecycles.unmount,
]