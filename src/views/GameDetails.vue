<template>
  <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center py-3">
    <div class="w-full flex justify-between items-center flex-wrap gap-2 my-4">
      <div class="flex flex-wrap gap-2">
        <span v-for="(type, index) in categories" :key="index" class="px-3 py-1 text-sm font-semibold rounded-full"
          :style="{ backgroundColor: getColor(type), color: '#fff' }">
          {{ type }}
        </span>
      </div>
      <h1 class="text-3xl font-bold text-white">
        {{ translatedTitle || game.title }}
      </h1>
    </div>
  </div>
  <div class="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center ">
    <div class="flex justify-between items-stert w-full max-w-7xl mx-auto  rounded-lg  gap-6 ">
      <div
        class="w-1/4 bg-[#F8F8F4] h-full max-w-md p-6 rounded-lg shadow-lg flex flex-col justify-between text-right gap-6">
        <div class="flex flex-col items-end gap-4">
          <h2 class="text-3xl text-center self-center font-bold  text-gray-400">
             <span class="text-emerald-400 text-3xl ">$ مجانية </span>
          </h2>
          <div class="flex justify-end items-center">
            <h2 class="text-neutral-600 mr-2 font-bold text-l">جميع الألعاب مجانية بالكامل</h2>
            <img src="../assets/imgs/delete.png" class="w-5 ">
          </div>
          <p class="text-sm text-neutral-600 font-medium">يمكنك رؤية المزيد من الألعاب المجانية  من خلال هذا
            الرابط الأمن <router-link to="/categories" class="text-emerald-400 hover:underline">معرفة
              المزيد</router-link></p>
          <div>
            <h3 class="text-neutral-600  mb-2 font-bold text-l">هل اللعبة أمنة؟</h3>
            <p class="text-sm text-neutral-600 font-medium"> نعم كل الألعاب والروابط أمنة تمام يمكنك الاطلاع علي تفاصيل
              الامان من هذا الرابط <router-link to="/categories" class="text-emerald-400 hover:underline">معرفة
                المزيد</router-link></p>
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <a href=""
            class="bg-[#2BCFAD] h-[50px] text-center pt-3 text-white px-4 py-2 rounded-lg hover:bg-emerald-500 transition duration-300">تحميل
            اللعبة من درايف</a>
          <a href=""
            class="bg-[#F83356] h-[50px] text-center pt-3 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition duration-300">تحميل
            اللعبة من ميجا</a>
          <a href=""
            class="bg-[#3E3E5E] h-[50px] text-center pt-3 text-white px-4 py-2 rounded-lg hover:bg-indigo-950 transition duration-300">تحميل
            اللعبة من درايف</a>
        </div>
        <div class="mt-6">
          <div class="flex items-center justify-between text-gray-500">
            <div class="text-end">
              <h2 class="text-2xl font-bold">4.2/5</h2>
              <div class="flex mt-1 justify-end">
                <img src="../assets/imgs/star.png" class="w-4 inline-block mr-0.5">
                <img src="../assets/imgs/star.png" class="w-4 inline-block mr-0.5">
                <img src="../assets/imgs/star.png" class="w-4 inline-block mr-0.5">
                <img src="../assets/imgs/star.png" class="w-4 inline-block mr-0.5">
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold"> {{ game.downloads }}</h2>
              <div class="flex items-center mt-1">
                <span class="text-s">تحميلات</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between text-neutral-600 mt-2">
            <h2 class="text-neutral-600">1,360</h2>
            <div class="flex items-center">
              <span class="text-neutral-600">رؤية</span>
              <img src="../assets/imgs/web.png" class="w-3 inline-block ml-1">
            </div>
          </div>
        </div>
      </div>
      <div class="w-3/4">
        <div class="w-full flex flex-col items-end bg-[#F8F8F4] rounded-lg shadow-lg">
          <GlareHover glareColor="#ffffff" glareOpacity="0.25" glareAngle="-30" glareSize="300" transitionDuration="800"
            class="mb-6 rounded-lg shadow-lg overflow-hidden">
            <img :src="game.image" alt="Game Image" class="w-full h-auto rounded-lg"
              style="max-width: 100%; max-height: 400px; object-fit: cover;"
              @error="e => e.target.src = '/games/default.jpg'" />
          </GlareHover>
          <div class="flex  justify-end gap-9 items-center w-full flex-row px-6 pb-6">
            <div class="flex justify-between items-center space-x-9">
              <img :src="game.image" alt="Game Image" class=" rounded-lg shadow-lg w-[50px] h-[50px]"
                style="object-fit: cover;" @error="e => e.target.src = '/games/default.jpg'">
              <img :src="game.image" alt="Game Image" class=" rounded-lg shadow-lg w-[50px] h-[50px]"
                style="object-fit: cover;" @error="e => e.target.src = '/games/default.jpg'">
              <img :src="game.image" alt="Game Image" class="rounded-lg shadow-lg w-[50px] h-[50px]"
                style="object-fit: cover;" @error="e => e.target.src = '/games/default.jpg'">
              <img :src="game.image" alt="Game Image" class=" rounded-lg shadow-lg w-[50px] h-[50px]"
                style="object-fit: cover;" @error="e => e.target.src = '/games/default.jpg'">
              <img :src="game.image" alt="Game Image" class="rounded-lg shadow-lg w-[50px] h-[50px]"
                style="object-fit: cover;" @error="e => e.target.src = '/games/default.jpg'">
            </div>
            <button class="bg-[#009089] text-white px-4 py-2 rounded-lg  transition duration-300">مزيد عن العبة</button>
          </div>
        </div>
        <div class="bg-[#F8F8F4] rounded-lg shadow-lg p-6 mt-6 w-full">
          جاري الانشاء ...
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="pt-0 px-8 pb-8 w-full  text-white">
    <h1 class="text-3xl font-bold mb-4">{{ game.title }}</h1>
    <img :src="game.image" alt="Game Image" class="w-full max-w-md mb-6" />
    <p class="mb-2">النوع: {{ game.type }}</p>
    <p class="mb-2">سنة الإصدار: {{ game.time }}</p>
    <p class="mb-2">عدد التحميلات: {{ game.downloads }}</p>
    <p class="mb-4">{{ game.description }}</p>
    <div v-if="game.links">
      <h2 class="text-xl font-semibold mb-2">روابط التحميل:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li v-for="(link, index) in game.links" :key="index">
          <a :href="link.url" target="_blank" class="text-blue-400 hover:underline">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </div> -->
</template>
<script setup>
import GlareHover from '../components/GlareHover.vue'
import { useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { getColor } from '../utils/gameTypeColors'
import rawGames from '../services/rawGames'
const route = useRoute()
const gameId = parseInt(route.params.id)
const game = ref(rawGames.find(g => g.id === gameId))
const categories = computed(() => [game.value?.type] || [])
const translatedTitle = ref('')
async function translateToArabic(text) {
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ar`)
    const data = await res.json()
    // نحاول نختار "سوبر ماريو" (بفاصل)
    const exactMatch = data.matches?.find(match =>
      match.translation.trim() === 'سوبر ماريو'
    )
    translatedTitle.value = exactMatch?.translation ||
      data.responseData.translatedText ||
      text
  } catch (e) {
    console.error('❌ فشل الترجمة:', e.message || e)
    translatedTitle.value = text // fallback
  }
}
// تشغيل الترجمة عند تغير العنوان
watch(
  () => game.value?.title,
  (newTitle) => {
    if (newTitle) translateToArabic(newTitle)
  },
  { immediate: true }
)
</script>
