/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "flowbite.s3.amazonaws.com",
      "tailwindui.com",
      "backendnodemailer.vercel.app",
      "backendnodemailer-git-main-marcos-projects-83aa3827.vercel.app",
      "localhost", // Adicionado para suportar imagens do Strapi
      "cms-trapi-kisite-app.onrender.com", // Adicionei o novo hostname aqui
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
