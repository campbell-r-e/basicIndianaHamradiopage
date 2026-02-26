<script setup>

import { onMounted } from 'vue'
import { store } from './store.js'
import Navbar from "./components/Navbar.vue"
import { useRoute } from "vue-router"

const route = useRoute()
onMounted(() => {
  store.fetchData();
});
</script>

<template>
  <div class="app">
    <Navbar />

    <div class="content">
      <h1>Welcome to IndianaHamRadio.com</h1>
      <router-view />
    </div>
  </div>
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
<style>
.app {
  min-height: 100vh;
  color: white; 

  background:
    linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url('/background.jpg') center center / cover no-repeat;

  background-attachment: fixed;
  .content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
}
}
</style>