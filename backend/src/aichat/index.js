// // index.js
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const getGeminiResponse = require('./chat');

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post('/api/chat', async (req, res) => {
//   const { message } = req.body;

//   if (!message) {
//     return res.status(400).json({ error: "Message is required." });
//   }

//   try {
//     const reply = await getGeminiResponse(message);
//     res.json({ reply });
//   } catch (err) {
//     console.error("❌ Server Error:", err.message);
//     res.status(500).json({ error: "Something went wrong." });
//   }
// });

// app.listen(3000, () => {
//   console.log('🚀 Server running at http://localhost:3000');
// });