<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<!-- 안 바뀌는 정적 헤더(fixed vue와 dynamic vue를 정리) -->
  <div id="nav">
      <router-link to="/">Header</router-link>
      <router-link to="/award">Award</router-link>
  </div>
  <router-view />
  <!--<HelloWorld></HelloWorld>-->
</template>

<style scoped>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>