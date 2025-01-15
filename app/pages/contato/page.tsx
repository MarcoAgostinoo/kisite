"use client";
import { useEffect, useState } from "react";
import CustomFooter from "@/app/components/footer/CustomFooter";
import NavBar from "@/app/components/navbar/NavBar";

const apiUrl = "https://backendnodemailer.vercel.app";
const endpointUrl = `${apiUrl}/send`;

interface FormStatus {
  success: boolean;
  message: string;
}

const questions = JSON.parse(process.env.NEXT_PUBLIC_CAPTCHA_QUESTIONS || "[]");
const answers = JSON.parse(process.env.NEXT_PUBLIC_CAPTCHA_ANSWERS || "[]");

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);
  const [captchaIndex, setCaptchaIndex] = useState<number | null>(null);
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  useEffect(() => {
    setCaptchaIndex(Math.floor(Math.random() * questions.length));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

    // Verifica se a resposta do captcha está correta
    if (captchaAnswer !== answers[captchaIndex!]) {
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
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Nome
              </label>
              <div className="mt-2.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Empresa
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                E-mail
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Telefone
              </label>
              <div className="mt-2.5">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Mensagem
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="captcha"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Resolva a questão: {questions[captchaIndex!]}
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
      <CustomFooter />
    </div>
  );
}
