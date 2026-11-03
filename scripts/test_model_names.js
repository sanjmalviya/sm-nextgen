const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { GoogleGenAI } = require('@google/genai');

async function testModels() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const candidates = [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-1.5-flash',
    'gemini-2.5-flash-lite'
  ];

  for (const model of candidates) {
    try {
      const t0 = Date.now();
      const res = await ai.models.generateContent({
        model,
        contents: 'Say hello in one word'
      });
      console.log(`Model [${model}] SUCCESS in ${Date.now() - t0}ms: "${res.text.trim()}"`);
    } catch (err) {
      console.log(`Model [${model}] FAILED: ${err.message}`);
    }
  }
}

testModels().catch(console.error);
