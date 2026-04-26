<template>
  <div class="bg-[]">
    <div class="relative py-8 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#101828]" dir="rtl">
      <!-- Changed bg-white/80 to match dark theme bg-[#1E1E1E] -->
      <div
        class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-[#CFD1D4] border border-gray-700/50 rounded-xl shadow-xl p-4 sm:p-6 md:p-10">
        <!-- القسم الأيمن -->
        <div class="flex-1 text-start flex flex-col items-start gap-5 sm:gap-6">
          <!-- العنوان -->
          <div class="py-1 rounded-md text-[#009089] font-bold text-2xl sm:text-3xl">
            تواصل معنا
          </div>
          <!-- عنوان رئيسي -->
          <h1 class="text-3xl sm:text-4xl font-bold text-[#1E2939]">
            ممكن نساعدك توفر وقت<br> ومجهود البحث
          </h1>
          <!-- الوصف -->
          <p class="text-[#4A5565] text-base sm:text-lg">
            نقدم لك تجربة متميزة مع موقع مصمم بعناية لتوفير البحث عن اللألعاب والتحميل من مصادر أمنة ومجانية.
          </p>
          <!-- بوكس التواصل -->
          <div class="rounded-lg bg-[#F8F8F4] border border-gray-700/50 shadow-md p-5 w-full text-white">
            <h2 class="pb-2 text-2xl sm:text-3xl font-semibold text-[#101828]">معلومات التواصل</h2>
            <ul class="flex flex-col gap-3 text-base sm:text-lg text-gray-300">
              <li class="flex items-center text-[#101828]">
                <img src="../assets/imgs/google.png" class="ml-3 w-10 sm:w-12 opacity-80" alt="Email Icon" />
                <a :href="`mailto:${CONTACT_INFO.email}`" class="text-[#101828] hover:underline">{{ CONTACT_INFO.email }}</a>
              </li>
              <li class="flex items-center text-[#101828]">
                <img src="../assets/imgs/instagram.png" class="ml-3 w-8 sm:w-10 opacity-80" alt="Instagram Icon" />
                <a :href="SOCIAL_LINKS.instagram" target="_blank" class="text-[#101828] hover:underline">bar0dy</a>
              </li>
              <li class="flex items-center">
                <button
                  class="mt-2 px-4 py-2 w-full bg-[#009089] text-white font-semibold rounded-lg transition-all duration-300">
                  <a href="Error.html" class="flex justify-center" target="_blank">المزيد من لينكات التواصل</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <!-- القسم الأيسر (الصور) -->
        <div class="flex-1 w-full flex flex-col gap-4">
          <!-- صف الصور الأول -->
          <div class="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4">
            <img src="../assets/imgs/conv.jpg" alt="صورة 1"
              class="w-full h-[140px] sm:w-[400px] sm:h-[180px] object-cover rounded-lg transition-transform duration-300 hover:scale-105 border border-gray-700/50" />
            <img src="../assets/imgs/conh.jpg" alt="صورة 2"
              class="w-full h-[140px] sm:w-[180px] sm:h-[180px] object-cover rounded-lg transition-transform duration-300 hover:scale-105 border border-gray-700/50" />
          </div>
          <!-- صف الصور الثاني -->
          <div class="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4">
            <img src="../assets/imgs/conhI.jpg" alt="صورة 3"
              class="w-full h-[140px] sm:w-[180px] sm:h-[180px] object-cover rounded-lg transition-transform duration-300 hover:scale-105 border border-gray-700/50" />
            <img src="../assets/imgs/convI.jpg" alt="صورة 4"
              class="w-full h-[140px] sm:w-[400px] sm:h-[180px] object-cover rounded-lg transition-transform duration-300 hover:scale-105 border border-gray-700/50" />
          </div>
        </div>
      </div>
    </div>

    <!-- Subscription Section -->
    <section class=" w-[90%] mx-auto py-0 md:py-10">
      <div
        class="flex flex-col-reverse md:flex-row justify-between items-center gap-6 bg-[#1F2A44] border border-gray-700/50 rounded-lg p-6">
        <div class="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4 md:mt-0 pl-[30px]">
          <button
            class="bg-[#009089] text-white px-5 py-2 rounded-lg hover:bg-[#009089]/80 active:scale-95  transition cursor-pointer">
            إشترك
          </button>
          <input type="text" placeholder="ادخل ايميلك الآن"
            class="px-4 py-2 border border-gray-700/50 rounded-lg focus:outline-none   w-full  text-white text-end  transition" />
        </div>
        <div class="flex items-center flex-row-reverse gap-4 ">
          <img src="../assets/imgs/comment.png" alt="Comment icon" class="w-12 h-12 object-cover opacity-80" />
          <div class="text-end">
            <p class="text-white font-semibold text-base">كن على تواصل دائم معنا</p>
            <p class="text-gray-400 text-sm">أشترك مجانا لمعرفة الألعاب الجديدة</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <div
      class="containerL flex flex-col md:flex-row justify-around items-center w-full bg-[#101828] text-white overflow-hidden">
      <!-- ✅ Left Visual Section -->
      <div class="hidden md:flex w-full md:w-1/2 justify-center items-center p-10">
        <div class="max-w-md text-center space-y-6 animate-fade-in">
          <!-- ✅ صورة داخل إطار -->
          <div class="flex justify-center">
            <div
              class="inline-block p-2 sm:p-3 border-4 border-white rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-md shadow-lg">
              <img src="../assets/imgs/panners/2p.png" alt="صورة تواصل" class="w-full max-w-[320px] rounded-xl" />
            </div>
          </div>
          <!-- ✅ عنوان مع أيقونة -->
          <h2 class="text-3xl font-bold text-white flex items-center justify-center gap-2">
            <img src="../assets/imgs/customer-service.png" class="w-8 h-8 opacity-80" />
            نحب نسمع منك!
          </h2>
          <!-- ✅ خط ديكوري تحت العنوان -->
          <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-2"></div>
          <!-- ✅ وصف -->
          <p class="text-lg text-gray-400 leading-relaxed">
            فريقنا موجود دائمًا عشان يساعدك. ابعتلنا سؤالك أو استفسارك، وهنتواصل معاك في أقرب وقت ممكن.
          </p>
        </div>
      </div>

      <!-- ✅ Right Panel (Form Section) -->
      <div class="w-full md:w-1/2 flex justify-center items-center p-5 md:p-10">
        <div class="w-full max-w-[400px] p-6 rounded-xl ">
          <form @submit.prevent="handleLogin" class="w-full">
            <div class="flex flex-col md:flex-row gap-6 mb-6">
              <div class="w-full md:w-1/2">
                <label for="username" class="block text-sm font-semibold mb-2 text-end text-gray-300">الأسم</label>
                <input id="username" type="text" v-model="username" placeholder="أكتب إسمك" required
                  class="w-full px-4 py-3 rounded-lg bg-[#1F2A44] text-white placeholder-gray-500 text-end focus:ring-2 focus:ring-purple-500 border border-gray-700/50 transition" />
              </div>
              <div class="w-full md:w-1/2">
                <label for="email" class="block text-sm font-semibold mb-2 text-end text-gray-300">البريد
                  الإلكتروني</label>
                <input id="email" type="email" v-model="email" placeholder="Example@gmail.com " required
                  class="w-full px-4 py-3 rounded-lg bg-[#1F2A44] text-white placeholder-gray-500 text-end focus:ring-2 focus:ring-purple-500 border border-gray-700/50 transition" />
              </div>
            </div>
            <div>
              <label for="message" class="block text-sm font-semibold mb-2 text-end text-gray-300">رسالتك</label>
              <textarea id="message" placeholder="اكتب رسالتك هنا"
                class="w-full h-[160px] px-4 py-3 rounded-lg bg-[#1F2A44] text-white placeholder-gray-500 text-end focus:ring-2 focus:ring-purple-500 border border-gray-700/50 resize-none mb-6 transition"></textarea>
            </div>
            <button type="submit"
              class="w-full py-3 rounded-lg bg-[#009089] active:scale-95 focus:ring-2 focus:ring-purple-500 font-bold text-white transition shadow-md">
              {{ isLoading ? 'جاري الإرسال...' : 'إرسال' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants/socialLinks';
const username = ref('');
const email = ref('');
const isLoading = ref(false);
const handleLogin = () => {
  isLoading.value = true;
  // Simulate form submission
  setTimeout(() => {
    isLoading.value = false;
    console.log('Form submitted:', { username: username.value, email: email.value });
  }, 1000);
};
</script>

<style scoped>
.containerL {
  font-family: 'Segoe UI', sans-serif;
}

/* Smooth transitions for interactive elements */
input,
textarea,
button {
  transition: all 0.2s ease-in-out;
}

/* Focus and hover states for accessibility */
input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(107, 33, 168, 0.3);
  /* Purple focus ring */
}

/* Ensure buttons have a pointer cursor */
button {
  cursor: pointer;
}

/* Improve readability for placeholders */
::placeholder {
  color: #6B7280;
  opacity: 1;
}
</style>