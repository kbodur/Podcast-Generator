require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const axios = require('axios');

const app = express();
const upload = multer();
app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
    try {
        console.log("Received request body:", req.body);  // Gelen veriyi logla

        const { transcript } = req.body;

        if (!transcript || transcript.trim() === "") {
            return res.status(400).json({ error: "Transcript is required" });
        }

        // API'ye istek at
        const response = await fetch("https://api.gemini.com/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
            },
            body: JSON.stringify({ input: transcript }),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        res.json({ podcast: data });

    } catch (error) {
        console.error("Error generating podcast:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.listen(5001, () => console.log('Server running on port 5001'));
