<template>
    <div class="font-sans bg-gray-900 text-gray-100 py-10" dir="rtl">
        <div class="max-w-7xl mx-auto px-6">
         <main class="flex flex-col md:flex-row items-stretch gap-10">
                <!-- الصورة -->
         <aside class="w-full md:w-1/2 flex">
<div class="w-full h-full min-h-full flex flex-col items-center text-start rounded-[12px] overflow-hidden shadow-lg mx-auto pb-[30px] bg-[#0F0F0F] space-y-4">
                        <!-- صورة -->
                        <img src="../assets/imgs/person.jpg" alt="مبرمج ألعاب"
                            class="w-full h-[300px] object-cover object-top transition-transform duration-500 shadow-md" />
                        <!-- الاسم والمهنة -->
                        <h1 class="text-white text-xl  font-bold">إسمي أحمد عويس</h1>
                        <h2 class="text-gray-300 text-sm">مصمم ومطور واجهات مواقع من مصر</h2>
                        <!-- أيقونات -->
                        <div class="flex items-center gap-4">
                            <!-- أيقونة 1 -->
                            <div
                                class="p-3 bg-[#080808] cursor-pointer rounded-full flex items-center justify-center hover:scale-110 transition">
                                <img src="../assets/imgs/xbg.png" class="invert w-7 " alt="X Icon">
                            </div>
                            <!-- خط فاصل -->
                            <div class="h-6 w-[2px] bg-white "></div>
                            <!-- أيقونة 2 -->
                            <div
                                class="p-3 bg-[#080808] cursor-pointer rounded-full flex items-center justify-center hover:scale-110 transition">
                                <img src="../assets/imgs/ins.png" class="invert w-5 " alt="Instagram">
                            </div>
                            <!-- خط فاصل -->
                            <div class="h-6 w-[2px] bg-white"></div>
                            <!-- أيقونة 3 -->
                            <div
                                class="p-3 bg-[#080808] cursor-pointer rounded-full flex items-center justify-center hover:scale-110 transition">
                                <img src="../assets/imgs/facebooko.png" class="invert w-5 " alt="Facebook">
                            </div>
                        </div>
                        <!-- زر التواصل -->
                        <button class="mt-2 px-6 py-2 bg-[#009089] text-white rounded-md cursor-pointer transition">
                            تواصل معي
                        </button>
                    </div>
                </aside>
                <!-- النص -->
                <section class="w-full md:w-1/2 flex flex-col gap-6 text-right">
                    <div
                        class="w-full flex flex-col items-center text-start rounded-[12px] overflow-hidden p-6 shadow-lg mx-auto pb-[30px] bg-[#0F0F0F] space-y-4">
                        <h1
                            class="text-4xl font-bold pb-6 bg-gradient-to-l from-orange-400 to-pink-500 bg-clip-text text-transparent">
                            مطوّر واجهات ومُحب للألعاب
                        </h1>
                        <p class="text-base text-[#B7B7B7] leading-relaxed">
                            عندي شغف كبير بالألعاب وبناء واجهات جذابة وسريعة. من خلال خبرتي اللي بقالها سنتين في مجال
                            تطوير الويب، قررت أعمل موقع ألعاب بسيط وسلس يساعد الناس تكتشف وتجرّب ألعاب ممتعة مجانًا.
                            الموقع معمول بالكامل باستخدام Vue.js
                        </p>
                        <div class="bg-white h-[1px] w-full"></div>
                        <div class="flex flex-wrap gap-3">
                            <span class="px-[10px] py-[8px] rounded-[6px] bg-[#080808] text-white">HTML5</span>
                            <span class="px-[10px] py-[8px] rounded-[6px] bg-[#080808] text-white">CSS3</span>
                            <span class="px-[10px] py-[8px] rounded-[6px] bg-[#080808] text-white">Frontend
                                Designer</span>
                            <span class="px-[10px] py-[8px] rounded-[6px] bg-[#080808] text-white">Tailwind CSS</span>
                            <span class="px-[10px] py-[8px] rounded-[6px] bg-[#080808] text-white">Vue 3</span>
                            <span class="px-[10px] py-[8px] rounded-[6px] bg-[#080808] text-white">JavaScript
                                (ES6)</span>
                            <span class="px-[10px] py-[8px] rounded-[6px] bg-[#080808] text-white">Responsive
                                Design</span>
                            <span class="px-[10px] py-[8px] rounded-[6px] bg-[#080808] text-white">Figma to Code</span>
                            <span class="px-[10px] py-[8px] rounded-[6px] bg-[#080808] text-white">Clean Code</span>
                        </div>
                        <div class="bg-white h-[1px] w-full"></div>
<div class="w-full space-y-4 ">
   <!-- تجربة 1 -->
  <div class="grid grid-cols-3 items-center text-sm md:text-base">
    <span class="text-gray-400">2025</span>
<span class="text-white font-medium text-start md:text-end">Freelancer</span>
    <span class="text-gray-300 text-left">Upwork / Mostaql</span>
  </div>
  <!-- تجربة 2 -->
  <div class="grid grid-cols-3 items-center text-sm md:text-base">
    <span class="text-gray-400">2024</span>
    <span class="text-white font-medium text-start md:text-end">Frontend Developer</span>
    <span class="text-gray-300 text-left">Dream Design Egypt</span>
  </div>
    <!-- تجربة 4 -->
  <div class="grid grid-cols-3 items-center text-sm md:text-base">
    <span class="text-gray-400">2023</span>
    <span class="text-white font-medium text-start md:text-end">Frontend Designer</span>
    <span class="text-gray-300 text-left">Private Clients</span>
  </div>
  <!-- تجربة 3 -->
  <div class="grid grid-cols-3 items-center text-sm md:text-base">
    <span class="text-gray-400">2022</span>
    <span class="text-white font-medium text-start md:text-end">UI/UX Designer</span>
    <span class="text-gray-300 text-left">StatsBomb</span>
  </div>
</div>
                    </div>
                </section>
            </main>
            <p class="text-center mt-10 text-white text-sm">
                هل عندك فكرة مشروع أو لعبة؟ تواصل معايا وخلينا نبدأ مع بعض!
            </p>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>