<template>
  <header class="bg-gray-900  shadow sticky top-0 z-50">
   <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
<div class="hidden md:flex items-center gap-4">
  <a href="https://falcon-core.vercel.app/" target="_blank" class="w-10 h-10 flex items-center justify-center border rounded-full hover:shadow-md transition duration-300">
    <img src="../assets/imgs/falcon.png" alt="Falcon" class="w-8 h-8" />
  </a>
  <a href="https://www.tiktok.com/@bar0dy?_t=ZS-8wpxhNQu5Vn&_r=1" target="_blank" class="w-10 h-10 flex items-center justify-center border rounded-full hover:shadow-md transition duration-300">
    <img src="../assets/imgs/tik-tok.png" alt="TikTok" class="w-8 h-8" />
  </a>
  <a href="https://www.facebook.com/ahmedEweis0" target="_blank" class="w-10 h-10 flex items-center justify-center border rounded-full hover:shadow-md transition duration-300">
    <img src="../assets/imgs/face.png" alt="Facebook" class="w-8 h-8" />
  </a>
</div>
      <!-- روابط التنقل -->
<nav class="hidden md:flex space-x-4 text-white mt-2.5"  id="mainNav">
<router-link
  to="/Support"
  class="nav-link flex items-center text-orange-700 -mt-[10px] font-bold  gap-2  cursor-pointer">
  <!-- أيقونة دعم -->
  <img src="../assets/imgs/favourite.png" alt="Support Icon" class="w-8 h-8" />
  <span class="leading-none">ادعمنا</span>
</router-link>
  <router-link to="/categories" class="nav-link cursor-pointer hover:text-teal-300">التصنيفات</router-link>
  <router-link to="/about" class="nav-link cursor-pointer hover:text-teal-300">من نحن</router-link>
  <router-link to="/contact" class="nav-link cursor-pointer hover:text-teal-300">تواصل معنا</router-link>
    <router-link to="/" class="nav-link cursor-pointer hover:text-teal-300 active">الرئيسية</router-link>
</nav>
             <!-- الشعار -->
      <router-link to="/" class="text-xl font-bold text-white border-l-[2px] border-white pl-4">
         ألعاب زمان
                 <img src="../assets//imgs/Logo.png" alt="Logo" class="h-8 inline-block mr-2">
      </router-link>
      <!-- موبايل -->
      <div class="md:hidden relative">
        <button @click="toggleMobileMenu" class="text-gray-600">
          ☰
        </button>
        <div
          v-if="mobileMenuOpen"
          class="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg py-2 z-50"
        >
          <router-link
            to="/"
            class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            @click="closeMobileMenu"
          >الرئيسية</router-link>
          <router-link
            to="/categories"
            class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            @click="closeMobileMenu"
          >التصنيفات</router-link>
          <router-link
            to="/about"
            class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            @click="closeMobileMenu"
          >من نحن</router-link>
          <router-link
            to="/contact"
            class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            @click="closeMobileMenu"
          >اتصل بنا</router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
import { onMounted } from 'vue'
onMounted(() => {
  const navLinks = document.querySelectorAll('#mainNav .nav-link')
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // امسح الكل
      navLinks.forEach(el => el.classList.remove('active'))
      // ضيف للأكليك عليه
      link.classList.add('active')
    })
  })
})
</script>
<style scoped>
.active  {
    color: #15ded4; /* لون مخصص للروابط النشطة */
    font-weight: bold; /* جعل النص عريض */
    border-bottom: 2px solid #15ded4; /* إضافة خط سفلي */
    padding: 0 2px 10px;
}
</style>
