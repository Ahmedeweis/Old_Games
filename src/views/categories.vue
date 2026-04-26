<template>
  <div class="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
    <!-- Background Effects matching Home.vue -->
    <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" style="animation-delay: 2s"></div>
    </div>
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Header -->
      <div class="mb-12 flex flex-col items-end text-right">
        <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
          تصفح الألعاب حسب النوع
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
      </div>

      <!-- Categories Sections -->
      <div v-if="loading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
      </div>

      <div v-else class="space-y-16">
        <div v-for="genre in genres.filter(g => getGamesByGenre(g.id).length > 0)" :key="genre.id" class="category-section">
          <!-- Genre Title -->
          <div class="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
            <!-- Left side: More link -->
            <router-link
              v-if="getGamesByGenre(genre.id).length > 4"
              :to="{ path: '/', query: { genre: genre.name_ar || genre.name } }"
              class="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 text-sm font-bold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              عرض المزيد
            </router-link>
            <div v-else></div>

            <!-- Right side: Title -->
            <h2 class="text-2xl font-bold flex items-center gap-3" :style="{ color: getColorById(genre.id) }">
              {{ genre.name_ar || genre.name }}
              <span class="w-2 h-8 rounded-full" :style="{ backgroundColor: getColorById(genre.id) }"></span>
            </h2>
          </div>

          <!-- Games Grid -->
          <div dir="rtl" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <template v-if="getGamesByGenre(genre.id).length > 0">
              <GameCard
                v-for="game in getGamesByGenre(genre.id).slice(0, 4)"
                :key="game.id"
                :game="game"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getGenres, getAllGamesSummary } from '../services/gameService';
import GameCard from '../components/GameCard.vue';
import { getColorById } from '../utils/gameTypeColors';

const genres = ref([]);
const allGames = ref([]);
const loading = ref(true);

const fetchContent = async () => {
  try {
    loading.value = true;
    const [genresData, gamesData] = await Promise.all([
      getGenres(),
      getAllGamesSummary()
    ]);

    // Sort genres to put specific ones first if requested, or just keep as is
    // Example: Putting "ألعاب بنات" and "قتال شوارع" if they exist
    genres.value = genresData;
    allGames.value = gamesData;
  } catch (error) {
    console.error('Error fetching categories content:', error);
  } finally {
    loading.value = false;
  }
};

const getGamesByGenre = (genreId) => {
  return allGames.value.filter(game => game.genre_id === genreId);
};

onMounted(() => {
  fetchContent();
});
</script>

<style scoped>
.category-section {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
