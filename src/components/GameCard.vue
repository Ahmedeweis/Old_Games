<!-- GameCard.vue -->
<template>
<div class="bg-[#1E1E1E] rounded-lg shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl h-[460px]">
    <div class="relative">
<img :src="game.image" alt="Game Image" class="w-full h-48 object-cover" />
    </div>
    <div class="p-6 ">
      <div class="flex items-center justify-between mb-3">
<h2 class="text-xl font-semibold text-white leading-snug h-[3.5rem] overflow-hidden">
  {{ game.title }}
</h2>
<span class="min-w-max bg-blue-100 text-blue-700 text-sm font-medium px-3 rounded-full self-start">
        {{ game.date }}
  {{ game.time }}
</span>
      </div>
<span
  class="inline-block text-sm font-medium rounded-full py-1 "
  :style="{ color: getColor(game.type) }"
>
  {{ game.type }}
</span>
<p class="text-[#939DA1] text-sm leading-relaxed min-h-[72px] line-clamp-3">
  {{ game.description || "No description available." }}
</p>
      <div class="  flex  items-center justify-between mt-5">
        <span class="text-base font-bold flex items-start justify-center text-gray-700">
          <img src="../assets/imgs/download.png" class="w-5" />
          <span class="ml-2.5 text-gray-400">{{ game.downloads }}</span>
        </span>
        <button class="bg-purple-800 cursor-pointer text-white px-5 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-200">
          تحميل
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  game: Object
});
const getColor = (type) => {
  switch (type) {
    case 'Platformer':
      return '#188038';
    case 'Action / Adventure':
      return '#1A73E8';
    case 'Tower Defense':
      return '#A142F4';
    case 'Action RPG':
      return '#E91E63'; // مثال إضافي
    case 'Beat ’em up':
      return '#FB8C00'; // مثال إضافي
    default:
      return '#999'; // لون افتراضي
  }
};
</script>
