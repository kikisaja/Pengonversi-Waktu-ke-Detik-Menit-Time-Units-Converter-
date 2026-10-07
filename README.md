# ⏱️ Time Units Converter

Aplikasi pengonversi satuan waktu (*Time Units Converter*) interaktif yang melakukan kalkulasi *real-time* secara instan antara detik, menit, jam, hari, dan minggu.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Base-Unit Pattern (Pola Konversi Basis):**
   Mengonversi input ke satuan dasar terendah (detik) terlebih dahulu sebelum dibagi ke unit target untuk menyederhanakan kombinasi matematika.
2. **Real-time Event Handling (`input` & `change`):**
   Merespons perubahan angka atau opsi pilihan dropdown secara langsung tanpa perlu tombol *submit*.
3. **Clipboard API (`navigator.clipboard`):**
   Menggunakan API bawaan JavaScript modern untuk fitur salin nilai ke papan klip (*clipboard*) dengan notifikasi *toast*.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Input nilai waktu, dropdown satuan, dan grid kartu hasil
├── style.css        # Desain Neobrutalism, warna pop cerah, dan notifikasi toast
└── script.js        # Logika rumus konversi waktu, event handler, dan fitur salin
