/* ===== DATA PORTOFOLIO — EDIT FILE INI SAJA UNTUK MENAMBAH ISI =====
   Semua yang berawalan [CONTOH] adalah data contoh, ganti dengan data asli. */

// KONTAK (nomor WA tanpa tanda + atau 0 di depan)
const KONTAK = {
  wa: "6289603781902",
  pesan: "Halo Eron, saya tertarik dengan jasa kamu",
  ig: "https://www.instagram.com/laronkelelepp",
  tiktok: "https://www.tiktok.com/@rronnzzz"
};

// SKILL (v = persen 0-100) & TOOLS
const SKILLS = [
  { n: "Editing Video", v: 85 }, { n: "Fotografi", v: 80 },
  { n: "Desain Grafis", v: 75 }, { n: "Kamera", v: 80 }, { n: "Audio", v: 70 }
];
const TOOLS = ["Premiere Pro", "CapCut", "Photoshop", "Canva", "Lightroom"]; // [CONTOH]

// PENGALAMAN PKL
const PKL = [
  { waktu: "2026", tempat: "[CONTOH] Nama Tempat PKL", desk: "Tulis tugas/pengalaman singkat di sini." }
];

// SERTIFIKAT (taruh gambar di assets/images/)
const SERTIFIKAT = [
  { judul: "[CONTOH] Sertifikat PKL", img: "assets/images/sertifikat1.jpg" }
];

// MAPEL: id dipakai di TUGAS. grup: "Umum" | "Kejuruan" | "Lainnya"
const MAPEL = [
  { id: "bindo", nama: "Bahasa Indonesia", grup: "Umum" },
  { id: "bjawa", nama: "Bahasa Jawa", grup: "Umum" },
  { id: "bing", nama: "Bahasa Inggris", grup: "Umum" },
  { id: "mtk", nama: "MTK", grup: "Umum" },
  { id: "pai", nama: "PAI", grup: "Umum" },
  { id: "pjok", nama: "PJOK", grup: "Umum" },
  { id: "ppkn", nama: "PPKN", grup: "Umum" },
  { id: "sejarah", nama: "Sejarah", grup: "Umum" },
  { id: "rina", nama: "Kejuruan Bu Rina", grup: "Kejuruan" },
  { id: "iwan", nama: "Kejuruan Pak Iwan", grup: "Kejuruan" },
  { id: "jurnal", nama: "Jurnalistik", grup: "Kejuruan" },
  { id: "bk", nama: "BK", grup: "Lainnya" },
  { id: "kik", nama: "KIK", grup: "Lainnya" }
];

// TUGAS: mapel = id di atas. jenis: "PDF" | "Foto" | "Drive" | "Word"
// link: file di assets/pdf/... ATAU link Google Drive
const TUGAS = [
  { mapel: "bindo", judul: "[CONTOH] Teks Eksposisi", jenis: "PDF", link: "assets/pdf/contoh.pdf" },
  { mapel: "rina", judul: "[CONTOH] Storyboard Program TV", jenis: "Drive", link: "https://drive.google.com/" }
];

// KARYA. kategori: "Video" | "Foto" | "Desain Grafis"
// tipe: "youtube" (src = ID video) | "drive" (src = ID file Drive) | "foto" (src = path gambar)
// unggulan: true -> tampil di beranda (maks 3)
const KARYA = [
  { judul: "[CONTOH] Video Profil", kategori: "Video", tipe: "youtube", src: "GANTI_ID_YOUTUBE", desk: "Deskripsi singkat karya.", unggulan: true },
  { judul: "[CONTOH] Foto Potret", kategori: "Foto", tipe: "foto", src: "assets/images/foto1.jpg", desk: "Deskripsi singkat karya.", unggulan: true },
  { judul: "[CONTOH] Poster Event", kategori: "Desain Grafis", tipe: "foto", src: "assets/images/desain1.jpg", desk: "Deskripsi singkat karya.", unggulan: true }
];

// PRESTASI
const PRESTASI = [
  { nama: "[CONTOH] Juara 1 Lomba Videografi", tahun: "2026", penyelenggara: "Nama Penyelenggara", img: "assets/images/prestasi1.jpg" }
];
