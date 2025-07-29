require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const ai = new GoogleGenerativeAI('AIzaSyCLjNd_nOYh6W6G-topxweTl7IkNhr3Jsk');

async function getGeminiResponse(prompt) {
    try {
        const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

        const chat = model.startChat({
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 800,
            },
            systemInstruction: {
                role: "system",
                parts: [
                    {
                        text: `You are an AI assistant for an inventory and ecommerce website.

You only answer questions related to:
- Inventory management
- How ecommerce websites work
- Features and technology used to build this inventory website
- Website workflows, tracking, logistics, orders, and product handling

✅ Do not answer anything outside this scope.

📝 Answer in a clean and readable format. Break content every 2-3 lines.

📌 Use *bold headings* for key points when needed.

🎯 Maintain a helpful and polite tone. Occasionally use formal emojis like ✅ 📦 💡 🛒 — use at least one emoji in the chat.

Avoid long paragraphs. Be short, clear, and focused.`
                    }
                ]
            }
        });

        const result = await chat.sendMessage(prompt);
        const response = await result.response;
        const text = await response.text();

        // Optional Debug Logs
        // console.log("📨 Prompt:", prompt);
        // console.log("💬 Response:", text);

        return text;
    } catch (err) {
        console.error("❌ AI Error:", err.message);
        throw err;
    }
}

module.exports = getGeminiResponse;
