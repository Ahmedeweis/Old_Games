// src/services/gameService.js
import axios from "axios";
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});
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
export const getAllGamesSummary = async () => {
    const res = await api.get("/games/summary");
    return res.data;
};
export const getGameById = async (id) => {
    const res = await api.get(`/games/${id}`);
    return res.data;
};