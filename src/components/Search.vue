<template>
  <div class="flex flex-col md:flex-row justify-center w-full bg-black items-center p-4 rounded-lg shadow-md gap-2">
    <div class="flex flex-col md:flex-row items-center w-full max-w-2xl mx-auto gap-0.5">
      <!-- القائمة المنسدلة -->
      <div class="relative w-full md:w-[120px]">
<select
  v-model="selectedCategory"
  class="appearance-none bg-gray-800 px-4 py-2 text-white rounded-lg md:rounded-l-lg md:rounded-r-none w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option disabled selected>النوع</option>
  <option v-for="cat in categories" :key="cat">{{ cat }}</option>
</select>
        <div class="pointer-events-none absolute inset-y-0 right-2 flex items-center text-white">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
      <!-- حقل البحث -->
      <div class="relative w-full flex-1">
        <input
          type="text"
          placeholder="أكتب اسم اللعبة"
          v-model="searchTerm"
          @input="openModal = true"
          class="bg-gray-800 text-white placeholder-white text-right placeholder:text-right py-2 px-3 rounded-lg md:rounded-r-lg md:rounded-l-none w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </div>
      </div>
      <!-- زر البحث -->
      <button @click="openModal = true" class="text-white cursor-pointer bg-gray-800 px-4 py-2 rounded-lg hover:bg-white transition duration-300 hover:text-gray-800 w-full md:w-auto ml-2">
        بحث
      </button>
    </div>
    <!-- Modal -->
    <div v-if="openModal" class="fixed inset-0 bg-black/50 flex flex-col items-center z-50 ">
        <button @click="openModal = false" class="absolute top-2 left-3 text-3xl cursor-pointer text-gray-500 hover:text-gray-800 font-bold ">&times;</button>
              <input
          type="text"
          v-model="searchTerm"
          placeholder="أكتب اسم اللعبة"
          dir="rtl"
          class="w-full mb-4 px-3 py-2 border text-black bg-white border-gray-300 h-[60px]  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
     <div class="bg-[#0C0F21] rounded-lg w-[90%] max-w-3xl p-5 relative h-[90vh]">
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[400px] overflow-y-auto">
  <router-link
    v-for="game in filteredGames"
    :key="game.id"
    :to="`/game/${game.id}`"
    class="bg-[#1B1D2F] rounded-lg p-3 flex flex-col items-center gap-2 hover:scale-105 hover:shadow-lg transition-all"
  >
    <img :src="game.cover_image" alt="game cover" class="w-full h-32 object-cover rounded-lg" />
    <h3 class="text-center font-semibold">{{ displayTitle(game) }}</h3>
  </router-link>
  <!-- رسالة لو مافيش نتائج -->
  <div v-if="filteredGames.length === 0" class="col-span-full flex justify-center items-center text-gray-500 h-32">
    لا توجد نتائج
  </div>
</div>
</div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, computed ,onMounted } from 'vue'
import { searchGames } from '../services/gameService'
import { getGenres } from '../services/gameService';
const categories = ref([]);
const selectedCategory = ref('النوع');
onMounted(async () => {
  try {
    const data = await getGenres();
    categories.value = data.map(item => item.name_ar); // لو عايز بالعربي
  } catch (err) {
    console.error(err);
  }
});
// const categories = ['الكل','أطفال', 'أكشن', 'رعب', 'مغامرات','رياضة','سباق','استراتيجية','جماعية','فردية','تعليمية','ألغاز','بنات','موسيقية','تقمص أدوار','محاكاة','قتال','إطلاق نار','مغامرات','سباقات سيارات','كرة قدم','كرة سلة']
// const selectedCategory = ref('الكل')
const searchTerm = ref('')
const openModal = ref(false)
const filteredGames = ref([])
// Watch على البحث
watch(searchTerm, async (term) => {
  if (!term) {
    filteredGames.value = []
    return
  }
  openModal.value = true
  try {
    const results = await searchGames(term)
    filteredGames.value = results
  } catch (err) {
    console.error(err)
    filteredGames.value = []
  }
})
// Computed لاختيار الاسم حسب اللغة
const displayTitle = (game) => {
  // لو المستخدم كتب بالإنجليزية، نعرض title_en، لو بالعربي نعرض title
  const isEnglish = /[a-zA-Z]/.test(searchTerm.value)
  return isEnglish && game.title_en ? game.title_en : game.title
}
</script>