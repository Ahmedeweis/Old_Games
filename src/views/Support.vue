<template>
  <div class="min-h-screen bg-[#f8f9fa] p-6 font-sans text-right overflow-y-auto" dir="rtl">
    <!-- Top Section -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">

      <!-- Left Content (now Right since RTL) -->
      <div class="flex flex-col">
        <h1 class="text-4xl font-bold text-[#1a202c] leading-tight mb-4">
          ساهم في تطوير المنصة اكثر <br /> و تنمية المحتوى العربي
        </h1>
        <p class="text-lg text-gray-600 mb-8 max-w-md">
          ساعدنا نكبر ونوفر العاب اكتر
        </p>

        <!-- Donation Form -->
        <div id="donation-form" class="w-full max-w-md">
          <!-- Tabs -->
          <div class="flex">
            <button @click="activeTab = 'vodafone'"
              :class="['cursor-pointer px-6 py-3 font-semibold rounded-t-xl transition-colors duration-200', activeTab === 'vodafone' ? 'bg-white text-black' : 'text-gray-500 hover:text-black']">
              فودافون كاش
            </button>
            <button @click="activeTab = 'instapay'"
              :class="['cursor-pointer px-6 py-3 font-semibold rounded-t-xl transition-colors duration-200', activeTab === 'instapay' ? 'bg-white text-black' : 'text-gray-500 hover:text-black']">
              انستا باي
            </button>
          </div>

          <!-- Form Body -->
          <div class="bg-white p-8 rounded-b-xl rounded-tl-xl shadow-sm">
            <div v-if="activeTab === 'vodafone'" class="text-center">
              <h3 class="text-xl font-bold mb-4">الدفع عبر فودافون كاش</h3>
              <p class="text-gray-600 mb-6">يسعدنا تلقي دعمك ومساهمتك من خلال الرقم التالي:</p>
              <div
                class="bg-gray-100 p-4 rounded-lg font-bold text-2xl text-center mb-6 tracking-wider flex items-center justify-center gap-3">
                <span class="text-black">{{ payment.vodafone.number }}</span>
                <button @click="copyToClipboard(payment.vodafone.number)"
                  class="text-gray-500 hover:text-black cursor-pointer p-1" title="نسخ">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <div class="flex justify-center">
                <div v-if="payment.vodafone.qrCode" class="w-48 h-48 rounded-lg overflow-hidden">
                  <img :src="payment.vodafone.qrCode" class="w-full h-full object-cover" alt="QR Code" />
                </div>
                <div v-else
                  class="w-48 h-48 bg-gray-200 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400">
                  <span class="text-gray-500 font-semibold">QR Code</span>
                </div>
              </div>
              <div v-if="payment.vodafone.link" class="mt-6">
                <a :href="payment.vodafone.link" target="_blank"
                  class="inline-block bg-[#e60000] text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors shadow-sm">
                  رابط الدفع السريع
                </a>
              </div>
            </div>

            <div v-if="activeTab === 'instapay'" class="text-center">
              <h3 class="text-xl font-bold mb-4">الدفع عبر انستا باي (InstaPay)</h3>
              <p class="text-gray-600 mb-6">يسعدنا تلقي دعمك ومساهمتك من خلال الحساب التالي:</p>
              <div
                class="bg-gray-100 p-4 rounded-lg font-bold text-xl text-center mb-6 flex items-center justify-center gap-3">
                <span class="text-black">{{ payment.instapay.username }}</span>
                <button @click="copyToClipboard(payment.instapay.username)"
                  class="text-gray-500 hover:text-black cursor-pointer p-1" title="نسخ">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <div class="flex justify-center">
                <div v-if="payment.instapay.qrCode" class="w-48 h-48 rounded-lg overflow-hidden">
                  <img :src="payment.instapay.qrCode" class="w-full h-full object-cover" alt="QR Code" />
                </div>
                <div v-else
                  class="w-48 h-48 bg-gray-200 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400">
                  <span class="text-gray-500 font-semibold">QR Code</span>
                </div>
              </div>
              <div v-if="payment.instapay.link" class="mt-6">
                <a :href="payment.instapay.link" target="_blank"
                  class="inline-block bg-[#1a202c] text-white font-bold py-3 px-8 rounded-full hover:bg-black transition-colors shadow-sm">
                  رابط الدفع السريع
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Content (Image) -->
      <div class="flex justify-center items-center">
        <!-- Rounded shape matching the image style -->
        <div class="w-full max-w-md aspect-square bg-gray-300 rounded-lg shadow-lg">
          <img src="../assets/imgs/donate.png" alt="Donate" class="rounded-xl w-full h-full object-cover" />
        </div>
      </div>

    </div>

    <!-- Ongoing Causes Section -->
    <div class="max-w-6xl mx-auto py-16">
      <div class="flex justify-between items-end mb-10">
        <div>
          <h2 class="text-4xl font-bold text-[#1a202c] mb-3">حملاتنا المستمرة</h2>
          <p class="text-gray-500 max-w-md">نستثمر في تطوير المنصة وتوسيع مكتبة الألعاب لتوفير أفضل تجربة لمحبي الألعاب
            الكلاسيكية.</p>
          <!-- <div class="mt-4 flex items-center gap-4">
            <span class="text-sm font-bold text-[#1a202c]">إجمالي التقدم: {{ getPercentage(totalCollected, totalGoal)
              }}%</span>
            <div class="w-48 h-2 bg-gray-200 rounded-full overflow-hidden" dir="ltr">
              <div class="h-full bg-[#3ab599] transition-all duration-1000"
                :style="{ width: getPercentage(totalCollected, totalGoal) + '%' }"></div>
            </div>
            <span class="text-xs text-gray-400">({{ totalCollected.toLocaleString() }} / {{ totalGoal.toLocaleString()
              }} EGP)</span>
          </div> -->
        </div>
        <div class="hidden gap-3" dir="ltr">
          <button
            class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button
            class="w-10 h-10 rounded-full bg-[#1b9e76] flex items-center justify-center text-white hover:bg-[#15805f] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="goal in payment.goals" :key="goal.id"
          class="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div class="h-48 bg-gray-300">
            <img src="../assets/imgs/donate.png" alt="Cause Image" class="w-full h-full object-cover" />
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-bold text-[#1a202c] mb-2">{{ goal.title }}</h3>
            <p class="text-gray-500 text-sm mb-6 flex-1">{{ goal.description }}</p>

            <div class="mb-4">
              <div class="flex justify-end mb-1">
                <span class="text-sm font-bold text-[#1a202c]">{{ getPercentage(goal.collected, goal.target) }}%</span>
              </div>
              <div class="w-full h-1 bg-gray-200 rounded-full" dir="ltr">
                <div class="h-1 bg-[#1a202c] rounded-full"
                  :style="{ width: getPercentage(goal.collected, goal.target) + '%' }"></div>
              </div>
            </div>

            <div class="flex justify-between mb-6">
              <div>
                <p class="text-xs text-gray-500 mb-1">الهدف</p>
                <p class="font-bold text-[#1a202c]">{{ goal.target.toLocaleString() }} EGP</p>
              </div>
              <div class="text-left">
                <p class="text-xs text-gray-500 mb-1">المبلغ المجمع</p>
                <p class="font-bold text-[#1a202c]">{{ goal.collected.toLocaleString() }} EGP</p>
              </div>
            </div>

            <button @click="scrollToForm"
              class="cursor-pointer py-2 px-6 rounded-full border border-gray-300 font-semibold text-[#1a202c] hover:bg-gray-50 transition-colors self-start">
              ساهم الآن
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Top Donors Section -->
    <div class="max-w-6xl mx-auto py-12 border-t border-gray-200 mt-8">
      <h2 class="text-3xl font-bold text-[#1a202c] mb-8 text-center">أحدث المساهمين</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="donor in payment.donors" :key="donor.name"
          class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div class="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-xl"
            :style="{ backgroundColor: donor.color }">
            {{ donor.initial }}
          </div>
          <div>
            <h3 class="font-bold text-lg text-[#1a202c]">{{ donor.name }}</h3>
            <p class="text-gray-500 font-semibold">{{ ((donor.amount / totalGoal) * 100).toFixed(1) }}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { paymentConfig } from '../config/paymentConfig';

const activeTab = ref('vodafone');
const payment = paymentConfig;

const totalGoal = computed(() => {
  return payment.goals.reduce((acc, goal) => acc + goal.target, 0);
});

const totalCollected = computed(() => {
  return payment.goals.reduce((acc, goal) => acc + goal.collected, 0);
});

const scrollToForm = () => {
  document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' });
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    // يمكنك إضافة توست هنا بدلاً من الـ alert
    alert('تم النسخ: ' + text);
  });
};

const getPercentage = (collected, target) => {
  return Math.min(Math.round((collected / target) * 100), 100);
};
</script>

<style scoped>
/* hide number input arrows */
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>