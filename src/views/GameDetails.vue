<template>
  <div v-if="game" class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center py-3">
    <div class="w-full flex justify-between items-center flex-wrap gap-2 my-4">
<div class="flex flex-wrap gap-2">
  <span
    class="px-3 py-1 text-sm font-semibold rounded-full"
    :style="{ backgroundColor: getColorById(game.genre_id), color: '#fff' }"
  >
    {{ game.genre_name_ar }}
  </span>
</div>
<h1 class="text-3xl font-bold text-white">
  {{ translatedTitle || game?.title_en }}
</h1>
    </div>
  </div>
  <div class="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center ">
    <div class="flex justify-between items-stert w-full max-w-7xl mx-auto  rounded-lg  gap-6 ">
      <div
        class="w-1/4 bg-[#F8F8F4] h-full max-w-md p-6 rounded-lg shadow-lg flex flex-col justify-between text-right gap-6">
        <div class="flex flex-col items-end gap-4">
          <h2 class="text-3xl text-center self-center font-bold  text-gray-400">
            <span class="text-emerald-400 text-3xl ">$ مجانية </span>
          </h2>
          <div class="flex justify-end items-center">
            <h2 class="text-neutral-600 mr-2 font-bold text-l">جميع الألعاب مجانية بالكامل</h2>
            <img src="../assets/imgs/delete.png" class="w-5 ">
          </div>
          <p class="text-sm text-neutral-600 font-medium">يمكنك رؤية المزيد من الألعاب المجانية من خلال هذا
            الرابط الأمن <router-link to="/categories" class="text-emerald-400 hover:underline">معرفة
              المزيد</router-link></p>
          <div>
            <h3 class="text-neutral-600  mb-2 font-bold text-l">هل اللعبة أمنة؟</h3>
            <p class="text-sm text-neutral-600 font-medium"> نعم كل الألعاب والروابط أمنة تمام يمكنك الاطلاع علي تفاصيل
              الامان من هذا الرابط <router-link to="/categories" class="text-emerald-400 hover:underline">معرفة
                المزيد</router-link></p>
          </div>
        </div>
        <div class="flex flex-col space-y-4">
          <a v-if="game?.telegram_link" :href="game.telegram_link" target="_blank"
            class="bg-[#3E3E5E] text-white px-4 py-2 rounded-lg hover:bg-indigo-950 transition duration-300 inline-flex items-center justify-center gap-2 h-[50px]">
            <span class="order-1">تحميل اللعبة من تليجرام</span>
            <svg class="w-6 h-6 order-2" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#37AEE2" cx="120" cy="120" r="120" />
                <path fill="#C8DAEA"
                  d="M100.632 161.98l-3.958 45.09c5.65 0 8.12-2.44 11.21-5.36l26.86-25.58 55.78 40.67c10.23 5.63 17.63 2.67 20.26-9.49l36.69-172.55.002-.002c2.25-10.61-3.86-14.63-13.18-11.64l-210.12 81.03c-14.33 5.7-14.26 13.81-2.61 17.49l53.83 16.81 124.73-78.42c5.87-3.74 11.23-1.75 6.82 2.4L100.63 161.98z" />
                <path fill="#A9C9DD"
                  d="M100.632 161.98l-3.958 45.09c5.65 0 8.12-2.44 11.21-5.36l26.86-25.58 55.78 40.67c10.23 5.63 17.63 2.67 20.26-9.49l36.69-172.55c2.25-10.61-3.86-14.63-13.18-11.64l-210.12 81.03c-14.33 5.7-14.26 13.81-2.61 17.49l53.83 16.81 124.73-78.42c5.87-3.74 11.23-1.75 6.82 2.4L100.63 161.98z" />
              </g>
            </svg>
          </a>
          <a v-if="game?.drive_link" :href="game.drive_link" target="_blank"
            class="bg-[#2BCFAD] text-white px-4 py-2 rounded-lg hover:bg-emerald-500 transition duration-300 inline-flex items-center justify-center gap-2">
            <img src="../assets/imgs/drive.png" class="w-5 h-5 order-2" alt="Google Drive Icon">
            <span class="order-1">تحميل اللعبة من درايف</span>
          </a>
          <a v-if="game?.mega_link" :href="game.mega_link" target="_blank"
            class="bg-[#F83356] text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition duration-300 inline-flex items-center justify-center gap-2 h-[50px]">
            <span class="order-1">تحميل اللعبة من ميجا</span>
            <svg class="w-6 h-6 order-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 24C5.376 24 0 18.624 0 12C0 5.376 5.376 0 12 0C18.624 0 24 5.376 24 12C24 18.624 18.624 24 12 24Z"
                fill="#DD1405" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18 15.653C18 15.848 17.8425 15.9997 17.6475 15.9997H16.1325C15.9375 15.9997 15.78 15.848 15.78 15.653V11.1247C15.78 11.0813 15.7275 11.0669 15.705 11.0886L12.5025 14.2086C12.225 14.483 11.775 14.483 11.4975 14.2086L8.295 11.0886C8.2725 11.0669 8.22 11.0813 8.22 11.1247V15.653C8.22 15.848 8.0625 15.9997 7.8675 15.9997H6.3525C6.1575 15.9997 6 15.848 6 15.653V7.67967C6 7.48467 6.1575 7.33301 6.3525 7.33301H7.395C7.5825 7.33301 7.7625 7.40523 7.8975 7.53523L11.8725 11.4136C11.94 11.4786 12.06 11.4786 12.1275 11.4136L16.1025 7.53523C16.2375 7.40523 16.4175 7.33301 16.605 7.33301H17.6475C17.8425 7.33301 18 7.48467 18 7.67967V15.653Z"
                fill="white" />
            </svg>
          </a>
        </div>
        <div class="mt-6">
          <div class="flex items-center justify-between text-gray-500">
            <div class="text-end">
            <h2 class="text-2xl font-bold">{{ game?.rating ?? 0 }}/5</h2>
              <div class="flex mt-1 justify-end">
                <img src="../assets/imgs/star.png" class="w-4 inline-block mr-0.5">
                <img src="../assets/imgs/star.png" class="w-4 inline-block mr-0.5">
                <img src="../assets/imgs/star.png" class="w-4 inline-block mr-0.5">
                <img src="../assets/imgs/star.png" class="w-4 inline-block mr-0.5">
              </div>
            </div>
