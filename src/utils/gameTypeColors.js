// src/utils/gameTypeColors.js
export const genreColors = {
  1: "#188038", // Platformer
  2: "#1A73E8", // Action | Adventure
  3: "#A142F4", // Tower Defense
  4: "#FB8C00", // Beat ’em up
  5: "#E91E63", // Action RPG
  6: "#4CAF50", // Sandbox | Survival
  7: "#9C27B0", // Action | Open World
  8: "#FF5722", // First-Person Shooter
  9: "#2196F3", // Sports | Football
  10: "#FF5252" // Battle Royale
};
export const getColorById = (id) => {
  return genreColors[id] || "#999";
};