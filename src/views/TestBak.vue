<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
    <div class="bg-gray-50 border border-gray-200 rounded-2xl shadow-xl w-full max-w-md p-8">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-700">
        🎮 إضافة لعبة جديدة
      </h2>
      <form @submit.prevent="submitGame" class="space-y-4">
        <input
          v-model="game.title"
          type="text"
          placeholder="اسم اللعبة"
          required
          class="w-full p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <div class="flex gap-3">
          <input
            v-model="game.release_year"
            type="text"
            placeholder="سنة الإصدار"
            class="w-1/2 p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-400"
          />
          <select
            v-model="game.platform_id"
            required
            class="w-1/2 p-3 border border-gray-300 rounded-xl text-white focus:ring-2 focus:ring-blue-400"
          >
            <option disabled value=""class="text-white" >اختر المنصة</option>
            <option
              v-for="platform in platforms"
              :key="platform.id"
              :value="platform.id"
              class="text-red"
            >
              {{ platform.name }}
            </option>
          </select>
        </div>
        <select
          v-model="game.genre_id"
          required
          class="w-full p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-400"
        >
          <option disabled value="">اختر النوع</option>
          <option
            v-for="genre in genres"
            :key="genre.id"
            :value="genre.id"
          >
            {{ genre.name_ar }}
          </option>
        </select>
        <div class="flex gap-3">
          <input
            v-model.number="game.downloads"
            type="number"
            placeholder="عدد التحميلات"
            class="w-1/2 p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-400"
          />
          <input
            v-model.number="game.rating"
            type="number"
            step="0.1"
            placeholder="التقييم"
            class="w-1/2 p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <textarea
          v-model="game.description"
          rows="3"
          placeholder="الوصف"
          class="w-full p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-400 resize-none"
        ></textarea>
        <input
          v-model="game.cover_image"
          type="text"
          placeholder="رابط الصورة"
          class="w-full p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-400"
        />
        <h3 class="text-gray-600 font-semibold mt-4">🔗 روابط التحميل (اختياري)</h3>
<input
  v-model="game.mega_link"
  type="text"
  placeholder="رابط تحميل من MEGA"
  class="w-full p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-400"
/>
<input
  v-model="game.drive_link"
  type="text"
  placeholder="رابط تحميل من Google Drive"
  class="w-full p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-400"
/>
<input
  v-model="game.telegram_link"
  type="text"
  placeholder="رابط تحميل من Telegram"
  class="w-full p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-400"
/>
        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all duration-200"
        >
          ➕ إضافة اللعبة
        </button>
      </form>
      <div
        v-if="addedGame"
        class="mt-6 bg-green-50 border border-green-300 text-green-800 p-4 rounded-xl text-center"
      >
        <h3 class="font-semibold">✅ تمت الإضافة بنجاح!</h3>
        <p>
          <strong>{{ addedGame.title }}</strong> (ID: {{ addedGame.game_id }})
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { addGame, getGenres, getPlatforms } from "../services/gameService";
const game = ref({
  title: "",
  release_year: "",
  platform_id: "",
  genre_id: "",
  downloads: 0,
  rating: null,
  description: "",
  cover_image: "",
  mega_link: "",
  drive_link: "",
  telegram_link: ""
});
const errors = ref({});
const addedGame = ref(null);
const genres = ref([]);
const platforms = ref([]);
onMounted(async () => {
  try {
    genres.value = await getGenres();
    platforms.value = await getPlatforms();
  } catch (err) {
    console.error("Error loading dropdown data:", err);
  }
});
// ✅ دالة التحقق من صحة البيانات
const validateForm = () => {
  const e = {};
  if (!game.value.title || game.value.title.trim().length < 3) {
    e.title = "اسم اللعبة يجب أن يحتوي على 3 أحرف على الأقل";
  }
  if (!/^\d{4}$/.test(game.value.release_year)) {
    e.release_year = "أدخل سنة إصدار صحيحة مثل 2024";
  }
  if (!game.value.platform_id) {
    e.platform_id = "يجب اختيار المنصة";
  }
  if (!game.value.genre_id) {
    e.genre_id = "يجب اختيار النوع";
  }
  if (game.value.downloads < 0) {
    e.downloads = "عدد التحميلات لا يمكن أن يكون سالبًا";
  }
  if (game.value.rating !== null && (game.value.rating < 0 || game.value.rating > 10)) {
    e.rating = "التقييم يجب أن يكون بين 0 و 10";
  }
  if (
    game.value.cover_image &&
    !/^https?:\/\/.+/i.test(game.value.cover_image)
  ) {
    e.cover_image = "أدخل رابط صورة صحيح يبدأ بـ http أو https";
  }
  errors.value = e;
  return Object.keys(e).length === 0;
};
// 🚀 دالة الإرسال
const submitGame = async () => {
  if (!validateForm()) {
    alert("من فضلك تحقق من الحقول قبل الإرسال ❌");
    return;
  }
  try {
    const result = await addGame(game.value);
    addedGame.value = result;
    game.value = {
      title: "",
      release_year: "",
      platform_id: "",
      genre_id: "",
      downloads: 0,
      rating: null,
      description: "",
      cover_image: "",
    };
    errors.value = {};
  } catch (err) {
    console.error(err);
    alert("حدث خطأ أثناء الإضافة ❌");
  }
};
</script>
