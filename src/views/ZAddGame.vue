<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6" dir="rtl">
    <!-- Container واسع + Shadow أحلى + Hover subtle -->
    <div class="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 p-10 text-right">
      <!-- رابط العودة لجدول الألعاب -->
      <div class="flex justify-between items-center mb-6">
        <div>
          <h2 class="text-3xl font-semibold text-gray-900">إضافة لعبة جديدة</h2>
          <p class="text-gray-600">قم بتعبئة جميع بيانات اللعبة أدناه.</p>
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
      <div class="space-y-8">
        <!-- Row 1: الصورة + الاسم -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">رابط صورة الغلاف</label>
            <div class="flex gap-2">
              <input
                type="text"
                v-model="game.cover_image"
                placeholder="ادخل رابط صورة الغلاف"
                class="flex-1 p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
              />
              <a
                v-if="game.title_en || game.title"
                :href="`https://www.google.com/search?tbm=isch&q=${encodeURIComponent((game.title_en || game.title) + ' poster')}`"
                target="_blank"
                class="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl shadow-md transition flex items-center gap-2 whitespace-nowrap text-sm font-bold"
              >
                بحث عن بوستر 🔍
              </a>
            </div>
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
          <div>
            <label class="block text-gray-700 font-semibold mb-2">اسم اللعبة (إنجليزي)</label>
            <div class="relative">
              <input
                type="text"
                v-model="game.title_en"
                @blur="translateTitle"
                placeholder="ادخل اسم اللعبة بالإنجليزي"
                class="w-full p-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-300 transition"
              />
              <span v-if="isTranslating" class="absolute left-3 top-3 text-xs text-blue-500 animate-pulse">جاري الترجمة...</span>
            </div>
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
        <div class="flex">
          <button
            @click="submitGame"
            :disabled="isLoading"
            class="bg-gradient-to-r cursor-pointer from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-50"
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
  title_en: "",
  release_year: 2000,
  platform_id: "",
  genre_id: "",
  downloads: 0,
  rating: 4,
  description: "",
  cover_image: "",
  mega_link: "",
  drive_link: "",
  telegram_link: ""
});

const isTranslating = ref(false);

const translateTitle = async () => {
  if (!game.value.title_en) return;

  isTranslating.value = true;
  try {
    // استخدام API ترجمة مجاني (MyMemory)
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(game.value.title_en)}&langpair=en|ar`);
    const data = await res.json();
    if (data.responseData && data.responseData.translatedText) {
      game.value.title = data.responseData.translatedText;
    }
  } catch (err) {
    console.error("Translation error:", err);
  } finally {
    isTranslating.value = false;
  }
};

const isLoading = ref(false);
const errors = ref({});
const addedGame = ref(null);
const genres = ref([]);
const platforms = ref([]);
onMounted(async () => {
  try {
    const [genresData, platformsData] = await Promise.all([
      getGenres(),
      getPlatforms()
    ]);
    genres.value = genresData;
    platforms.value = platformsData;

    // تعيين المنصة الافتراضية إلى PC إذا كانت موجودة
    const pcPlatform = platforms.value.find(p => p.name_en === 'PC');
    if (pcPlatform) {
      game.value.platform_id = pcPlatform.id;
    }
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
  if (!game.value.release_year) {
    e.release_year = "يجب اختيار سنة الإصدار";
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
  if (game.value.rating !== null && (game.value.rating < 0 || game.value.rating > 5)) {
    e.rating = "التقييم يجب أن يكون بين 0 و 5";
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
  isLoading.value = true;
  try {
    const result = await addGame(game.value);
    addedGame.value = result;
    // إعادة تعيين النموذج مع القيم الافتراضية
    const pcPlatform = platforms.value.find(p => p.name_en === 'PC');
    game.value = {
      title: "",
      title_en: "",
      release_year: 2000,
      platform_id: pcPlatform ? pcPlatform.id : "",
      genre_id: "",
      downloads: 0,
      rating: 4,
      description: "",
      cover_image: "",
      mega_link: "",
      drive_link: "",
      telegram_link: ""
    };
    errors.value = {};
    alert("تمت إضافة اللعبة بنجاح! ✅");
  } catch (err) {
    console.error(err);
    alert("حدث خطأ أثناء الإضافة ❌");
  } finally {
    isLoading.value = false;
  }
};
const years = Array.from({ length: 46 }, (_, i) => 1980 + i); // من 1980 لـ 2025
</script>
