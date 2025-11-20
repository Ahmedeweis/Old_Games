import api from './api'
// 🟩 إضافة لعبة جديدة
export const addGame = async (gameData) => {
    try {
        const response = await api.post("/games", gameData);
        return response.data;
    } catch (error) {
        console.error("Error adding game:", error);
        throw error;
    }
};
// 🟦 جلب كل الأنواع (Genres)
export const getGenres = async () => {
    try {
        const response = await api.get("/genres");
        return response.data;
    } catch (error) {
        console.error("Error fetching genres:", error);
        throw error;
    }
};
// 🟨 جلب كل المنصات (Platforms)
export const getPlatforms = async () => {
    try {
        const response = await api.get("/platforms");
        return response.data;
    } catch (error) {
        console.error("Error fetching platforms:", error);
        throw error;
    }
};
// 🟫 جلب ملخص كل الألعاب
export const getAllGamesSummary = async () => {
    try {
        const res = await api.get("/games/summary");
        return res.data;
    } catch (error) {
        console.error("Error fetching games summary:", error);
        throw error;
    }
};
// 🔍 جلب لعبة واحدة حسب الـ ID
export const getGameById = async (id) => {
    try {
        const res = await api.get(`/games/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error fetching game:", error);
        throw error;
    }
};
// تحديث لعبة
export const updateGame = async (id, data) => {
    try {
        const res = await api.put(`/games/${id}`, data);
        return res.data;
    } catch (err) {
        console.error('Error updating game:', err);
        throw err;
    }
};
// 🔍 بحث ألعاب حسب اسم أو نوع
export const searchGames = async (query) => {
    try {
        const res = await api.get(`/games/search?q=${encodeURIComponent(query)}`);
        return res.data;
    } catch (error) {
        console.error("Error searching games:", error);
        throw error;
    }
};
// حذف لعبة
export const deleteGameAPI = async (id) => {
    try {
        const res = await api.delete(`/games/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error deleting game:", error);
        throw error;
    }
};