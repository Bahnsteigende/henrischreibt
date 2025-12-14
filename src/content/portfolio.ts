export type PortfolioEntry = {
  title: string;
  publication: string;
  date: string;
  url: string;
  category: "journalismus" | "lyrik";
};

export const portfolio: PortfolioEntry[] = [
  // ─── Journalismus / heise online ─────────────────────────────
  {
    title: "Tauwächter - Monitoring der Alpengletscher mit Drohnenaufnahmen und digitalen Zwillingen",
    publication: "heise online",
    date: "2025-11-03",
    url: "https://www.heise.de/hintergrund/Monitoring-der-Alpengletscher-mit-Drohnenaufnahmen-und-digitalen-Zwillingen-10764696.html",
    category: "journalismus",
  },
    {
    title: "Quanten-Games - Wissen, Intuition und Forschung dank quantenbasierter Computerspiele",
    publication: "heise online",
    date: "2025-11-28",
    url: "https://www.heise.de/hintergrund/Quantenphysik-verstehen-und-erforschen-mit-Computerspielen-10823708.html",
    category: "journalismus",
  },

  // ─── Lyrik (optional, intern oder extern) ────────────────────
  {
    title: "Platzhalter",
    publication: "unveröffentlicht",
    date: "2023",
    url: "/lyrik/bahnhof-640",
    category: "lyrik",
  },
];