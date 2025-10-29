<script setup lang="ts">
// import { Ion, Viewer } from 'cesium';
// import { onMounted } from 'vue';
// let viewer: Viewer | undefined;
// // 后续代码会使用此变量初始化 Cesium Viewer 实例
// onMounted(() => {
//   Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkNmE3NWNiMi1iNGRmLTRlNWUtYmE5ZS0xMWM3YjEyNzMxNjEiLCJpZCI6OTk5MzUsImlhdCI6MTY1NjkxMzY3MX0.S8rhi8SLw6eHjz9VtbdHqfYhkw_x3v97R-hbLKdhZKw'
//   const baseConfig: Viewer.ConstructorOptions = {
//     geocoder: false,
//     homeButton: true,
//     sceneModePicker: false,
//     baseLayerPicker: false,
//     navigationHelpButton: false,
//     animation: true,
//     timeline: false,
//     fullscreenButton: false,
//     vrButton: false,
//     scene3DOnly: false,
//     infoBox: false,
//     shouldAnimate: true
//   }
//   viewer = new Viewer('cesium-container', baseConfig);
//   viewer.scene.globe.depthTestAgainstTerrain = true;
//   //隐藏商标
//   // viewer.cesiumWidget.creditContainer.style.display = 'none';
// })
import { useUavBase } from '@/hooks/useUavBase'

const { container, loadModel, cesiumBoostrap } = useUavBase()
</script>

<template>
  <div id="cesium-container" ref="container"></div>
</template>

<style scoped>
#cesium-container {
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  position: absolute;
  z-index: 10;
}
</style>
