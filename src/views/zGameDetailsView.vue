<template>
  <div class="game-details-page" v-if="game">
    <div class="container">
      <div class="header">
        <img
          :src="game.cover_image || defaultImage"
          :alt="game.title"
          class="cover"
        />
        <div class="info">
          <h1 class="title">{{ game.title }}</h1>
          <p><strong>🗓️ سنة الإصدار:</strong> {{ game.release_year }}</p>
          <p>
            <strong>🎮 المنصة:</strong>
            {{ platformName || "-" }}
          </p>
          <p>
            <strong>📂 النوع:</strong>
            {{ genreName || "-" }}
          </p>
          <p><strong>⭐ التقييم:</strong> {{ game.rating || "غير متاح" }}</p>
          <p><strong>⬇️ التحميلات:</strong> {{ game.downloads }}</p>
        </div>
      </div>
      <div class="description">
        <h2>📖 الوصف</h2>
        <p>{{ game.description || "لا يوجد وصف متاح." }}</p>
      </div>
      <div class="downloads" v-if="hasAnyLink">
        <h2>🔗 روابط التحميل</h2>
        <div class="links">
          <a
            v-if="game.mega_link"
            :href="game.mega_link"
            target="_blank"
            class="btn mega"
            >MEGA</a
          >
          <a
            v-if="game.drive_link"
            :href="game.drive_link"
            target="_blank"
            class="btn drive"
            >Google Drive</a
          >
          <a
            v-if="game.telegram_link"
            :href="game.telegram_link"
            target="_blank"
            class="btn telegram"
            >Telegram</a
          >
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="loading" class="loading">⏳ جاري التحميل...</div>
  <div v-else-if="error" class="error">{{ error }}</div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { getGameById, getGenres, getPlatforms } from "../services/gameService";
const route = useRoute();
const game = ref(null);
const genres = ref([]);
const platforms = ref([]);
const loading = ref(true);
const error = ref(null);
const defaultImage = "https://via.placeholder.com/400x220?text=No+Image";
const hasAnyLink = computed(
  () =>
    !!(
      game.value?.mega_link ||
      game.value?.drive_link ||
      game.value?.telegram_link
    )
);
// ✅ استخراج اسم النوع بالعربي
const genreName = computed(() => {
  const genre = genres.value.find((g) => g.id === game.value?.genre_id);
  return genre ? genre.name_ar : null;
});
// ✅ استخراج اسم المنصة بالعربي
const platformName = computed(() => {
  const platform = platforms.value.find((p) => p.id === game.value?.platform_id);
  return platform ? platform.name_ar : null;
});
onMounted(async () => {
  try {
    // تحميل القوائم
    genres.value = await getGenres();
    platforms.value = await getPlatforms();
    // تحميل بيانات اللعبة
    const id = route.params.id;
    game.value = await getGameById(id);
  } catch (err) {
    console.error(err);
    error.value = "حدث خطأ أثناء تحميل بيانات اللعبة";
  } finally {
    loading.value = false;
  }
});
</script>
<style scoped>
.game-details-page {
  background: #111;
  color: #eee;
  min-height: 100vh;
  padding: 30px;
  font-family: "Cairo", sans-serif;
  direction: rtl;
}
.container {
  max-width: 900px;
  margin: auto;
}
.header {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #1e1e1e;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 0 15px #0008;
}
.cover {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}
.info {
  flex: 1;
}
.title {
  color: #ffcc00;
  font-size: 1.8rem;
  margin-bottom: 10px;
}
.description {
  background: #1b1b1b;
  padding: 20px;
  border-radius: 12px;
  margin-top: 25px;
}
.downloads {
  background: #1b1b1b;
  padding: 20px;
  border-radius: 12px;
  margin-top: 25px;
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: 0.3s;
}
.btn.mega {
  background: #cc0000;
}
.btn.drive {
  background: #0f9d58;
}
.btn.telegram {
  background: #0088cc;
}
.btn:hover {
  opacity: 0.85;
  transform: scale(1.05);
}
.loading,
.error {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
}
</style>
