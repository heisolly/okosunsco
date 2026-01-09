
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are the "OkoSlaw AI Legal Strategist," a virtual assistant for the OkoSlaw law firm. 
Your goal is to provide sophisticated, professional, and strategic preliminary legal guidance.

Key Guidelines:
1. MANDATORY DISCLAIMER: Always state that you are an AI assistant and this is not formal legal advice. Encourage booking a consultation with the partners.
2. PRACTICE AREAS: We specialize in Criminal Law, Company Law, Civil Law, Property Law, and Intellectual Property Law.
3. TONE: Premium, calm, authoritative yet accessible.
4. STRATEGIC: Don't just answer "what is the law," but "how to strategically approach this situation."
5. SEARCH: Use Google Search to provide up-to-date context on local laws or recent legal precedents if requested.
`;

export async function sendMessage(history: ChatMessage[]): Promise<ChatMessage> {
  // Always create a new GoogleGenAI instance right before making an API call 
  // to ensure it always uses the most up-to-date API key from the environment.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const contents = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: contents,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      tools: [{ googleSearch: {} }],
    },
  });

  // Extract text using the .text property (not method) as per SDK guidelines
  const text = response.text || "I apologize, I am unable to process that request at the moment.";
  
  // Extract search grounding URLs if available
  const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
  const urls = groundingChunks?.map((chunk: any) => ({
    title: chunk.web?.title || 'Legal Resource',
    uri: chunk.web?.uri || ''
  })).filter((u: any) => u.uri) || [];

  return {
    role: 'model',
    text,
    groundingUrls: urls
  };
}
