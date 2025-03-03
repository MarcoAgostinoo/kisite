/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "flowbite.s3.amazonaws.com",
      "tailwindui.com",
      "backendnodemailer.vercel.app",
      "backendnodemailer-git-main-marcos-projects-83aa3827.vercel.app",
      "cms-kisite-production.up.railway.app",
      "localhost:1337",
      "cdn.rareblocks.xyz" // Adicionando o novo domínio
    ],
    remotePatterns: [
      {
        protocol: "http", // Alterado para HTTP para localhost
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https", // Mantido para HTTPS
        hostname: "cms-kisite-production.up.railway.app",
      },
    ],
  },
};

export default nextConfig;