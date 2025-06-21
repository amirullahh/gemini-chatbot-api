import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// PEMBARUAN: Nama paket yang benar adalah @google/generative-ai
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const static_Path = "public";

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(static_Path));

// Cek apakah API Key sudah ada
if (!process.env.GEMINI_API_KEY) {
  console.error("Kesalahan: Variabel lingkungan GEMINI_API_KEY tidak diatur.");
  process.exit(1); // Keluar dari proses jika API key tidak ada
}

// PEMBARUAN: Inisialisasi klien API Gemini dengan nama kelas yang benar
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.listen(port, () => {
  console.log(`Gemini Chatbot berjalan di http://localhost:${port}`);
});

// Routes
// PERBAIKAN: Mengubah route agar cocok dengan panggilan API dari Postman (/api/chat)
app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res
      .status(400)
      .json({ error: "Properti 'message' diperlukan di dalam body request" });
  }

  try {
    // Menggunakan model gemini-1.5-flash yang lebih baru dan efisien
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Hasilkan konten langsung tanpa memulai sesi chat (lebih cocok untuk request tunggal)
    const result = await model.generateContent(userMessage);
    const response = result.response;
    const botReply = response.text();

    res.json({ reply: botReply });
  } catch (error) {
    console.error("Terjadi kesalahan saat memanggil Gemini API:", error);
    res.status(500).json({
      error:
        "Gagal mendapatkan respons dari Gemini. Periksa log server untuk detailnya.",
    });
  }
});
