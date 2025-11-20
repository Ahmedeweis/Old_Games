<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6" dir="rtl">
    <!-- Container واسع + Shadow أحلى + Hover subtle -->
    <div class="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 p-10 text-right">
      <h2 class="text-3xl font-semibold mb-1 text-gray-900">إضافة لعبة جديدة</h2>
      <p class="text-gray-600 mb-6">قم بتعبئة جميع بيانات اللعبة أدناه.</p>
      <div class="space-y-8">
        <!-- Row 1: الصورة + الاسم -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">رابط صورة الغلاف</label>
            <input
              type="text"
              v-model="game.cover_image"
              placeholder="ادخل رابط صورة الغلاف"
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            />
          </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2">اسم اللعبة</label>
            <input
              type="text"
              v-model="game.title"
              placeholder="ادخل اسم اللعبة"
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            />
          </div>
        </div>
        <!-- Row 2: السنة + المنصة + النوع -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">سنة الإصدار</label>
            <select
              v-model="game.release_year"
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            >
              <option disabled value="">اختر السنة</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2">المنصة</label>
            <select
              v-model="game.platform_id"
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            >
              <option disabled value="">اختر المنصة</option>
              <option v-for="platform in platforms" :key="platform.id" :value="platform.id">
                {{ platform.name_en }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2">النوع</label>
            <select
              v-model="game.genre_id"
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            >
              <option disabled value="">اختر النوع</option>
              <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{ genre.name_ar }}</option>
            </select>
          </div>
        </div>
        <!-- Row 3: التحميلات + التقييم -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">عدد التحميلات</label>
            <input
              type="number"
              v-model.number="game.downloads"
              placeholder="مثال: 1200"
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            />
          </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2">التقييم (0–5)</label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              v-model.number="game.rating"
              placeholder="مثال: 4.5"
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            />
          </div>
        </div>
        <!-- Row 4: الوصف -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">الوصف</label>
          <textarea
            v-model="game.description"
            rows="4"
            placeholder="اكتب وصف اللعبة"
            class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
          ></textarea>
        </div>
        <!-- Row 5: روابط التحميل -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div>
    <label class="block text-gray-700 font-semibold mb-2">رابط MEGA</label>
    <input
      v-model="game.mega_link"
      type="text"
      placeholder="رابط MEGA"
      class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
    />
  </div>
  <div>
    <label class="block text-gray-700 font-semibold mb-2">رابط Google Drive</label>
    <input
      v-model="game.drive_link"
      type="text"
      placeholder="رابط Google Drive"
      class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
    />
  </div>
  <div>
    <label class="block text-gray-700 font-semibold mb-2">رابط Telegram</label>
    <input
      v-model="game.telegram_link"
      type="text"
      placeholder="رابط Telegram"
      class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
    />
  </div>
</div>
        <!-- Submit -->
        <div class="flex ">
          <button
            @click="submitGame"
            :disabled="isLoading"
            class="bg-gradient-to-r cursor-pointer  from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-50"
          >
            {{ isLoading ? "جاري الإضافة..." : "إضافة اللعبة" }}
          </button>
        </div>
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
const years = Array.from({ length: 46 }, (_, i) => 1980 + i); // من 1980 لـ 2025
</script>
