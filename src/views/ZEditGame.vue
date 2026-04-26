<template>
  <div dir="rtl" class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex justify-center items-start">
    <!-- Container واسع + Shadow جميل -->
    <div class="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-10 mt-10">
      
      <!-- رابط العودة لجدول الألعاب -->
      <div class="flex justify-between items-center mb-6">
        <div>
          <h2 class="text-3xl font-bold text-gray-800"> تعديل بيانات اللعبة</h2>
          <p class="text-gray-600">قم بتعديل جميع بيانات اللعبة أدناه.</p>
        </div>
        <router-link 
          to="/GamesTable" 
          class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 shadow-sm"
        >
          <span>جدول الألعاب</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </router-link>
      </div>

      <form @submit.prevent="updateGameData" class="space-y-6">
        <!-- Row 1: الاسم + سنة الإصدار + المنصة -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">اسم اللعبة</label>
            <input
              v-model="game.title"
              type="text"
              placeholder="اسم اللعبة"
              required
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            />
          </div>
            <div>
    <label class="block text-gray-700 font-semibold mb-2">اسم اللعبة (إنجليزي)</label>
    <input
      v-model="game.title_en"
      type="text"
      placeholder="اسم اللعبة بالإنجليزي"
      class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
    />
  </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2">سنة الإصدار</label>
            <select
              v-model="game.release_year"
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            >
              <option disabled value="">اختر سنة الإصدار</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2">المنصة</label>
            <select
              v-model="game.platform_id"
              required
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            >
              <option disabled value="">اختر المنصة</option>
<option v-for="platform in platforms" :key="platform.id" :value="platform.id">
  {{ platform.name_en }}
</option>
            </select>
          </div>
        </div>
        <!-- Row 2: النوع + التحميلات + التقييم -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">النوع</label>
            <select
              v-if="genres.length"
              v-model="game.genre_id"
              required
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            >
              <option disabled value="">اختر النوع</option>
              <option v-for="genre in genres" :key="genre.id" :value="genre.id">
                {{ genre.name_ar }}
              </option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2">عدد التحميلات</label>
            <input
              v-model.number="game.downloads"
              type="number"
              min="0"
              placeholder="مثال: 1200"
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
            />
          </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2">التقييم (0 - 5)</label>
            <input
              v-model.number="game.rating"
              type="number"
              min="0"
              max="5"
              step="0.1"
              placeholder="مثال: 4.5"
              class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-300 transition"
            />
          </div>
        </div>
        <!-- Row 3: الوصف -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">الوصف</label>
          <textarea
            v-model="game.description"
            rows="4"
            placeholder="الوصف"
            class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition resize-none"
          ></textarea>
        </div>
        <!-- Row 4: الصورة -->
        <div>
          <label class="block text-gray-700 font-semibold mb-2">رابط الصورة</label>
          <input
            v-model="game.cover_image"
            type="text"
            placeholder="رابط الصورة"
            class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
          />
        </div>
        <!-- Row 5: روابط التحميل -->
  <div>
  <h3 class="text-gray-600 font-semibold mb-2">🔗 روابط التحميل (اختياري)</h3>
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
</div>
        <!-- Row 6: زر الحفظ -->
        <div class="flex ">
          <button
            type="submit"
            class="w-full md:w-auto bg-gradient-to-r  cursor-pointer  from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
             حفظ التعديلات
          </button>
        </div>
      </form>
      <!-- ✅ رسالة النجاح -->
      <div
        v-if="updatedGame"
        class="mt-6 bg-green-50 border border-green-300 text-green-800 p-4 rounded-xl text-center shadow-sm"
      >
        <h3 class="font-semibold">تم تحديث البيانات بنجاح!</h3>
        <p><strong>{{ updatedGame.title }}</strong></p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router"; // ✅ أضف useRouter
import {
  getGameById,
  updateGame,
  getGenres,
  getPlatforms,
} from "../services/gameService";
const route = useRoute();
const router = useRouter(); // ✅ استخدمه هنا
const gameId = route.params.id;
const game = ref({});
const genres = ref([]);
const platforms = ref([]);
const updatedGame = ref(null);
const years = Array.from({ length: 46 }, (_, i) => 1980 + i);
onMounted(async () => {
  try {
    // تحميل بيانات اللعبة الأصلية
    game.value = await getGameById(gameId);
    genres.value = await getGenres();
    platforms.value = await getPlatforms();
  } catch (err) {
    console.error("Error loading game:", err);
    alert("حدث خطأ أثناء تحميل بيانات اللعبة ❌");
  }
});
const updateGameData = async () => {
  try {
    const result = await updateGame(gameId, game.value);
    updatedGame.value = result;
    alert("✅ تم التحديث بنجاح!");
     router.push("/GamesTable"); // غيّر المسار حسب صفحة الجدول عندك
  } catch (err) {
    console.error("Error updating:", err);
    alert("حدث خطأ أثناء حفظ التعديلات ❌");
  }
};
</script>
<style scoped>
body {
  direction: rtl;
  font-family: "Cairo", sans-serif;
}
</style>