<div>
  <h2 class="text-2xl font-bold">{{ game?.downloads ?? 0 }}</h2>
  <div class="flex items-center mt-1">
    <span class="text-s">تحميلات</span>
  </div>
</div>
          </div>
          <div class="flex items-center justify-between text-neutral-600 mt-2">
            <h2 class="text-neutral-600">1,360</h2>
            <div class="flex items-center">
              <span class="text-neutral-600">رؤية</span>
              <img src="../assets/imgs/web.png" class="w-3 inline-block ml-1">
            </div>
          </div>
        </div>
      </div>
      <div class="w-3/4">
        <div class="w-full flex flex-col items-end bg-[#F8F8F4] rounded-lg shadow-lg">
          <GlareHover glareColor="#ffffff" glareOpacity="0.25" glareAngle="-30" glareSize="300" transitionDuration="800"
            class="mb-6 rounded-lg shadow-lg overflow-hidden">
<img v-if="game?.cover_image"
     :src="game.cover_image"
     alt="Game Image"
     class="w-full h-auto rounded-lg"
     style="max-width: 100%; max-height: 400px; object-fit: cover;"
     @error="e => e.target.src = '/games/default.jpg'" />
          </GlareHover>
          <div class="flex  justify-end gap-9 items-center w-full flex-row px-6 pb-6">
            <div class="flex justify-between items-center space-x-9">
              <img :src="game?.cover_image" alt="Game Image" class=" rounded-lg shadow-lg w-[50px] h-[50px]"
                style="object-fit: cover;" @error="e => e.target.src = '/games/default.jpg'">
              <img :src="game?.cover_image" alt="Game Image" class=" rounded-lg shadow-lg w-[50px] h-[50px]"
                style="object-fit: cover;" @error="e => e.target.src = '/games/default.jpg'">
              <img :src="game?.cover_image" alt="Game Image" class="rounded-lg shadow-lg w-[50px] h-[50px]"
                style="object-fit: cover;" @error="e => e.target.src = '/games/default.jpg'">
              <img :src="game?.cover_image" alt="Game Image" class=" rounded-lg shadow-lg w-[50px] h-[50px]"
                style="object-fit: cover;" @error="e => e.target.src = '/games/default.jpg'">
              <img :src="game?.cover_image" alt="Game Image" class="rounded-lg shadow-lg w-[50px] h-[50px]"
                style="object-fit: cover;" @error="e => e.target.src = '/games/default.jpg'">
            </div>
            <button class="bg-[#009089] text-white px-4 py-2 rounded-lg  transition duration-300">مزيد عن العبة</button>
          </div>
        </div>
        <div class="bg-[#F8F8F4] rounded-lg shadow-lg p-6 mt-6 w-full text-right">
          <div class="info-header flex justify-around items-center flex-row-reverse  mb-6">
            <h2 class=" font-bold text-center text-gray-800 cursor-pointer ">تفاصيل اللعبة</h2>
            <h2 class=" text-center text-gray-600 cursor-pointer " >أجزاء اللعبة</h2>
            <h2 class="  text-center text-gray-600 cursor-pointer ">المزيد عن اللعبة</h2>
          </div>
          <!-- القسم 1 -->
          <div class="info-content bg-white p-6 rounded-lg shadow-md mb-6">
