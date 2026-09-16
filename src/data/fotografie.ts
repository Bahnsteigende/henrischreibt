export type FotoBild = {
  // Pfad relativ zu src/assets/fotografie/
  file: string;
  // Kurzer Bildtext (ein Satz reicht) — erscheint beim Hover über dem Bild.
  // Optional: einfach weglassen, wenn kein Text gewünscht ist.
  caption?: string;
};

export type FotoKategorie = {
  title: string;
  // Kurze Einleitung zur Kategorie, erscheint unter dem Titel.
  intro?: string;
  images: FotoBild[];
};

// Bilder liegen in src/assets/fotografie/<Kategorie>/...
// Bilder hinzufügen: neues Objekt { file: "...", caption: "..." } ins passende Array einfügen.
// Bilder entfernen: Objekt löschen. Reihenfolge = Reihenfolge im Array.
export const fotografieKategorien: FotoKategorie[] = [
  {
    title: "Hochzeiten & Events",
    images: [
      { file: "HochzeitenEvents/events-1.png" },
      { file: "HochzeitenEvents/events-2.jpg" },
      { file: "HochzeitenEvents/events-3.jpg" },
      { file: "HochzeitenEvents/events-4.jpg" },
      { file: "HochzeitenEvents/events-5.jpg" },
    ],
  },
  {
    title: "Outdoor",
    images: [
      { file: "Outdoor/outdoor-1.jpg" },
      { file: "Outdoor/outdoor-2.jpg" },
      { file: "Outdoor/outdoor-3.jpg" },
      { file: "Outdoor/outdoor-4.jpg" },
      { file: "Outdoor/outdoor-5.jpg" },
    ],
  },
  {
    title: "Monochrom",
    images: [
      { file: "Monochrom/monochrom-1.jpg" },
      { file: "Monochrom/monochrom-2.jpg" },
      { file: "Monochrom/monochrom-3.jpg" },
      { file: "Monochrom/monochrom-4.jpg" },
    ],
  },
  {
    title: "Diverses",
    images: [
      { file: "Diverses/diverses-1.jpg" },
      { file: "Diverses/diverses-2.jpg" },
      { file: "Diverses/diverses-3.jpg" },
    ],
  },
];
