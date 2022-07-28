<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
//fixed view는 정적 뷰 / views는 바뀌여야하는 뷰로 구분하기.
import HeaderVue from './fixedVue/Header.vue';
import FooterVue from './fixedVue/Footer.vue'
</script>

<template>
<!-- 안 바뀌는 정적 헤더(fixed vue와 dynamic vue를 정리) -->
  <!-- 헤더 -->
  <HeaderVue></HeaderVue>
  
   <!-- 라우터 뷰 -->
  <!-- <router-view /> -->
  
  <!-- 푸터 -->
  <FooterVue></FooterVue>
  <!--<HelloWorld></HelloWorld>-->
</template>

<style>
/* CSS => App.vue에서는 scoped 제거  */
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: auto;
} 

html{
  font-size: 10px;
}

body{
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  background-repeat: no-repeat;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>

<style scoped>

</style>