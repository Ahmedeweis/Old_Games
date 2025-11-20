// src/services/authService.js
import api from "./api";
export const adminLogin = async (username, password) => {
    try {
        const res = await api.post("/admin/login", { username, password }); // بدل email
        return res.data;
    } catch (err) {
        console.error("Login error:", err);
        throw err;
    }
};
export const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
};
