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
      "cms-trapi-kisite-app.onrender.com",
      "https://cms-trapi-kisite-app.onrender.com",
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
