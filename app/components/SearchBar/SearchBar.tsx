"use client"; // Este componente é renderizado no cliente porque usa React state

import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void; // Função de callback para enviar o valor da busca para o pai
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value); // Passa o valor atualizado para o componente pai
  };

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Pesquisar artigos..."
        value={searchQuery}
        onChange={handleInputChange}
        className="w-3/4 p-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-secondaryBlue"
      />
    </div>
  );
};

export default SearchBar;