<template>
  <div class="min-h-screen bg-black text-white flex flex-col items-center justify-start relative overflow-hidden">
    <!-- الخلفية الداكنة مع تأثير متوهج -->
    <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
    <!-- النص الرئيسي -->
<div class="relative z-10 text-center">
<h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r mt-10 from-cyan-400 to-blue-600 mb-4 leading-tight">
   حمل أجمل الألعاب القديمة <br> ! والمجانية والآمنة
</h1>
  <!-- الأزرار -->
  <div class="space-x-4 flex justify-center">
    <a href="#games"  class="bg-cyan-400 text-black px-6 py-2 rounded-lg hover:bg-cyan-500 transition cursor-pointer">
      ابدأ اللعب دلوقتي
    </a>
    <a :href="SOCIAL_LINKS.telegram" target="_blank" class="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer">  انضم علي قناه تيلجرام</a>
  </div>
</div>
    <!-- الأطر للشخصيات -->
<!-- Wrapper -->
<div class="flex justify-center items-end gap-8 mt-16 w-full max-w-7xl px-6 mx-auto mb-[40px]" style="perspective: 1600px;">
  <!-- أقصى اليسار -->
  <div class="w-[33%] cursor-pointer h-[320px] [transform-style:preserve-3d] transition-transform duration-500 relative group"
       style="transform: rotateY(18deg) translateX(10px);">
    <div class="w-full h-full relative transition-transform duration-500 group-hover:rotate-y-180 [transform-style:preserve-3d]">
      <!-- الأمام -->
      <div class="absolute inset-0 bg-gray-800 border border-cyan-400 rounded-xl p-2 flex items-center justify-center backface-hidden z-10">
        <img src="../assets/imgs/panners/1p.png" alt="Character 1" class="h-full w-full object-cover rounded-lg" />
      </div>
      <!-- الخلف -->
      <div class="absolute inset-0 bg-cyan-950 text-white border border-cyan-400 rounded-xl p-4 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
<h3 class="text-xl font-bold mb-2">تحميل سريع وسهل</h3>
<p class="text-sm text-center">اضغط تحميل وابدأ اللعب فورًا — بدون تعقيد أو متطلبات صعبة.</p>
      </div>
    </div>
  </div>
  <!-- الوسط -->
  <div class="w-[33%] cursor-pointer h-[320px] [transform-style:preserve-3d] transition-transform duration-500 relative group z-10">
    <div class="w-full h-full relative transition-transform duration-500 group-hover:rotate-y-180 [transform-style:preserve-3d]">
      <!-- الأمام -->
      <div class="absolute inset-0 bg-gray-800 border border-cyan-400 rounded-xl p-2 flex items-center justify-center backface-hidden z-10">
        <img src="../assets/imgs/panners/2p.png" alt="Character 2" class="h-full w-full object-cover rounded-lg" />
      </div>
      <!-- الخلف -->
      <div class="absolute inset-0 bg-cyan-950 text-white border border-cyan-400 rounded-xl p-4 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
<h3 class="text-xl font-bold mb-2">أمانك أولويتنا</h3>
<p class="text-sm text-center">كل الألعاب على الموقع مُختارة بعناية وخالية من الفيروسات، لضمان تجربة آمنة 100% لك ولجهازك.</p>
      </div>
    </div>
  </div>
  <!-- أقصى اليمين -->
  <div class="w-[33%] cursor-pointer h-[320px] [transform-style:preserve-3d] transition-transform duration-500 relative group"
       style="transform: rotateY(-18deg) translateX(-10px);">
    <div class="w-full h-full relative transition-transform duration-500 group-hover:rotate-y-180 [transform-style:preserve-3d]">
      <!-- الأمام -->
      <div class="absolute inset-0 bg-gray-800 border border-cyan-400 rounded-xl p-2 flex items-center justify-center backface-hidden z-10">
        <img src="../assets/imgs/panners/4p.png" alt="Character 3" class="h-full w-full object-cover rounded-lg" />
      </div>
      <!-- الخلف -->
      <div class="absolute inset-0 bg-cyan-950 text-white border border-cyan-400 rounded-xl p-4 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
<h3 class="text-xl font-bold mb-2">ألعاب مجانية بالكامل</h3>
<p class="text-sm text-center">استمتع بمجموعة ضخمة من الألعاب القديمة الممتعة بدون أي رسوم أو اشتراكات.</p>
      </div>
    </div>
  </div>
