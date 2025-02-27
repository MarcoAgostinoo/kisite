"use client";
import { useEffect, useState } from "react";
import LeadConversion from "../../components/LeadConversion";

const apiUrl = "https://backendnodemailer.vercel.app";
const endpointUrl = `${apiUrl}/send`;

// Definição precisa do tipo de formData
interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  success: boolean;
  message: string;
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);
  const [captchaQuestion, setCaptchaQuestion] = useState<string | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Carrega perguntas e respostas do .env
      const questionsEnv = process.env.NEXT_PUBLIC_CAPTCHA_QUESTIONS || "[]";
      const answersEnv = process.env.NEXT_PUBLIC_CAPTCHA_ANSWERS || "[]";
      const questions: string[] = JSON.parse(questionsEnv);
      const answers: string[] = JSON.parse(answersEnv);

      if (questions.length > 0 && questions.length === answers.length) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCaptchaQuestion(questions[randomIndex]);
        setCorrectAnswer(answers[randomIndex]);
      } else {
        console.error(
          "Erro: O número de perguntas e respostas do CAPTCHA não coincide ou está vazio."
        );
      }
    } catch (error) {
      console.error("Erro ao carregar as perguntas e respostas do CAPTCHA:", error);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptchaAnswer(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Valida a resposta do CAPTCHA
    if (captchaAnswer !== correctAnswer) {
      setFormStatus({
        success: false,
        message: "Resposta do CAPTCHA incorreta. Tente novamente.",
      });
      return;
    }

    console.log(`Enviando para: ${endpointUrl}`);

    try {
      const response = await fetch(endpointUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const jsonResponse = await response.json();

      if (!response.ok) {
        throw new Error(jsonResponse.error || "Erro desconhecido");
      }

      setFormStatus({
        success: true,
        message: "Mensagem enviada com sucesso!",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      setCaptchaAnswer(""); // Limpa o campo do CAPTCHA
    } catch (error) {
      if (error instanceof Error) {
        setFormStatus({
          success: false,
          message: `Erro ao submeter o formulário: ${error.message}`,
        });
        console.error("Erro ao submeter o formulário:", error.message);
      } else {
        setFormStatus({
          success: false,
          message: "Erro desconhecido ao submeter o formulário.",
        });
        console.error("Erro desconhecido ao submeter o formulário:", error);
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex items-center justify-center pt-60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-extrabold text-center text-white mb-12">
          Entre em Contato e Transforme Seu Negócio Digital
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-3/5 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div>
              <p className="mt-2 text-center text-lg font-semibold text-primaryBlue dark:text-gray-300">
                Estamos aqui para oferecer soluções personalizadas para seu projeto.
                Preencha o formulário abaixo para que possamos ajudar você da melhor
                maneira possível!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                {["name", "company", "email", "phone", "message"].map((field) => (
                  <div key={field} className="mb-4">
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {field === "name"
                        ? "Nome"
                        : field === "company"
                        ? "Empresa"
                        : field === "email"
                        ? "E-mail"
                        : field === "phone"
                        ? "Telefone"
                        : "Mensagem"}
                    </label>
                    <div className="mt-1">
                      {field === "message" ? (
                        <textarea
                          id={field}
                          name={field}
                          rows={4}
                          value={formData[field as keyof FormData]}
                          onChange={handleChange}
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                      ) : (
                        <input
                          id={field}
                          name={field}
                          type={field === "email" ? "email" : "text"}
                          value={formData[field as keyof FormData]}
                          onChange={handleChange}
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CAPTCHA */}
              <div>
                <label
                  htmlFor="captcha"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Resolva a questão: {captchaQuestion || "Carregando..."}
                </label>
                <div className="mt-1">
                  <input
                    id="captcha"
                    name="captcha"
                    type="text"
                    value={captchaAnswer}
                    onChange={handleCaptchaChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              {/* Botão Enviar */}
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
            {formStatus && (
              <div
                className={`mt-6 text-center text-lg font-semibold ${
                  formStatus.success ? "text-green-500" : "text-red-500"
                }`}
              >
                {formStatus.message}
              </div>
            )}
          </div>
          <div className="lg:w-2/5 mt-12 lg:mt-0">
            <LeadConversion />
          </div>
        </div>
      </div>
    </div>
  );
}
