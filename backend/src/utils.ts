import { Request, Response } from "express";

const API_KEY = process.env.GEMINI_API_KEY;

export const handleChat = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Invalid message" });
    }

    if (!API_KEY) {
      return res.status(500).json({ error: "API key missing" });
    }

    // 🔥 Fallback models (order matters)
    const models = [
      "models/gemini-2.5-flash",
      "models/gemini-1.5-flash-001",
      "models/gemini-1.5-pro-001",
    ];

    let reply = "";

    for (const model of models) {
      try {
        console.log("TRYING MODEL:", model);

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1/${model}:generateContent?key=${API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `
You are a calm and empathetic mental health support assistant.

Rules:
- Keep response short (2-4 lines)
- Be human and supportive
- Ask one gentle follow-up question

User: ${message}
                      `,
                    },
                  ],
                },
              ],
            }),
            signal: controller.signal,
          }
        );

        clearTimeout(timeout);

        if (!response.ok) {
          const errText = await response.text();
          console.error("API ERROR:", errText);
          continue; // try next model
        }

        const data = await response.json();

        console.log("RAW RESPONSE:", data);

        reply =
          data?.candidates?.[0]?.content?.parts
            ?.map((p: any) => p.text || "")
            .join("") || "";

        if (reply.trim()) {
          console.log("SUCCESS WITH:", model);
          break;
        }

      } catch (err) {
        console.error("FAILED MODEL:", model, err);
      }
    }

    // 🔥 Final fallback (guaranteed response)
    if (!reply) {
      reply =
        "I'm here for you. It sounds like you're going through something tough. Do you want to share more about it?";
    }

    return res.json({ reply });

  } catch (err: any) {
    console.error("FINAL ERROR:", err);
    return res.status(500).json({
      error: err.message || "Something went wrong",
    });
  }
};