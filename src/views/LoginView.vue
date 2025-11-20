<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black" dir="rtl">
    <div class="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-200/30">
      <h2 class="text-3xl font-extrabold text-gray-800 mb-6 text-center tracking-wide">تسجيل دخول الادمن</h2>
      <form @submit.prevent="onSubmit" class="space-y-5">
        <div>
          <label class="text-sm font-semibold text-gray-600">اسم المستخدم</label>
          <input v-model="username" type="text" required
            class="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-600">كلمة المرور</label>
          <input v-model="password" type="password" required
            class="w-full mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200" />
        </div>
        <div class="flex items-center justify-between">
          <button :disabled="isLoading"
            class="flex-1 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition-transform duration-150 disabled:opacity-50">
            {{ isLoading ? "جاري الدخول..." : "دخول" }}
          </button>
        </div>
        <p v-if="error" class="text-sm text-red-500 mt-3 text-center font-medium">{{ error }}</p>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { adminLogin } from "../services/authService";
const router = useRouter();
const username = ref("");  // هنا بدل email
const password = ref("");
const isLoading = ref(false);
const error = ref("");
const onSubmit = async () => {
  error.value = "";
  isLoading.value = true;
  try {
    const data = await adminLogin(username.value.trim(), password.value);
    if (data.token) {
      localStorage.setItem("adminToken", data.token);
      console.log(localStorage.getItem("adminToken")); // لازم يظهر JWT كامل
      if (data.admin) localStorage.setItem("adminInfo", JSON.stringify(data.admin));
      router.push({ name: "Game-Table" });
    } else {
      throw new Error("لا يوجد توكن من الخادم");
    }
  } catch (e) {
    console.error(e);
    error.value = e.response?.data?.error || e.message || "فشل الدخول";
  } finally {
    isLoading.value = false;
  }
};
</script>
