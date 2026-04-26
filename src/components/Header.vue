<template>
  <header class="bg-gray-900 shadow sticky top-0 z-50 border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
      <div class="hidden md:flex items-center gap-4">
        <a :href="SOCIAL_LINKS.falcon_core" target="_blank"
          class="w-10 h-10 flex items-center justify-center border rounded-full hover:shadow-md transition duration-300">
          <img src="../assets/imgs/falcon.png" alt="Falcon" class="w-8 h-8" />
        </a>
        <a :href="SOCIAL_LINKS.tiktok" target="_blank"
          class="w-10 h-10 flex items-center justify-center border rounded-full hover:shadow-md transition duration-300">
          <img src="../assets/imgs/tik-tok.png" alt="TikTok" class="w-8 h-8" />
        </a>
        <a :href="SOCIAL_LINKS.facebook" target="_blank"
          class="w-10 h-10 flex items-center justify-center border rounded-full hover:shadow-md transition duration-300">
          <img src="../assets/imgs/face.png" alt="Facebook" class="w-8 h-8" />
        </a>
      </div>
      <!-- روابط التنقل -->
      <nav class="hidden md:flex space-x-4 text-white mt-2.5" id="mainNav">
        <router-link to="/Support"
          class="nav-link flex items-center text-cyan-400 -mt-[10px] font-bold gap-2 cursor-pointer hover:text-cyan-300 transition-colors">
          <!-- أيقونة دعم -->
          <img src="../assets/imgs/favourite.png" alt="Support Icon" class="w-8 h-8" />
          <span class="leading-none">ادعمنا</span>
        </router-link>
        <router-link to="/categories"
          class="nav-link cursor-pointer hover:text-cyan-400 transition-colors">التصنيفات</router-link>
        <router-link to="/about" class="nav-link cursor-pointer hover:text-cyan-400 transition-colors">من
          نحن</router-link>
        <router-link to="/contact" class="nav-link cursor-pointer hover:text-cyan-400 transition-colors">تواصل
          معنا</router-link>
        <router-link to="/"
          class="nav-link cursor-pointer hover:text-cyan-400 active transition-colors">الرئيسية</router-link>
      </nav>
      <!-- الشعار -->
      <router-link to="/"
        class="text-xl font-bold text-white border-l-[2px] border-gray-700 pl-4 flex items-center gap-2">
        ألعاب زمان
        <img src="../assets/imgs/Logo.png" alt="Logo" class="h-8">
      </router-link>
      <!-- موبايل -->
      <div class="md:hidden relative">
        <button @click="toggleMobileMenu" class="text-white p-2">
          <span class="text-2xl">☰</span>
        </button>
        <div v-if="mobileMenuOpen"
          class="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl py-2 z-50 overflow-hidden">
          <router-link to="/"
            class="block px-6 py-3 text-gray-300 hover:bg-cyan-400 hover:text-black font-medium transition-colors"
            @click="closeMobileMenu">الرئيسية</router-link>
          <router-link to="/categories"
            class="block px-6 py-3 text-gray-300 hover:bg-cyan-400 hover:text-black font-medium transition-colors"
            @click="closeMobileMenu">التصنيفات</router-link>
          <router-link to="/about"
            class="block px-6 py-3 text-gray-300 hover:bg-cyan-400 hover:text-black font-medium transition-colors"
            @click="closeMobileMenu">من نحن</router-link>
          <router-link to="/contact"
            class="block px-6 py-3 text-gray-300 hover:bg-cyan-400 hover:text-black font-medium transition-colors"
            @click="closeMobileMenu">اتصل بنا</router-link>
          <router-link to="/Support"
            class="block px-6 py-3 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold transition-colors"
            @click="closeMobileMenu">ادعمنا</router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import { SOCIAL_LINKS } from '../constants/socialLinks';
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
.active {
  color: #15ded4;
  /* لون مخصص للروابط النشطة */
  font-weight: bold;
  /* جعل النص عريض */
  border-bottom: 2px solid #15ded4;
  /* إضافة خط سفلي */
  padding: 0 2px 10px;
}
</style>
