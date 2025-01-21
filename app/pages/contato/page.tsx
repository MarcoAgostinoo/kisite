"use client";
import { useEffect, useState } from "react";
import CustomFooter from "@/app/components/footer/CustomFooter";
import NavBar from "@/app/components/navbar/NavBar";
import OutrosServicos from "@/app/components/outrosservicos/OutrosServicos";
import CaroucelClientes from "@/app/components/caroucelclientes/CaroucelClientes";

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
    <div>
      <NavBar />
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Entre em contato conosco
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Estamos aqui para oferecer soluções personalizadas para seu projeto.
            Preencha o formulário abaixo para que possamos ajudar você da melhor
            maneira possível!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* Campos do formulário */}
            {["name", "company", "email", "phone", "message"].map((field) => (
              <div
                key={field}
                className={`sm:col-span-2 ${
                  field === "message" ? "" : "sm:col-span-1"
                }`}
              >
                <label
                  htmlFor={field}
                  className="block text-sm/6 font-semibold text-gray-900"
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
                <div className="mt-2.5">
                  {field === "message" ? (
                    <textarea
                      id={field}
                      name={field}
                      rows={4}
                      value={formData[field as keyof FormData]}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  ) : (
                    <input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={formData[field as keyof FormData]}
                      onChange={handleChange}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />
                  )}
                </div>
              </div>
            ))}

            {/* CAPTCHA */}
            <div className="sm:col-span-2">
              <label
                htmlFor="captcha"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Resolva a questão: {captchaQuestion || "Carregando..."}
              </label>
              <div className="mt-2.5">
                <input
                  id="captcha"
                  name="captcha"
                  type="text"
                  value={captchaAnswer}
                  onChange={handleCaptchaChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            {/* Botão Enviar */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-4 py-3 text-lg font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
              >
                Enviar mensagem
              </button>
            </div>
          </div>
        </form>
        {formStatus && (
          <div
            className={`mt-6 text-center text-lg font-semibold ${
              formStatus.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {formStatus.message}
          </div>
        )}
      </div>
      <CaroucelClientes />
      <OutrosServicos />
      <CustomFooter />
    </div>
  );
}
