'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
  // Estado para controlar a imagem principal e as informações
  const [mainImage, setMainImage] = useState('/texte01.jpg');
  const [title, setTitle] = useState('Imagem Principal');
  const [subtitle, setSubtitle] = useState('Subtítulo da Imagem');
  const [description, setDescription] = useState('Aqui está a descrição da imagem principal.');
  const [buttonLink, setButtonLink] = useState('/link-para-imagem-principal');

  // Função para atualizar a imagem e as informações quando uma imagem pequena for clicada
  const handleImageClick = (
    src: string, 
    newTitle: string, 
    newSubtitle: string, 
    newDescription: string, 
    newLink: string
  ) => {
    setMainImage(src);
    setTitle(newTitle);
    setSubtitle(newSubtitle);
    setDescription(newDescription);
    setButtonLink(newLink);
  };
  

  return (
    <div className="grid gap-4 m-">
      {/* Imagem Principal e Descrição */}
      <div className="flex justify-center items-center mb-8">
        <div className="w-1/2">
          <Image 
            className="h-auto max-w-full rounded-lg" 
            src={mainImage} 
            alt="Imagem principal" 
            width={500}
            height={300} 
          />
        </div>
        <div className="w-1/2 pl-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <h3 className="text-lg text-gray-600">{subtitle}</h3>
          <p className="mt-4 text-gray-700">{description}</p>
          <Link href={buttonLink}>
            <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition">
              Saiba Mais
            </button>
          </Link>
        </div>
      </div>

      {/* 5 Divs Independentes para a Galeria de Imagens */}
      <div className="grid grid-cols-5 gap-4">
        <div className="text-center">
          <div 
            className="cursor-pointer" 
            onClick={() => handleImageClick('/texte01.jpg', 'Imagem 1', 'Subtítulo 1', 'Descrição detalhada da imagem 1', '/link-para-imagem-1')}
          >
            <Image 
              className="h-auto max-w-full rounded-lg"
              src="/teste01.jpg"
              alt="Imagem 1"
              width={200}
              height={200}
            />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">Imagem 1</h3>
          <p className="text-gray-600">Subtítulo 1</p>
        </div>

        <div className="text-center">
          <div 
            className="cursor-pointer" 
            onClick={() => handleImageClick('/texte02.jpg', 'Imagem 2', 'Subtítulo 2', 'Descrição detalhada da imagem 2', '/link-para-imagem-2')}
          >
            <Image 
              className="h-auto max-w-full rounded-lg"
              src="/teste02.jpg"
              alt="Imagem 2"
              width={200}
              height={200}
            />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">Imagem 2</h3>
          <p className="text-gray-600">Subtítulo 2</p>
        </div>

        <div className="text-center">
          <div 
            className="cursor-pointer" 
            onClick={() => handleImageClick('/texte03.jpg', 'Imagem 3', 'Subtítulo 3', 'Descrição detalhada da imagem 3', '/link-para-imagem-3')}
          >
            <Image 
              className="h-auto max-w-full rounded-lg"
              src="/texte03.jpg"
              alt="Imagem 3"
              width={200}
              height={200}
            />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">Imagem 3</h3>
          <p className="text-gray-600">Subtítulo 3</p>
        </div>

        <div className="text-center">
          <div 
            className="cursor-pointer" 
            onClick={() => handleImageClick('/texte04.jpg', 'Imagem 4', 'Subtítulo 4', 'Descrição detalhada da imagem 4', '/link-para-imagem-4')}
          >
            <Image 
              className="h-auto max-w-full rounded-lg"
              src="/logo.png"
              alt="Imagem 4"
              width={200}
              height={200}
            />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">Imagem 4</h3>
          <p className="text-gray-600">Subtítulo 4</p>
        </div>

        <div className="text-center">
          <div 
            className="cursor-pointer" 
            onClick={() => handleImageClick('/texte05.jpg', 'Imagem 5', 'Subtítulo 5', 'Descrição detalhada da imagem 5', '/link-para-imagem-5')}
          >
            <Image 
              className="h-auto max-w-full rounded-lg"
              src="/texte05.jpg"
              alt="Imagem 5"
              width={200}
              height={200}
            />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-gray-800">Imagem 5</h3>
          <p className="text-gray-600">Subtítulo 5</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
