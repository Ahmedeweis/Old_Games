<template>
  <div class="games-page">
    <h1 class="page-title">🎮 قائمة الألعاب</h1>
    <div v-if="loading" class="loading">جارِ التحميل...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="games-grid">
      <div
        v-for="game in games"
        :key="game.id"
        class="game-card"
        @click="goToDetails(game.id)"
      >
        <img
          :src="game.cover_image || defaultImage"
          :alt="game.title"
          class="cover"
        />
        <div class="info">
          <h2>{{ game.title }}</h2>
          <p><strong>السنة:</strong> {{ game.release_year }}</p>
          <p><strong>المنصة:</strong> {{ game.platform || '-' }}</p>
          <p><strong>النوع:</strong> {{ game.genre || '-' }}</p>
          <p class="desc">{{ shortDesc(game.description) }}</p>
          <p class="downloads">⬇️ التحميلات: {{ game.downloads }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted  } from "vue";
import { useRouter } from "vue-router";
import { getAllGamesSummary } from "../services/gameService";
const router = useRouter();
const games = ref([]);
const loading = ref(true);
const error = ref(null);
const defaultImage = "https://via.placeholder.com/300x160?text=No+Image";
function shortDesc(text) {
  if (!text) return "";
  return text.length > 70 ? text.slice(0, 70) + "..." : text;
}
function goToDetails(id) {
  router.push(`/zgame/${id}`);
}
onMounted(async () => {
  try {
    games.value = await getAllGamesSummary();
  } catch (err) {
    error.value = "حدث خطأ أثناء تحميل الألعاب";
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>
<style scoped>
.games-page {
  background: #111;
  color: #eee;
  min-height: 100vh;
  padding: 20px;
  font-family: "Cairo", sans-serif;
}
.page-title {
  text-align: center;
  color: #ffcc00;
  margin-bottom: 30px;
}
.loading,
.error {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
}
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.game-card {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 10px #0008;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}
.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px #000a;
}
.cover {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.info {
  padding: 15px;
}
.info h2 {
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 5px;
}
.info p {
  font-size: 0.9rem;
  margin: 4px 0;
  color: #bbb;
}
.downloads {
  color: #4caf50;
  font-weight: bold;
}
</style>
