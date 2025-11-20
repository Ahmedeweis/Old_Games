<template>
  <div class="games-page">
    <div class="flex justify-between items-baseline mb-2.5 ">
              <router-link
        to="/add-game"
        class="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition cursor-pointer font-semibold"
      >
        ➕ إضافة لعبة
      </router-link>
      <h1 class="page-title">🎮 قائمة الألعاب</h1>
            <button @click="handleLogout" class="px-3 py-1 bg-red-500 text-white rounded">
  خروج
</button>
    </div>
    <div v-if="loading" class="loading">⏳ جارِ التحميل...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="overflow-x-auto">
      <table class="w-full border-collapse bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg">
        <thead class="bg-[#2b2b2b] text-yellow-400">
          <tr>
            <th class="p-3 text-right">#</th>
            <th class="p-3 text-right">الصورة</th>
            <th class="p-3 text-right">الاسم</th>
            <th class="p-3 text-right">السنة</th>
            <th class="p-3 text-right">المنصة</th>
            <th class="p-3 text-right">النوع</th>
            <th class="p-3 text-right">التقييم</th>
            <th class="p-3 text-right">التحميلات</th>
            <th class="p-3 text-center">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(game, index) in games"
            :key="game.id"
            class="border-b border-gray-700 hover:bg-[#252525] transition"
          >
            <td class="p-3">{{ index + 1 }}</td>
            <td class="p-3">
              <img
                :src="game.cover_image || defaultImage"
                :alt="game.title"
                class="w-16 h-10 object-cover rounded-md"
              />
            </td>
            <td class="p-3 font-medium">{{ game.title }}</td>
            <td class="p-3">{{ game.release_year || '-' }}</td>
            <td class="p-3">{{ game.platform || '-' }}</td>
            <td class="p-3">{{ game.genre || '-' }}</td>
            <td class="p-3 text-yellow-400 font-semibold">{{ game.rating || '-' }}</td>
            <td class="p-3 text-green-500 font-semibold">{{ game.downloads || 0 }}</td>
            <td class="p-3 text-center flex gap-2 justify-center">
              <button
                @click="goToDetails(game.id)"
                class="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
              >
                👁 عرض
              </button>
              <button
                @click="editGame(game.id)"
                class="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 rounded-md text-black text-sm"
              >
                ✏️ تعديل
              </button>
              <button
                @click="deleteGame(game.id)"
                class="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md text-white text-sm"
              >
                🗑 حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getAllGamesSummary, deleteGameAPI } from "../services/gameService";
const router = useRouter();
const games = ref([]);
const loading = ref(true);
const error = ref(null);
const defaultImage = "https://via.placeholder.com/100x60?text=No+Image";
// ⬇️ عرض مختصر
function shortDesc(text) {
  if (!text) return "";
  return text.length > 70 ? text.slice(0, 70) + "..." : text;
}
// 👁 عرض التفاصيل
function goToDetails(id) {
  router.push(`/zgame/${id}`);
}
// ✏️ تعديل اللعبة (هنربطها لاحقاً بصفحة تعديل)
function editGame(id) {
  router.push(`/edit-game/${id}`);
}
// 🗑 حذف اللعبة عن طريق API
async function deleteGame(id) {
  if (!confirm("هل أنت متأكد من حذف هذه اللعبة؟")) return;
  try {
    await deleteGameAPI(id);
    // إزالة اللعبة من القائمة مباشرة بعد الحذف
    games.value = games.value.filter(game => game.id !== id);
    alert("✅ تم حذف اللعبة بنجاح!");
  } catch (err) {
    alert("❌ حدث خطأ أثناء حذف اللعبة");
    console.error(err);
  }
}
onMounted(async () => {
  try {
    games.value = await getAllGamesSummary();
  } catch (err) {
    error.value = "حدث خطأ أثناء تحميل الألعاب";
    console.error(err);
  } finally {
    loading.value = false;
  }
});
import { logout } from "../services/authService";
const handleLogout = () => {
  logout();
  router.push({ name: "logIn" }); // يرجّع لصفحة تسجيل الدخول
};
</script>
<style scoped>
.games-page {
  background: #111;
  color: #eee;
  min-height: 100vh;
  padding: 20px;
  font-family: "Cairo", sans-serif;
  direction: rtl;
}
.page-title {
  text-align: center;
  color: #ffcc00;
  font-size: 1.6rem;
}
.loading,
.error {
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
}
</style>
