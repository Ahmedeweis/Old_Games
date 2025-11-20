<template>
  <div class="min-h-screen bg-[#101828] flex flex-col justify-center items-center text-center px-6" dir="rtl">
    <!-- أيقونة -->
    <div class="bg-red-500/10 p-6 rounded-full mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01M10.29 3.86L1.82 18A2 2 0 003.62 21h16.76a2 2 0 001.8-3L13.71 3.86a2 2 0 00-3.42 0z"/>
      </svg>
    </div>
    <!-- العنوان -->
    <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
      الصفحة غير متاحة حاليًا
    </h1>
    <!-- الوصف -->
    <p class="text-gray-400 max-w-md leading-relaxed mb-6">
      نعمل حاليًا على تطوير وتحسين هذه الصفحة.
      يرجى العودة لاحقًا أو الرجوع إلى الصفحة الرئيسية.
    </p>
    <!-- زر الرجوع -->
    <router-link
      to="/"
      class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md"
    >
      العودة للرئيسية
    </router-link>
  </div>
</template>
<script setup>
</script>
<style scoped>
</style>
