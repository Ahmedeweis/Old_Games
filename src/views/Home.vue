<template>
  <div class="min-h-screen bg-black text-white flex flex-col items-center justify-start relative overflow-hidden">
    <!-- الخلفية الداكنة مع تأثير متوهج -->
    <div class="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
    <!-- النص الرئيسي -->
<div class="relative z-10 text-center">
<h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 leading-tight">
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
</template>
<script setup>
// ممكن تضيف أي منطق هنا بعدين
</script>
<style scoped>
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
