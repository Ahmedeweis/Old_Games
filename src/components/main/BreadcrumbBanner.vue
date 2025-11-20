<template>
  <div
    class="relative bg-cover bg-center h-32 flex items-center text-white"
    :style="{ backgroundImage: `url(${game?.cover_image || defaultBanner})` }"
  >
    <!-- Layer المعتم -->
    <div class="absolute inset-0 bg-black/50"></div>
    <!-- نفس Container الأول بالظبط -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center py-3">
      <div class="text-start">
        <!-- العنوان لو عايز تعرضه زي الأول -->
        <h1 class="text-3xl font-bold mb-2 text-end">
          {{ translatedTitle || game?.title_en || pageTitle }}
        </h1>
        <!-- الـ Breadcrumb نفسه 1:1 -->
        <nav class="flex justify-center items-center flex-row-reverse text-sm text-gray-300 flex-wrap gap-1">
          <template v-for="(item, index) in autoBreadcrumbs" :key="index">
            <router-link
              v-if="index !== autoBreadcrumbs.length - 1"
              :to="item.path"
              class="hover:underline"
            >
              {{ item.name }}
            </router-link>
            <span
              v-else
              class="text-white font-semibold"
            >
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
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { getGameById } from '../../services/gameService'
const route = useRoute()
const game = ref(null)
const translatedTitle = ref('')
const defaultBanner = '/assets/imgs/default-banner.jpg' // صورة افتراضية لكل الصفحات
// العنوان الافتراضي لكل صفحة غير لعبة
const pageTitle = computed(() => {
  if (route.path.includes('contact')) return 'تواصل معنا'
  if (route.path.includes('about')) return 'من نحن'
  if (route.path.includes('offers')) return 'العروض'
  return 'مرحبا بك'
})
async function translateToArabic(text) {
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ar`)
    const data = await res.json()
    translatedTitle.value = data.responseData.translatedText || text
  } catch (e) {
    translatedTitle.value = text
  }
}
onMounted(async () => {
  const id = route.params.id
  if (id) {
    game.value = await getGameById(id)
    if (game.value?.title) translateToArabic(game.value.title)
  }
})
// Breadcrumb logic زي اللي عندك
const translations = {
  Home: 'الرئيسية',
  game: 'الألعاب',
  games: 'الألعاب',
  offers: 'العروض',
  contact: 'اتصل بنا',
  about: 'من نحن',
}
const autoBreadcrumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  const breadcrumbList = [{ name: 'الرئيسية', path: '/' }]
  let fullPath = ''
  segments.forEach(seg => {
    fullPath += '/' + seg
    const isId = seg.match(/^\d+$/) || seg.length > 20
    const name = isId ? (game.value?.title_en || 'اللعبة') : translations[seg.toLowerCase()] || seg.replace(/-/g, ' ')
    breadcrumbList.push({ name, path: fullPath })
  })
  return breadcrumbList
})
</script>
