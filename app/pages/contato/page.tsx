"use client";
import { useState, useEffect } from "react";
import CustomFooter from "@/app/components/footer/CustomFooter";
import NavBar from "@/app/components/navbar/NavBar";
interface FormStatus {
  success: boolean;
  message: string;
}

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    captchaAnswer: "",
  });
  const [captcha, setCaptcha] = useState<{
    question: string;
    id: number | null;
  }>({
    question: "",
    id: null,
  });
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);

  // Carregar uma pergunta captcha ao montar o componente
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL_CAPTCHA;
    fetch(`${apiUrl}/captcha`)
      .then((response) => response.json())
      .then((data) => setCaptcha(data))
      .catch((err) => console.error("Erro ao carregar captcha:", err));
  }, []);

  // Gerenciar mudanças nos campos do formulário
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submeter o formulário
  // Submeter o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(`Enviando para: ${apiUrl}/send`);

    try {
      const response = await fetch(`${apiUrl}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          captchaId: captcha.id,
          captchaAnswer: formData.captchaAnswer,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro desconhecido");
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
        captchaAnswer: "",
      });
    } catch (error: unknown) {
      // Verifica se o erro tem a propriedade message
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";

      setFormStatus({
        success: false,
        message: `Erro ao submeter o formulário: ${errorMessage}`,
      });
      console.error("Erro ao submeter o formulário:", errorMessage);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-40] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
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
                Número de telefone
              </label>
              <div className="mt-2.5">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(XX) XXXX-XXXX"
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
                htmlFor="captchaAnswer"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                {captcha.question}
              </label>
              <div className="mt-2.5">
                <input
                  id="captchaAnswer"
                  name="captchaAnswer"
                  type="text"
                  value={formData.captchaAnswer}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-500 px-6 py-3 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Enviar
            </button>
          </div>
        </form>
        {formStatus && (
          <div className="mt-4 text-center">
            <p
              className={formStatus.success ? "text-green-600" : "text-red-600"}
            >
              {formStatus.message}
            </p>
          </div>
        )}
      </div>
      <CustomFooter />
    </div>
  );
}
