<template>
  <div v-if="game"
    class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center py-3">
    <div class="w-full flex justify-between items-center flex-wrap gap-2 my-4">
      <div class="flex flex-wrap gap-2 order-2 md:order-1">
        <span class="px-3 py-1 text-sm font-semibold rounded-full"
          :style="{ backgroundColor: getColorById(game.genre_id), color: '#fff' }">
          {{ game.genre_name_ar }}
        </span>
      </div>
      <h1 class="text-2xl md:text-3xl font-bold text-white text-right w-full md:w-auto order-1 md:order-2">
        {{ translatedTitle || game?.title_en }}
      </h1>
    </div>
  </div>

  <div class="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
    <div class="grid grid-cols-1 md:grid-cols-4 items-start w-full gap-6">
      <div
        class="w-full md:col-span-1 md:row-span-2 bg-[#F8F8F4] p-6 rounded-xl shadow-lg flex flex-col justify-between text-right gap-6 order-2 md:order-1">
        <div class="flex flex-col items-end gap-4">
          <h2 class="text-3xl text-center self-center font-bold text-gray-400">
            <span class="text-emerald-400 text-3xl">$ مجانية </span>
          </h2>
          <div class="flex justify-end items-center">
            <h2 class="text-neutral-600 mr-2 font-bold text-lg">جميع الألعاب مجانية بالكامل</h2>
            <img src="../assets/imgs/delete.png" class="w-5" alt="Free icon">
          </div>
          <p class="text-sm text-neutral-600 font-medium leading-relaxed">
            يمكنك رؤية المزيد من الألعاب المجانية من خلال هذا الرابط الآمن
            <router-link to="/categories" class="text-emerald-400 hover:underline">معرفة المزيد</router-link>
          </p>
          <div>
            <h3 class="text-neutral-600 mb-2 font-bold text-lg">هل اللعبة آمنة؟</h3>
            <p class="text-sm text-neutral-600 font-medium leading-relaxed">
              نعم كل الألعاب والروابط آمنة تماماً يمكنك الاطلاع على تفاصيل الأمان من هذا الرابط
              <router-link to="/categories" class="text-emerald-400 hover:underline">معرفة المزيد</router-link>
            </p>
          </div>
        </div>

        <div class="flex flex-col space-y-4">
          <a v-if="game?.telegram_link" :href="game.telegram_link" target="_blank"
            class="bg-[#3E3E5E] text-white px-4 py-3 rounded-lg hover:bg-indigo-950 transition duration-300 flex items-center justify-center gap-2">
            <span class="font-bold">تحميل من تليجرام</span>
            <svg class="w-6 h-6" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#37AEE2" cx="120" cy="120" r="120" />
                <path fill="#C8DAEA"
                  d="M100.632 161.98l-3.958 45.09c5.65 0 8.12-2.44 11.21-5.36l26.86-25.58 55.78 40.67c10.23 5.63 17.63 2.67 20.26-9.49l36.69-172.55.002-.002c2.25-10.61-3.86-14.63-13.18-11.64l-210.12 81.03c-14.33 5.7-14.26 13.81-2.61 17.49l53.83 16.81 124.73-78.42c5.87-3.74 11.23-1.75 6.82 2.4L100.63 161.98z" />
              </g>
            </svg>
          </a>
          <a v-if="game?.drive_link" :href="game.drive_link" target="_blank"
            class="bg-[#2BCFAD] text-white px-4 py-3 rounded-lg hover:bg-emerald-500 transition duration-300 flex items-center justify-center gap-2">
            <img src="../assets/imgs/drive.png" class="w-5 h-5" alt="Google Drive Icon">
            <span class="font-bold">تحميل من درايف</span>
          </a>
          <a v-if="game?.mega_link" :href="game.mega_link" target="_blank"
            class="bg-[#F83356] text-white px-4 py-3 rounded-lg hover:bg-rose-600 transition duration-300 flex items-center justify-center gap-2">
            <span class="font-bold">تحميل من ميجا</span>
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 24C5.376 24 0 18.624 0 12C0 5.376 5.376 0 12 0C18.624 0 24 5.376 24 12C24 18.624 18.624 24 12 24Z"
                fill="#DD1405" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18 15.653C18 15.848 17.8425 15.9997 17.6475 15.9997H16.1325C15.9375 15.9997 15.78 15.848 15.78 15.653V11.1247C15.78 11.0813 15.7275 11.0669 15.705 11.0886L12.5025 14.2086C12.225 14.483 11.775 14.483 11.4975 14.2086L8.295 11.0886C8.2725 11.0669 8.22 11.0813 8.22 11.1247V15.653C8.22 15.848 8.0625 15.9997 7.8675 15.9997H6.3525C6.1575 15.9997 6 15.848 6 15.653V7.67967C6 7.48467 6.1575 7.33301 6.3525 7.33301H7.395C7.5825 7.33301 7.7625 7.40523 7.8975 7.53523L11.8725 11.4136C11.94 11.4786 12.06 11.4786 12.1275 11.4136L16.1025 7.53523C16.2375 7.40523 16.4175 7.33301 16.605 7.33301H17.6475C17.8425 7.33301 18 7.48467 18 7.67967V15.653Z"
                fill="white" />
            </svg>
          </a>
        </div>

        <div class="mt-4 border-t border-gray-200 pt-4">
          <div class="flex items-center justify-between text-gray-500">
            <div class="text-right">
              <h2 class="text-2xl font-bold">{{ game?.rating ?? 0 }}/5</h2>
              <div class="flex mt-1 justify-end gap-0.5">
                <img v-for="i in 5" :key="i" src="../assets/imgs/star.png" class="w-4"
                  :class="{ 'opacity-30': i > Math.round(game?.rating || 0) }" alt="star">
              </div>
            </div>
            <div class="text-right">
              <h2 class="text-2xl font-bold">{{ game?.downloads ?? 0 }}</h2>
              <span class="text-sm">تحميلات</span>
            </div>
          </div>
          <div class="flex items-center justify-between text-neutral-600 mt-3">
            <h2 class="font-bold">1,360</h2>
            <div class="flex items-center gap-1">
              <span class="text-sm">رؤية</span>
              <img src="../assets/imgs/web.png" class="w-4" alt="views">
            </div>
          </div>
        </div>
      </div>
        <!-- 1. Cover Image (Mobile Order 1, Desktop Right) -->
      <div class="w-full md:col-span-3 order-1 md:order-2">
          <div class="w-full flex flex-col items-end bg-[#F8F8F4] rounded-xl shadow-lg overflow-hidden">
            <GlareHover glareColor="#ffffff" glareOpacity="0.25" glareAngle="-30" glareSize="300"
              transitionDuration="800" class="w-full h-auto">
              <img v-if="game?.cover_image" :src="game.cover_image" alt="Game Image"
                class="w-full h-auto object-cover max-h-[500px]" @error="e => e.target.src = '/games/default.jpg'" />
            </GlareHover>

            <div class="flex flex-col sm:flex-row justify-between items-center w-full p-4 md:p-6 gap-4">
              <button
                class="bg-[#009089] text-white px-6 py-2 rounded-lg hover:bg-[#007a74] transition duration-300 w-full sm:w-auto order-2 sm:order-1">
                مزيد عن اللعبة
              </button>
              <div
                class="flex justify-end items-center gap-3 overflow-x-auto w-full sm:w-auto order-1 sm:order-2 pb-2 sm:pb-0">
                <img v-for="i in 4" :key="i" :src="game?.cover_image" alt="Thumbnail"
                  class="rounded-lg shadow-md w-12 h-12 object-cover flex-shrink-0"
                  @error="e => e.target.src = '/games/default.jpg'">
              </div>
            </div>
          </div>
        </div>
        <!-- 3. Details (Mobile Order 3, Desktop Right Bottom) -->
      <div class="w-full md:col-span-3 order-3 md:order-3">
          <div class="bg-[#F8F8F4] rounded-xl shadow-lg p-4 md:p-6 w-full text-right">
            <div class="flex justify-around items-center border-b border-gray-200 pb-4 mb-6 text-sm md:text-base">
              <h2 class="font-bold text-gray-800 cursor-pointer border-b-2 border-emerald-400 pb-2">تفاصيل اللعبة</h2>
              <h2 class="text-gray-600 cursor-not-allowed">أجزاء اللعبة</h2>
              <h2 class="text-gray-600 cursor-not-allowed">المزيد</h2>
            </div>

            <div class="space-y-6">
              <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h2 class="text-xl font-bold text-blue-700 mb-3">وصف اللعبة</h2>
                <p class="text-gray-700 leading-loose">{{ game?.description }}</p>
              </div>

              <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h2 class="text-xl font-bold text-blue-700 mb-3">أسلوب اللعب</h2>
                <p class="text-gray-700 leading-loose">لا يتوفر أسلوب لعب مفصل حالياً، اللعبة تعتمد على أسلوب {{
                  game?.genre_name_ar }} التقليدي.</p>
              </div>
            </div>
          </div>
        </div>
      <!-- 2. Side Bar (Mobile Order 2, Desktop Left) -->




    </div>
  </div>

</template>

<script setup>
import GlareHover from '../components/GlareHover.vue'
import { useRoute } from 'vue-router'
import { getColorById } from '../utils/gameTypeColors'
import { ref, watch, onMounted, computed } from 'vue'
import { getGameById } from '../services/gameService'

const route = useRoute()
const game = ref(null)
const loading = ref(true)
const error = ref(null)
const translatedTitle = ref('')

async function translateToArabic(text) {
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ar`)
    const data = await res.json()
    if (data.responseData) {
      translatedTitle.value = data.responseData.translatedText
    }
  } catch (e) {
    console.error('❌ فشل الترجمة:', e)
    translatedTitle.value = text
  }
}

onMounted(async () => {
  try {
    const id = route.params.id
    game.value = await getGameById(id)
    if (game.value?.title) {
      await translateToArabic(game.value.title)
    }
  } catch (err) {
    console.error(err)
    error.value = 'حدث خطأ أثناء تحميل بيانات اللعبة'
  } finally {
    loading.value = false
  }
})

watch(
  () => game.value?.title,
  (newTitle) => {
    if (newTitle) translateToArabic(newTitle)
  },
  { immediate: true }
)
</script>

<style scoped>
.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
