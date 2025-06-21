<template>
  <div class="min-h-screen bg-neutral-900  dark:bg-gray-900 text-gray-900 dark:text-white">
    <Header @toggleDarkMode="toggleDarkMode" />
    <!-- <Search /> -->
    <main class="flex-1">
    <!-- Banner يظهر فقط إذا لم تكن الصفحة هي Home -->
    <BreadcrumbBanner
      v-if="showBanner"
      :bgImage="bannerImage"
      :currentTitle="bannerTitle"
    />
      <router-view />
    </main>
  </div>
</template>
<script setup>
import Header from './components/Header.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import BreadcrumbBanner from './components/main/BreadcrumbBanner.vue'
import rawGames from './services/rawGames' // ✅ استيراد البيانات
const route = useRoute()
// ✅ تحديد اللعبة من ID إن وُجد
const game = computed(() => {
  const id = parseInt(route.params.id)
  return rawGames.find(g => g.id === id)
})
// ✅ شرط إظهار البانر (في كل الصفحات ما عدا Home)
const showBanner = computed(() => route.name !== 'Home')
// ✅ عنوان البانر
const bannerTitle = computed(() => {
  if (route.name === 'GameDetails' && game.value) {
    return game.value.title
  }
  return route.name || 'Page'
})
// ✅ صورة البانر
const bannerImage = computed(() => {
  if (route.name === 'GameDetails' && game.value) {
    return game.value.image
  }
  return '/imgs/general-banner.jpg'
})
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
}
</script>
