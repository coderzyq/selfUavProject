import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy"; //兼容浏览器
import cesium from "vite-plugin-cesium"; //cesium插件
import AutoImport from "unplugin-auto-import/vite"; //自动导入vue的api
import Components from "unplugin-vue-components/vite"; //自动导入vue的组件
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"; //自动导入element-plus的组件
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, //设置为true时才可以使用network的形式访问，以IP访问项目
    port: 8787,
    open: true,
    cors: true, //允许跨域
    proxy: {
      baseUrl: {
        target: "http://192.168.1.200:7286",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/baseUrl/, ""),
      },
    },
  },
  plugins: [
    vue(),
    cesium(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    AutoImport({
      vueTemplate: true,
      imports: ["vue", "vue-router", "pinia"], //自动导入vue的api
      dts: "./auto-imports.d.ts", //自动导入vue的api的类型声明文件
      eslintrc: {
        enabled: true,
        filepath: "./.eslintrc-auto-import.json", //生成eslint的配置文件
        globalsPropValue: true, // 全局变量是否生成注释
      },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: './src/components.d.ts', // 启用/禁用 .d.ts 文件
      // dirs 指定组件所在位置，默认为 src/components, 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ['src/components/', 'src/views/components/'],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ['vue'],
      // 解析 UI 组件库
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
