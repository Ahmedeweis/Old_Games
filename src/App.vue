<template>
  <div class="min-h-screen bg-neutral-900  dark:bg-gray-900 text-gray-900 dark:text-white">
    <Header @toggleDarkMode="toggleDarkMode" />
    <!-- <Search /> -->
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>
<script setup>
// import Search from './components/Search.vue';
import Header from './components/Header.vue';
</script>
