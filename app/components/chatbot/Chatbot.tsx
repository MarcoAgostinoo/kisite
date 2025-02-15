// 'use client'; // Indica que este é um componente do lado do cliente

// import { useState } from 'react';

// export default function Chatbot() {
//   const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false); // Estado para indicar carregamento

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!input.trim()) return; // Ignora mensagens vazias

//     // Adiciona a mensagem do usuário à lista
//     const userMessage = { sender: 'user', text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput('');
//     setLoading(true); // Ativa o estado de carregamento

//     try {
//       // Envia a mensagem para a API
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: input }),
//       });

//       const data = await response.json();
//       const botMessage = { sender: 'bot', text: data.reply };

//       // Adiciona a resposta do bot à lista
//       setMessages((prev) => [...prev, botMessage]);
//     } catch (error) {
//       console.error(error);
//       setMessages((prev) => [
//         ...prev,
//         { sender: 'bot', text: 'Desculpe, ocorreu um erro ao processar sua solicitação.' },
//       ]);
//     } finally {
//       setLoading(false); // Desativa o estado de carregamento
//     }
//   };

//   return (
//     <div className="fixed bottom-8 right-8 w-96 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
//       {/* Cabeçalho */}
//       <div className="bg-blue-500 text-white px-4 py-3 font-bold">Chatbot</div>

//       {/* Área de Mensagens */}
//       <div className="max-h-80 overflow-y-auto p-4 space-y-2">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//           >
//             <div
//               className={`inline-block max-w-[70%] px-4 py-2 rounded-lg ${
//                 msg.sender === 'user'
//                   ? 'bg-blue-500 text-white'
//                   : 'bg-gray-100 text-gray-800'
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}

//         {/* Indicador de Carregamento */}
//         {loading && (
//           <div className="flex justify-start">
//             <div className="inline-block px-4 py-2 rounded-lg bg-gray-100 text-gray-800">
//               <span className="animate-pulse">Carregando...</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Formulário de Envio */}
//       <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Digite sua mensagem..."
//             className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//             disabled={loading}
//           >
//             Enviar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }