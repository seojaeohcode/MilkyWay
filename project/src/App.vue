<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Head from "./components/layout/Header.vue";

export default {
    name: "App",
    components: {
        Head,
    },
}
</script>

<template>
    <div id="app">
        <Head></Head>
        <div id="content" class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>

</style>
