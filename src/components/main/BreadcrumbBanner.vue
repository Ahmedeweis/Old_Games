<template>
  <div
    class="relative bg-cover bg-center h-32 flex items-center text-white"
    :style="{ backgroundImage: `url(${finalBg})` }"
  >
    <!-- الـ Layer المعتم -->
    <div class="absolute inset-0 bg-black/50"></div>
    <!-- الـ Container الموحد مع الهيدر -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center py-3">
      <div class="text-start">
        <h1 class="text-3xl font-bold mb-2 text-end">{{ currentTitle }}</h1>
        <nav class="flex justify-center items-center flex-row-reverse text-sm text-gray-300 flex-wrap gap-1">
          <template v-for="(item, index) in autoBreadcrumbs" :key="index">
            <router-link
              v-if="index !== autoBreadcrumbs.length - 1"
              :to="item.path"
              class="hover:underline"
            >
              {{ item.name }}
            </router-link>
            <span v-else class="text-white font-semibold">
              {{ item.name }}
            </span>
            <svg
              v-if="index !== autoBreadcrumbs.length - 1"
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mx-1 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </template>
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
// Props
const props = defineProps({
  bgImage: String,
  currentTitle: String,
})
// Vue Router
const route = useRoute()
// Default fallback image
const fallbackImage = '/games/default.jpg'
const finalBg = ref(fallbackImage)
// Check if image URL is valid
const testImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.onload = () => resolve(url)
    img.onerror = () => reject()
  })
}
// Load background image, fallback if invalid
const loadBgImage = () => {
  if (!props.bgImage) {
    finalBg.value = fallbackImage
  } else {
    testImage(props.bgImage)
      .then(() => (finalBg.value = props.bgImage))
      .catch(() => (finalBg.value = fallbackImage))
  }
}
onMounted(loadBgImage)
watch(() => props.bgImage, loadBgImage)
// Breadcrumb translations
const translations = {
  Home: 'الرئيسية',
  game: 'الألعاب',
  games: 'الألعاب',
  offers: 'العروض',
  contact: 'اتصل بنا',
  about: 'من نحن',
}
// Generate breadcrumb items dynamically
const autoBreadcrumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  const breadcrumbList = []
  let fullPath = ''
  if (segments.length === 0) {
    return [{ name: 'الرئيسية', path: '/' }]
  }
  breadcrumbList.push({ name: 'الرئيسية', path: '/' })
  segments.forEach((seg, index) => {
    fullPath += '/' + seg
    const isId = seg.match(/^\d+$/) || seg.length > 20
    const name = isId
      ? props.currentTitle
      : translations[seg.toLowerCase()] || seg.replace(/-/g, ' ')
    breadcrumbList.push({ name, path: fullPath })
  })
  return breadcrumbList
})
</script>
