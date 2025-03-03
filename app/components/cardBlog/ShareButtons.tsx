'use client';

import { FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  };

  return (
    <div className="flex space-x-4">
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-400"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600"
      >
        <FaFacebook size={20} />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-700"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-green-500"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
}