<h2 class="text-xl font-semibold text-blue-700 mb-2">وصف اللعبة</h2>
<p class="text-gray-700">
{{ game?.description }}
</p>
          </div>
          <!-- القسم 2 -->
          <div class="info-content bg-white p-6 rounded-lg shadow-md mb-6">
<h2 class="text-xl font-semibold text-blue-700 mb-2">أسلوب اللعب</h2>
<p class="text-gray-700">
لا يتوفر أسلوب لعب
</p>
          </div>
          <!-- القسم 3 -->
          <div class="info-content bg-white p-6 rounded-lg shadow-md mb-6  flex flex-col items-end">
            <h2 class="text-xl font-semibold  text-right text-blue-700 mb-4">معلومات إضافية</h2>
            <ul class="space-y-4 flex flex-col items-end">
              <li class="flex items-center space-x-4">
            <p class="text-gray-700">
  متوفرة على : {{ game?.platform_name_ar || 'لا توجد بيانات' }}
</p>
                <img v-if="game?.cover_image"
     :src="game.cover_image"
     alt="Game Image"
     class="w-20 h-28 object-cover rounded shadow"
     style="max-width: 100%; max-height: 400px; object-fit: cover;"
     @error="e => e.target.src = '/games/default.jpg'" />
              </li>
              <li class="flex items-center space-x-0">
<p
  v-if="game && game.genre_id && game.genre_name_ar"
  class="mr-5 px-3 py-1 text-sm font-semibold rounded-full"
  :style="{ backgroundColor: getColorById(game.genre_id), color: '#fff' }"
>
  النوع: {{ game.genre_name_ar }}
</p>
                   <img src="https://cdn-icons-png.flaticon.com/512/841/841364.png" alt="نوع اللعبة" class="w-8 h-8" />
              </li>
              <li class="flex items-center space-x-4">
                <p class="text-gray-700">التقييم العمري: لا يوجد</p>
                           <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="تقييم الأعمار" class="w-8 h-8" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="pt-0 px-8 pb-8 w-full  text-white">
    <h1 class="text-3xl font-bold mb-4">{{ game.title }}</h1>
    <img :src="game.image" alt="Game Image" class="w-full max-w-md mb-6" />
    <p class="mb-2">النوع: {{ game.type }}</p>
    <p class="mb-2">سنة الإصدار: {{ game.time }}</p>
    <p class="mb-2">عدد التحميلات: {{ game.downloads }}</p>
    <p class="mb-4">{{ game.description }}</p>
    <div v-if="game.links">
      <h2 class="text-xl font-semibold mb-2">روابط التحميل:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li v-for="(link, index) in game.links" :key="index">
          <a :href="link.url" target="_blank" class="text-blue-400 hover:underline">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </div> -->
</template>
<script setup>
import GlareHover from '../components/GlareHover.vue'
import { useRoute } from 'vue-router'
import { getColorById } from '../utils/gameTypeColors'
// import { ref, , watch } from 'vue'
// import { getColor } from '../utils/gameTypeColors'
// const getColor = () => '#333'
// import rawGames from '../services/rawGames'
const route = useRoute()
const gameId = parseInt(route.params.id)
const categories = computed(() => [game.value?.type] || [])
// import GlareHover from '../components/GlareHover.vue'
import { ref, watch, onMounted,computed } from 'vue'
// import { useRoute } from 'vue-router'
import { getGameById } from '../services/gameService'
const game = ref(null)
const loading = ref(true)
const error = ref(null)
const translatedTitle = ref('')
async function translateToArabic(text) {
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ar`)
    const data = await res.json()
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
