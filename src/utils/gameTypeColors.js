// src/utils/gameTypeColors.js
export const gameTypeColors = {
  Platformer: "#188038",
  "Action | Adventure": "#1A73E8",
  "Tower Defense": "#A142F4",
  "Beat ’em up": "#FB8C00",
  "Action RPG": "#E91E63",
  "Sandbox | Survival": "#4CAF50",
  "Action | Open World": "#9C27B0",
  "First-Person Shooter": "#FF5722",
  "Sports | Football": "#2196F3",
  "Battle Royale": "#FF5252",
};
export const getColor = (type) => {
  return gameTypeColors[type] || "#999";
};