</div>
    <!-- تأثير الخط المتوهج أسفل الأطر -->
    <div class="relative z-10 flex justify-center mt-4">
      <div class="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full "></div>
      <div class="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-4"></div>
      <div class="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
    </div>
  </div>
  <!-- ------------------------------------ -->
<div id="games" class="min-h-screen  bg-black text-white flex flex-col items-center justify-between relative overflow-hidden">
    <div class="max-w-7xl  w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-end py-3 gap-4">
        <!-- <img src="../assets/imgs/panners/pager3.png" class="w-[600px] h-[150px] object-cover rounded-lg shadow-lg" alt="Pager Image"> -->
<div class="flex flex-col self-end text-end">
  <h3 class="text-4xl md:text-[40px] mt-0 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2 md:mb-4 leading-snug break-words">
    اختار اللعبة المناسبة ليك
  </h3>
  <div class="flex justify-end">
    <span class="w-[100px] md:w-[150px] h-[3px] bg-gradient-to-r from-cyan-400 to-blue-600"></span>
  </div>
</div>
        <Search @search="handleSearch" @category-change="handleCategoryFilter" :search-term="searchQuery" />
        <div class="flex justify-center mb-6 flex-wrap gap-1 mt-[10px] items-center">
          <!-- زر إلغاء الفلترة -->
          <button
            v-if="isAnyFilterActive"
            @click="resetFilters"
            class="bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white px-3 py-2 cursor-pointer rounded transition-all flex items-center gap-1 font-bold mr-2"
            title="إلغاء جميع الفلاتر"
          >
            <span>إلغاء</span>
            <span class="text-xl">&times;</span>
          </button>

          <button v-for="(categor, index) in Category" :key="index" :ref="el => categoryRefs[index] = el" class="bg-[--card] text-cyan-400 text-[16px] px-4 py-2 cursor-pointer rounded"
                @click="handleCategoryClick(categor, index)" :class="{ 'active': activeIndex === index }">
          {{ categor }}
        </button>
</div>
    </div>
<div class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 px-4 sm:px-8 py-6 w-full max-w-7xl mx-auto">
  <GameCard v-for="game in paginatedGames" :key="game.id" :game="game" />
  <!-- رسالة في حال عدم وجود نتائج -->
  <div v-if="filteredGamesList.length === 0 && !loading" class="col-span-full text-center py-10 text-gray-500">
    لا توجد ألعاب تطابق هذا الفلتر.
  </div>
</div>

<!-- نظام الترقيم (Pagination) -->
<div v-if="totalPages > 1" class="flex justify-center items-center gap-2 pb-12">
  <button
    @click="changePage(currentPage + 1)"
    :disabled="currentPage === totalPages"
    class="p-2 rounded-lg bg-gray-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-700 transition-all"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <div class="flex gap-1">
    <button
      v-for="page in totalPages"
      :key="page"
      @click="changePage(page)"
      class="w-10 h-10 rounded-lg font-bold transition-all"
      :class="currentPage === page ? 'bg-cyan-400 text-black' : 'bg-gray-800 text-white hover:bg-gray-700'"
    >
      {{ page }}
    </button>
  </div>

  <button
    @click="changePage(currentPage - 1)"
    :disabled="currentPage === 1"
    class="p-2 rounded-lg bg-gray-800 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-700 transition-all"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>
</div>
</template>
<script setup>
import { SOCIAL_LINKS } from '../constants/socialLinks';
// import rawGames from '../services/rawGames';
import GameCard from '../components/GameCard.vue';
import Search from '../components/Search.vue';
// import Game from '../models/Game.js'
import { ref, onMounted, computed } from 'vue';
const Category = ['متعددة اللاعبين ' , 'نادرة', 'اسطورية','الأكثر تقييمًا', ' الكلاسيكية', 'الموصى بها', 'الأكثر تحميلا', 'احدث التنزيلات', 'الكل'];
const categoryRefs = ref([]);
const activeIndex = ref(Category.length - 1); // تحديد "الكل" كنشط افتراضيًا (المؤشر الأخير)

