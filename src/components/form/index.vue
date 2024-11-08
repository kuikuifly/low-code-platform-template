<!--
 * @Date: 2024-11-08 15:11:02
 * @LastEditors: kuikuifly dcr_zhaokuid@dcits.com
 * @LastEditTime: 2024-11-08 15:13:03
 * @FilePath: \low-code-platform-template\src\components\form\index.vue
-->

<template>
    <a :href="obj.link">
      <img
        :src="obj.src"
        width="100%"
        alt="图片"
      />
    </a>
  </template>
  
  <script>
  export default {
    name: 'banner',
    props: {
      obj: {
        type: Object,
        default: () => {}
      }
    }
  }
  </script>