/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "flowbite.s3.amazonaws.com",
      "tailwindui.com",
      "backendnodemailer.vercel.app",
      "backendnodemailer-git-main-marcos-projects-83aa3827.vercel.app",
      "localhost",
      "cms-kisite-production.up.railway.app",
    ],
    remotePatterns: [
      {
        protocol: "https", // Atualizado para HTTPS
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https", // Adicionado para HTTPS
        hostname: "cms-kisite-production.up.railway.app",
      },
    ],
  },
};

export default nextConfig;
