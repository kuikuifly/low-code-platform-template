<!--
 * @Date: 2024-11-08 15:11:21
 * @LastEditors: kuikuifly dcr_zhaokuid@dcits.com
 * @LastEditTime: 2024-11-08 15:12:30
 * @FilePath: \low-code-platform-template\src\components\banner\index.vue
-->
<script setup lang="ts">
</script>

<template>
  <div>
    <a :href="obj.link">
      <img
        :src="obj.src"
        width="100%"
        alt="图片"
      />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>