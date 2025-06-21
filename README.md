Proyek Chatbot Gemini AI
Selamat datang di Proyek Chatbot Gemini! Ini adalah aplikasi web sederhana yang menunjukkan kekuatan model AI Google, Gemini 1.5 Flash, untuk menciptakan percakapan yang cerdas dan dinamis. Aplikasi ini terdiri dari backend yang dibangun dengan Node.js/Express dan frontend interaktif yang dibuat dengan Vanilla JavaScript.

✨ Fitur Utama
Antarmuka Percakapan Real-time: Tampilan chat yang bersih, responsif, dan mudah digunakan.

Integrasi Penuh dengan Gemini AI: Terhubung langsung dengan Gemini API untuk menghasilkan respons yang relevan secara kontekstual.

Backend Ringan: Dibuat dengan Express.js, server ini efisien dalam menangani permintaan API dari frontend.

Setup yang Mudah: Proyek ini dirancang agar dapat dijalankan secara lokal hanya dengan beberapa perintah sederhana.

🛠️ Teknologi yang Digunakan
Frontend: HTML5, CSS3, Vanilla JavaScript (fetch API)

Backend: Node.js, Express.js

AI Model: Google Gemini 1.5 Flash (@google/generative-ai)

Manajemen Environment: dotenv untuk mengelola API key dengan aman.

Lainnya: cors untuk mengizinkan komunikasi antara frontend dan backend.

🚀 Panduan Instalasi dan Menjalankan Proyek
Ikuti langkah-langkah berikut untuk meng-clone dan menjalankan proyek ini di komputer Anda.

Prasyarat
Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut:

Node.js (versi 18.x atau yang lebih baru sangat direkomendasikan).

NPM (biasanya sudah terinstal bersama Node.js).

Git untuk melakukan cloning repository.

API Key Gemini: Anda memerlukan API key dari Google AI Studio.

Langkah 1: Clone Repository
Buka terminal atau command prompt Anda, lalu clone repositori ini ke direktori lokal Anda.

git clone [https://github.com/amirullahh/gemini-chatbot-api.git](https://github.com/amirullahh/gemini-chatbot-api.git)
cd gemini-chatbot-api

Langkah 2: Instal Dependensi Proyek
Setelah masuk ke direktori proyek, instal semua paket Node.js yang diperlukan dengan menjalankan perintah berikut.

npm install

Perintah ini akan membaca file package.json dan mengunduh semua library (seperti Express, dotenv, dll.) ke dalam folder node_modules.

Langkah 3: Konfigurasi API Key (Environment Variable)
Ini adalah langkah paling penting untuk menghubungkan aplikasi ke Gemini AI.

Di dalam direktori proyek, Anda akan menemukan file bernama .env.example. Buat salinan dari file ini dan beri nama .env. Anda bisa melakukannya dengan perintah:

# Untuk pengguna Mac/Linux
cp .env.example .env

# Untuk pengguna Windows
copy .env.example .env

Buka file .env yang baru saja Anda buat dengan teks editor.

Ganti placeholder YOUR_GEMINI_API_KEY_HERE dengan API Key Gemini yang telah Anda buat.

# File: .env
GEMINI_API_KEY="MASUKKAN_API_KEY_ASLI_ANDA_DI_SINI"

Pastikan tidak ada spasi sebelum atau sesudah tanda kutip.

Langkah 4: Jalankan Aplikasi
Setelah semua konfigurasi selesai, Anda siap untuk menjalankan aplikasi.

Jalankan Server Backend:
Di terminal Anda, jalankan salah satu dari perintah berikut:

npm start

Jika berhasil, Anda akan melihat pesan di terminal:
Gemini Chatbot berjalan di http://localhost:3000

Buka Halaman Frontend:
Buka browser web Anda dan arahkan ke file index.html yang ada di dalam folder public. Cara termudah adalah dengan menyeret file public/index.html ke jendela browser Anda atau menggunakan ekstensi "Live Server" jika Anda menggunakan VS Code.

Sekarang, Anda sudah bisa mulai mengirim pesan ke chatbot Anda!
