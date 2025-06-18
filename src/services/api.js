import axios from "axios";
import { getOrCreateVisitorId } from "@/utils/session"; // هنضيفه كمان بعد شوية
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
// ✅ Interceptor لإضافة visitor_id في كل الطلبات
api.interceptors.request.use(
  (config) => {
    const visitorId = getOrCreateVisitorId();
    config.headers["X-Visitor-ID"] = visitorId;
    return config;
  },
  (error) => Promise.reject(error)
);
export default api;
