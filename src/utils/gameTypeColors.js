// src/utils/gameTypeColors.js
export const genreColors = {
  1: "#FF5722", // Shooters (FPS / TPS) - ألعاب رماية وتصويب
  2: "#00E5FF", // Action / Adventure - أكشن ومغامرات
  3: "#FF0000", // Racing - سباق سيارات
  4: "#2196F3", // Sports - ألعاب رياضة (كرة قدم، مصارعة)
  5: "#FFFF00", // Fighting - ألعاب قتال (قتال شوارع)
  6: "#795548", // Strategy - ألعاب استراتيجية (بناء جيوش)
  7: "#9C27B0", // Puzzle / Mind - ألغاز وذكاء
  8: "#4CAF50", // Platformer - ألعاب منصات (ماريو، سونيك)
  9: "#FF4081", // Cooking & Girls - طبخ وألعاب بنات
  10: "#8BC34A", // Farming & Simulation - مزارع ومحاكاة
  11: "#000000", // Horror - ألعاب رعب
  12: "#9E9E9E", // Other / Mixed - أنواع أخرى
};
export const getColorById = (id) => {
  return genreColors[id] || "#9E9E9E";
};
