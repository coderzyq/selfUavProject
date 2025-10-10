// import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import 'cesium/Widgets/widgets.css'
import "element-plus/dist/index.css"
// 此错误提示找不到 “vue” 模块，可能是未安装依赖，代码本身语法无误。
// 若已安装依赖，可检查 tsconfig.json 中的路径配置。此处保持原代码不变。
const app = createApp(App)
app.mount('#app')
