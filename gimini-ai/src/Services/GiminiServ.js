import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.REACT_APP_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

export async function getGeminiResponse(userPrompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

  const result = await model.generateContent(userPrompt);
  const response = result.response;
  return response.text();
}
