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
    <a href="https://t.me/BaR0dy" target="_blank" class="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer">  انضم علي قناه تيلجرام</a>
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
        <Search  />
        <div class="flex justify-center mb-6 flex-wrap gap-1 mt-[10px]">
<button v-for="(categor, index) in Category" :ref="el => categoryRefs[index] = el" class="bg-[--card] text-cyan-400 text-[16px] px-4 py-2 cursor-pointer rounded"
                @click="handleCategoryClick(categor, index)" :class="{ 'active': activeIndex === index }">
          {{ categor }}
        </button>
</div>
    </div>
<div class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 px-4 sm:px-8 py-6 w-full max-w-7xl mx-auto">
  <GameCard v-for="game in games" :key="game.id" :game="game" />
</div>
</div>
</template>
<script setup>
import rawGames from '../services/rawGames';
import GameCard from '../components/GameCard.vue';
import Search from '../components/Search.vue';
import Game from '../models/Game.js' // تأكد من أن مسار Game.js صحيح
import { ref, onMounted } from 'vue';
const Category = ['متعددة اللاعبين ' , 'نادرة', 'اسطورية','الأكثر تقييمًا', ' الكلاسيكية', 'الموصى بها', 'الأكثر تحميلا', 'احدث التنزيلات', 'الكل'];
const categoryRefs = ref([]);
const activeIndex = ref(Category.length - 1); // تحديد "الكل" كنشط افتراضيًا (المؤشر الأخير)
const handleCategoryClick = (categor, index) => {
  // امسح الكلاس active من جميع العناصر
  categoryRefs.value.forEach(el => el.classList.remove('active'));
  // أضف active للعنصر المختار
  categoryRefs.value[index].classList.add('active');
  activeIndex.value = index;
  // توجيه إلى الراوتر إذا كنت تستخدم Vue Router
  if (categor) {
    // $router.push({ name: 'categories', query: { category: categor } });
    console.log(`Selected: ${categor}`);
  }
};
onMounted(() => {
  // تفعيل "الكل" افتراضيًا
  if (categoryRefs.value[Category.length - 1]) {
    categoryRefs.value[Category.length - 1].classList.add('active');
  }
});
const games = ref(rawGames.map(game => new Game(game)));
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