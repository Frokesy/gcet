<script setup>
import Header from './components/defaults/Header.vue'
</script>

<template>
  <div id="app">
    <Header active="footwear" />

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2024 My Vue App. All rights reserved.</p>
    </footer>
  </div>
</template>


<style scoped>

</style>
