<template>
    <div class="d-flex justify-center bg-black items-center p-4 bg- rounded-lg shadow-md">
        <div class=" p-2 flex items-  justify-center w-full max-w-2xl mx-auto">
            <!-- قائمة منسدلة للتصنيفات -->
            <div class="relative ">
                <select
                    class="appearance-none bg-gray-800 px-4  py-2  mr-0.5  w-[100px] text-white rounded-l-lg rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option disabled selected>النوع</option>
<option v-for="categor in Category">{{categor}}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
            <!-- حقل البحث -->
<div class="relative w-2/3">
  <input
    type="text"
    placeholder="أكتب اسم اللعبة"
    class="bg-gray-800 text-gray-400 placeholder-white py-2 px-0.5 text-right rounded-r-lg focus:outline-none focus:ring-2
     focus:ring-blue-500 focus:text-white w-full pr-3"
  />
  <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
    <!-- أيقونة بحث -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
    </svg>
  </div>
</div>
   <button class="text-white bg-gray-800 px-4  py-2 rounded ml-3 cursor-pointer hover:bg-white  transition duration-[250ms] hover:text-gray-800">بحث</button>
        </div>
    </div>
</template>
<script setup>
const Category = [ 'الكل','أطفال', 'أكشن', 'رعب', 'مغامرات', 'رياضة', 'سباق', 'استراتيجية', 'ألعاب جماعية', 'ألعاب فردية', 'ألعاب تعليمية', 'ألعاب ألغاز','بنات', 'ألعاب موسيقية', 'ألعاب تقمص أدوار', 'ألعاب محاكاة', 'ألعاب قتال', 'ألعاب إطلاق نار', 'ألعاب مغامرات', 'ألعاب سباقات سيارات', 'ألعاب كرة قدم', 'ألعاب كرة سلة'];
</script>
<style scoped>
/* إزالة الأنماط الافتراضية للقائمة المنسدلة */
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
</style>