// const games = ref(rawGames.map(game => new Game(game)));
import { useRouter } from "vue-router";
import { getAllGamesSummary } from "../services/gameService";
const router = useRouter();
const filteredGamesList = ref([]);
const allGames = ref([]); // نسخة من كل الألعاب للفلترة
const loading = ref(true);
const error = ref(null);

// الترقيم (Pagination)
const currentPage = ref(1);
const itemsPerPage = 12;

const totalPages = computed(() => Math.ceil(filteredGamesList.value.length / itemsPerPage));

const paginatedGames = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredGamesList.value.slice(start, end);
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    // التمرير لأعلى قسم الألعاب عند تغيير الصفحة
    document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
  }
};

// حالات الفلترة
const searchQuery = ref('');
const selectedGenre = ref('الكل');
const selectedTag = ref('الكل');

const isAnyFilterActive = computed(() => {
  return searchQuery.value !== '' || selectedGenre.value !== 'الكل' || selectedTag.value !== 'الكل';
});

const resetFilters = () => {
  searchQuery.value = '';
  selectedGenre.value = 'الكل';
  selectedTag.value = 'الكل';
  activeIndex.value = Category.length - 1; // الرجوع لقسم "الكل"

  // إعادة تعيين كلاسات النشاط يدوياً
  categoryRefs.value.forEach(el => el && el.classList.remove('active'));
  if (categoryRefs.value[activeIndex.value]) {
    categoryRefs.value[activeIndex.value].classList.add('active');
  }

  filterGames();
};

const filterGames = () => {
  currentPage.value = 1; // إعادة الترقيم للصفحة الأولى عند تغيير الفلتر
  let filtered = [...allGames.value];

  // 1. الفلترة بالبحث
  if (searchQuery.value) {
    const term = searchQuery.value.toLowerCase();
    filtered = filtered.filter(g =>
      (g.title && g.title.toLowerCase().includes(term)) ||
      (g.title_en && g.title_en.toLowerCase().includes(term))
    );
  }

  // 2. الفلترة بالنوع (Genre) من مكون Search
  if (selectedGenre.value !== 'الكل') {
    filtered = filtered.filter(g => g.genre === selectedGenre.value || g.genre_name_ar === selectedGenre.value);
  }

  // 3. الفلترة بالأقسام (Tags) من أزرار الصفحة الرئيسية
  if (selectedTag.value !== 'الكل') {
    // هنا يمكنك إضافة منطق مخصص لكل قسم
    if (selectedTag.value === 'الأكثر تقييمًا') {
      filtered = filtered.filter(g => g.rating >= 4.5);
    } else if (selectedTag.value === 'الأكثر تحميلا') {
      filtered = filtered.sort((a, b) => b.downloads - a.downloads);
    } else if (selectedTag.value === 'احدث التنزيلات') {
      filtered = filtered.sort((a, b) => b.id - a.id);
    }
    // يمكنك إضافة المزيد من الشروط للأقسام الأخرى (نادرة، اسطورية، إلخ)
  }

  filteredGamesList.value = filtered;
};

const handleSearch = (term) => {
  searchQuery.value = term;
  filterGames();
};

const handleCategoryFilter = (genre) => {
  selectedGenre.value = genre;
  filterGames();
};

const handleCategoryClick = (categor, index) => {
  categoryRefs.value.forEach(el => el && el.classList.remove('active'));
  if (categoryRefs.value[index]) {
    categoryRefs.value[index].classList.add('active');
  }
  activeIndex.value = index;

  selectedTag.value = categor.trim();
  filterGames();
};

import { useRoute } from 'vue-router';
const route = useRoute();

onMounted(async () => {
  try {
    const data = await getAllGamesSummary();
    allGames.value = data;
    filteredGamesList.value = data;

    // تفعيل "الكل" افتراضيًا في الواجهة
    if (categoryRefs.value[Category.length - 1]) {
      categoryRefs.value[Category.length - 1].classList.add('active');
    }

    // التحقق من وجود genre في query string
    if (route.query.genre) {
      selectedGenre.value = route.query.genre;
      filterGames();
      // التمرير إلى قسم الألعاب
      document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
    }
  } catch (err) {
    error.value = "حدث خطأ أثناء تحميل الألعاب";
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>
<style scoped>
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
.active {
  background-color: #15ded4;
  color: black;
  font-weight: bold;
  font-size: 16px;
  /* border-bottom: 2px solid #15ded4; */
  padding:3px 15px 5px 15px;
}
</style>