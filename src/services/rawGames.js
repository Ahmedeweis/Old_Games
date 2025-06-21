const rawGames = [
  {
    id: 1,
    title: "Super Mario",
    image: "/games/mario.png",
    time: "1985",
    type: "Platformer",
    downloads: 12,
    description:
      "Help Mario jump over obstacles and rescue the princess in this classic adventure.",
    downloadLinks: [
      { name: "Mega", url: "https://mega.nz/super-mario" },
      { name: "MediaFire", url: "https://mediafire.com/super-mario" },
    ],
  },
  {
    id: 2,
    title: "Sonic the Hedgehog",
    image: "/games/sonic.png",
    time: "1991",
    type: "Action | Adventure",
    downloads: 20,
    description:
      "Speed through loops and defeat Dr. Robotnik as Sonic in this fast-paced classic.",
    downloadLinks: [
      { name: "Mega", url: "https://mega.nz/sonic" },
      { name: "Google Drive", url: "https://drive.google.com/sonic" },
    ],
  },
  {
    id: 3,
    title: "Plants vs. Zombies",
    image: "/games/zombie.png",
    time: "2009",
    type: "Tower Defense",
    downloads: 60,
    description:
      "Strategically place plants to defend your home from waves of quirky zombies.",
    downloadLinks: [{ name: "MediaFire", url: "https://mediafire.com/pvz" }],
  },
  {
    id: 4,
    title: "Ultimate Spider‑Man",
    image: "/games/spider.png",
    time: "2005",
    type: "Beat ’em up",
    downloads: 25,
    description:
      "Swing through the city and fight as both Spider‑Man and Venom in comic-style action.",
    downloadLinks: [
      { name: "Mega", url: "https://mega.nz/spiderman" },
      { name: "Google Drive", url: "https://drive.google.com/spiderman" },
    ],
  },
  {
    id: 5,
    title: "God of War",
    image: "/games/god-war.png",
    time: "2005",
    type: "Action | Adventure",
    downloads: 75,
    description:
      "Join Kratos and Atreus on a mythical journey through Norse realms and gods.",
    downloadLinks: [
      { name: "MediaFire", url: "https://mediafire.com/godofwar" },
      { name: "Mega", url: "https://mega.nz/godofwar" },
    ],
  },
  {
    id: 6,
    title: "The Witcher 3: Wild Hunt",
    image: "/games/wetcher.png",
    time: "2015",
    type: "Action RPG",
    downloads: 120,
    description:
      "Play as Geralt and explore a vast open world full of monsters, magic, and intrigue.",
    downloadLinks: [
      { name: "Google Drive", url: "https://drive.google.com/witcher3" },
    ],
  },
  {
    id: 7,
    title: "Minecraft",
    image: "/games/minecraft.png",
    time: "2011",
    type: "Sandbox | Survival",
    downloads: 200,
    description:
      "Build, mine, and explore infinite worlds alone or with friends in creative or survival mode.",
    downloadLinks: [
      { name: "MediaFire", url: "https://mediafire.com/minecraft" },
      { name: "Mega", url: "https://mega.nz/minecraft" },
    ],
  },
  {
    id: 8,
    title: "GTA: San Andreas",
    image: "/games/gta.png",
    time: "2004",
    type: "Action | Open World",
    downloads: 150,
    description:
      "Follow CJ’s story as he returns to the streets and builds his gang empire in Los Santos.",
    downloadLinks: [
      { name: "Google Drive", url: "https://drive.google.com/gta" },
    ],
  },
  {
    id: 9,
    title: "Call of Duty: Modern Warfare",
    image: "/games/cod.png",
    time: "2019",
    type: "First-Person Shooter",
    downloads: 95,
    description:
      "Experience intense shooting combat and a gripping single-player story in modern warfare.",
    downloadLinks: [
      { name: "MediaFire", url: "https://mediafire.com/codmw" },
      { name: "Mega", url: "https://mega.nz/codmw" },
    ],
  },
  {
    id: 10,
    title: "FIFA 22",
    image: "/games/fifa.png",
    time: "2021",
    type: "Sports | Football",
    downloads: 110,
    description:
      "Compete with the world’s best teams and players in realistic football matches.",
    downloadLinks: [
      { name: "Google Drive", url: "https://drive.google.com/fifa22" },
    ],
  },
  {
    id: 11,
    title: "Assassin’s Creed Valhalla",
    image: "/games/valhalla.png",
    time: "2020",
    type: "Action RPG",
    downloads: 88,
    description:
      "Live the saga of Eivor, a Viking raider exploring England during the Dark Ages.",
    downloadLinks: [{ name: "Mega", url: "https://mega.nz/valhalla" }],
  },
  {
    id: 12,
    title: "Fortnite",
    image: "/games/fortnite.png",
    time: "2017",
    type: "Battle Royale",
    downloads: 300,
    description:
      "Jump in and battle to be the last one standing in this fast-paced, build-and-fight game.",
    downloadLinks: [
      { name: "Epic Games", url: "https://www.epicgames.com/fortnite" },
    ],
  },
];
export default rawGames;
