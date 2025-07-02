<template>
<div class="flex flex-col md:flex-row justify-center w-full bg-black items-center p-4 rounded-lg shadow-md gap-2">
  <div class="flex flex-col md:flex-row items-center w-full max-w-2xl mx-auto gap-0.5">
    <!-- القائمة المنسدلة للتصنيفات -->
    <div class="relative w-full md:w-[120px]">
      <select class="appearance-none bg-gray-800 px-4 py-2 text-white rounded-lg md:rounded-l-lg md:rounded-r-none w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option disabled selected>النوع</option>
        <option>الكل</option>
        <option>أطفال</option>
        <option>أكشن</option>
        <option>رعب</option>
        <option>مغامرات</option>
        <option>رياضة</option>
        <option>سباق</option>
        <option>استراتيجية</option>
        <option>جماعية</option>
        <option>فردية</option>
        <option>تعليمية</option>
        <option>ألغاز</option>
        <option>بنات</option>
        <option>موسيقية</option>
        <option>تقمص أدوار</option>
        <option>محاكاة</option>
        <option>قتال</option>
        <option>إطلاق نار</option>
        <option>مغامرات</option>
        <option>سباقات سيارات</option>
        <option>كرة قدم</option>
        <option>كرة سلة</option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-2 flex items-center text-white">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
    <!-- حقل البحث -->
    <div class="relative w-full flex-1">
<input
  type="text"
  placeholder="أكتب اسم اللعبة"
  class="bg-gray-800 text-white placeholder-white text-right placeholder:text-right py-2 px-3 rounded-lg md:rounded-r-lg md:rounded-l-none w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
      <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </div>
    </div>
    <!-- زر البحث -->
    <button class="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-white transition duration-300 hover:text-gray-800 w-full md:w-auto ml-2">
      بحث
    </button>
  </div>
</div>
</template>
<script setup>
const Category = [ 'الكل','أطفال', 'أكشن', 'رعب', 'مغامرات', 'رياضة', 'سباق', 'استراتيجية', '  جماعية', '  فردية', '  تعليمية', '  ألغاز','بنات', '  موسيقية', '  تقمص أدوار', '  محاكاة', '  قتال', '  إطلاق نار', '  مغامرات', '  سباقات سيارات', ' كرة قدم', ' كرة سلة'];
</script>
<style scoped>
/* إزالة الأنماط الافتراضية للقائمة المنسدلة */
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
</style>