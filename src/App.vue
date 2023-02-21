<script setup>

import Form from './components/FormSubmit.vue'
import Mainlayout from './components/layout/Mainlayout.vue'
</script>

<template>
  <Mainlayout>
    <router-view></router-view>
  </Mainlayout>
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
