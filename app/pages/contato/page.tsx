"use client";
import { useState } from "react";
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
  });
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL; // A URL para a API do backend na Vercel
    console.log(`Enviando para: ${apiUrl}/send`);

    try {
      const response = await fetch(`${apiUrl}/api/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      setFormStatus({
        success: false,
        message: `Erro ao submeter o formulário: ${error.message}`,
      });
      console.error("Erro ao submeter o formulário:", error.message);
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
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-4 py-3 text-lg font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
              >
                Enviar mensagem
              </button>
            </div>
          </div>
        </form>

        {/* Exibir o status de envio */}
        {formStatus && (
          <div
            className={`mt-6 text-center text-lg font-semibold ${formStatus.success ? "text-green-600" : "text-red-600"}`}
          >
            {formStatus.message}
          </div>
        )}
      </div>
      <CustomFooter />
    </div>
  );
}
