import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini SDK to fail gracefully if key is missing when first accessed
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not defined. Please configure it in the Secrets panel in AI Studio.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });
  }
  return aiClient;
}

// API endpoint for generating a professional digital profile blueprint for a doctor
app.post("/api/generate-profile", async (req, res) => {
  try {
    const { name, specialty, degrees, chamberName, chamberAddress, contactPhone, workingHours, language } = req.body;

    if (!name || !specialty) {
      return res.status(400).json({ error: "Doctor name and specialty are required." });
    }

    const ai = getGeminiClient();

    // Construct a comprehensive prompt requesting formatted medical profile suggestions,
    // marketing copywriting advice, and strategic digital enhancements.
    const prompt = `
Generate a premium, multi-million dollar medical digital identity profile blueprint for the following healthcare professional:

- Full Name: ${name}
- Specialization: ${specialty}
- Degrees/Qualifications: ${degrees || "Not specified, suggest common/appropriate qualifications"}
- Chamber/Clinic Name: ${chamberName || "Not specified, draft a standard professional clinic name"}
- Chamber Address: ${chamberAddress || "Not specified, suggest standard prime Dhaka locations like Dhanmondi, Gulshan, or Banani"}
- Contact Phone / Appointment Booking: ${contactPhone || "+880 1712-345678"}
- Chamber Working Hours: ${workingHours || "Saturday - Thursday, 5 PM - 9 PM"}
- Preferred Profile Language: ${language || "Bilingual (English and Bengali)"}

Using the gemini-3.1-pro-preview model's HIGH thinking level, design a pristine, highly structured JSON output matching this schema:
{
  "tagline": "A premium, sophisticated core branding tagline tailored for this doctor's specialty (max 10 words).",
  "professionalBio": "A deeply trust-building, medical-consultant style introductory biography (150-200 words) highlighting authority, care paradigm, and qualifications.",
  "seoTitle": "A pixel-perfect Google Search title optimized for doctor consultations in Bangladesh (max 60 chars).",
  "seoMetaDescription": "A highly professional meta description that entices patients looking for reliable diagnostics or surgery (max 160 chars).",
  "chamberGuide": "Clear clinical advice on reaching the chamber, what documents/prescriptions patients should bring, and prep guidelines (120-150 words).",
  "patientAdvices": [
    {
      "title": "A highly practical action-oriented medical/health tip title related directly to their medical specialty",
      "description": "2-3 sentences of general, helpful preventive care advice to prove clinical expertise."
    },
    {
      "title": "A second preventive health tip title",
      "description": "2-3 sentences of clinical guidance."
    },
    {
      "title": "A third health tip title",
      "description": "2-3 sentences of preventive care clinical advice."
    }
  ],
  "brandStrategy": [
    "A custom marketing or digital strategy advice point 1 for building online trust.",
    "A custom marketing or digital strategy advice point 2 for improving scheduling & workflow.",
    "A custom marketing or digital strategy advice point 3 for managing virtual followups."
  ]
}

Ensure the output is valid JSON. Return ONLY the JSON object. Do not wrap it in markdown block quotes or extra text.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.HIGH
        },
        responseMimeType: "application/json"
      }
    });

    const textOutput = response.text;
    if (!textOutput) {
      return res.status(500).json({ error: "Failed to generate response content from Gemini API." });
    }

    try {
      const parsedData = JSON.parse(textOutput.trim());
      return res.json(parsedData);
    } catch (parseError) {
      // Fallback in case formatting of JSON structure was slightly off
      console.error("JSON parsing error:", parseError);
      return res.status(500).json({
        error: "Gemini did not return valid JSON.",
        rawText: textOutput
      });
    }

  } catch (error: any) {
    console.error("Error generating profile blueprint:", error);
    return res.status(500).json({
      error: error.message || "An external error occurred while processing the digital identity blueprint."
    });
  }
});

// Configure Vite middleware or static files
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // SPA Fallback for production builds
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
}

setupVite().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`MedProfile backend server running successfully on http://0.0.0.0:${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to initialize Vite dev server middleware in Express:", err);
});
