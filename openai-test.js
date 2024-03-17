import OpenAI from "openai";
//rawrrrr :D


const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-4",
  });

  console.log(completion.choices[0]);
}

main();