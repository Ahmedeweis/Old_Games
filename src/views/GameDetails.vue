<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import rawGames from '../services/rawGames';
const route = useRoute();
const gameId = parseInt(route.params.id);
const game = ref(rawGames.find(g => g.id === gameId));
</script>
<template>
  <div class="p-8 text-white">
    <h1 class="text-3xl font-bold mb-4">{{ game.title }}</h1>
    <img :src="game.image" alt="Game Image" class="w-full max-w-md mb-6" />
    <p class="mb-2">النوع: {{ game.type }}</p>
    <p class="mb-2">سنة الإصدار: {{ game.time }}</p>
    <p class="mb-2">عدد التحميلات: {{ game.downloads }}</p>
    <p class="mb-4">{{ game.description }}</p>
    <!-- روابط التحميل -->
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
  </div>
</template>