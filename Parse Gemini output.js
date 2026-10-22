const text = $json.steps?.find(s => s.type === "model_output")
  ?.content?.find(c => c.type === "text")?.text;

if (!text) {
  throw new Error("Gemini output text not found");
}

const clean = text
  .replace(/^```json\s*/i, "")
  .replace(/\s*```$/i, "")
  .trim();

return [{ json: JSON.parse(clean) }];
