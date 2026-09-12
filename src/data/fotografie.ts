export type FotoKategorie = {
  title: string;
  images: string[];
};

// Bildpfade beginnen mit /bilder/... und zeigen auf Dateien in public/bilder/.
// Bilder hinzufügen: neue Zeile mit Pfad ins passende Array einfügen.
// Bilder entfernen: Zeile löschen. Reihenfolge = Reihenfolge im Array.
export const fotografieKategorien: FotoKategorie[] = [
  {
    title: "Hochzeiten & Events",
    images: [
      "/bilder/dump/Symposium/Symp1.jpg",
      "/bilder/dump/Symposium/Symp4.jpg",
      "/bilder/dump/Symposium/Symp6.jpg",
    ],
  },
  {
    title: "Outdoor",
    images: [
      "/bilder/dump/Bergsteigen/Bergsteigen1.jpg",
      "/bilder/dump/Bergsteigen/Bergsteigen3.jpg",
      "/bilder/dump/Bergsteigen/Bergsteigen4.jpg",
    ],
  },
  {
    title: "Sonstiges",
    images: [
      "/bilder/portfolio/DSCF0334_DxO.jpg",
      "/bilder/portfolio/DSCF1017_DxO_DxO.jpg",
      "/bilder/portfolio/DSCF6856_DxO.jpg",
    ],
  },
];
