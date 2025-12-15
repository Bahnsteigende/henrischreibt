export type PortfolioEntry = {
  title: string;
  publication: string;
  date: string;
  url: string;
  category: "journalismus" | "lyrik"| "durcheinander";
};

export const portfolio: PortfolioEntry[] = [
  // ─── Journalismus / heise online ─────────────────────────────
  {
    title: "Tauwächter - Monitoring der Alpengletscher mit Drohnenaufnahmen und digitalen Zwillingen",
    publication: "heise online",
    date: "2025",
    url: "https://www.heise.de/hintergrund/Monitoring-der-Alpengletscher-mit-Drohnenaufnahmen-und-digitalen-Zwillingen-10764696.html",
    category: "journalismus",
  },
    {
    title: "Quanten-Games - Wissen, Intuition und Forschung dank quantenbasierter Computerspiele",
    publication: "heise online",
    date: "2025",
    url: "https://www.heise.de/hintergrund/Quantenphysik-verstehen-und-erforschen-mit-Computerspielen-10823708.html",
    category: "journalismus",
  },

  // ─── Lyrik (optional, intern oder extern) ────────────────────
  {
    title: "Burning a rome",
    publication: "hier",
    date: "2025",
    url: "/lyrik/burningarome",
    category: "lyrik",
  },


  // ─── Durcheinander (optional, intern oder extern) ────────────────────
  {
    title: "Die Bürgerschaft",
    publication: "Europa-Wettbewerb",
    date: "2019",
    url: "https://cfg.wtal.de/wp-content/uploads/2019/07/Die-B%C3%BCrgerschaft.pdf",
    category: "durcheinander",
  },


];

