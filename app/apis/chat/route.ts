// import OpenAI from 'openai';
// import { NextResponse } from 'next/server';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(request: Request) {
//   try {
//     const { message } = await request.json();

//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [{ role: 'user', content: message }],
//       max_tokens: 100,
//       temperature: 0.7,
//     });

//     const botReply = response.choices[0].message?.content || 'Desculpe, não entendi sua pergunta.';
//     return NextResponse.json({ reply: botReply });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Erro ao processar a solicitação.' }, { status: 500 });
//   }
// }