'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Category {
  name: string;
  slug: string;
}

interface CategoryMenuProps {
  categories: Category[];
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories }) => {
  const pathname = usePathname();

  return (
    <div className="ml-8 mt-20 w-full sm:ml-4 sm:mt-10 lg:w-2/12">
      <p className="mb-6 text-xl font-semibold text-secondaryBlue sm:text-lg">
        CATEGORIAS
      </p>
      <Link href="/pag/kiblog" className="block">
        <p className={`mb-4 cursor-pointer text-base font-semibold ${
          pathname === '/pag/kiblog' 
            ? 'text-secondaryBlue' 
            : 'text-gray-500 hover:text-secondaryBlue'
        } sm:text-sm`}>
          Todos
        </p>
      </Link>
      {categories.length > 0 ? (
        categories.map((category) => (
          <Link
            key={category.slug}
            href={`/pag/kiblog/category/${category.slug}`}
            className="block"
          >
            <p className={`mb-4 cursor-pointer text-base font-semibold ${
              pathname === `/pag/kiblog/category/${category.slug}`
                ? 'text-secondaryBlue'
                : 'text-gray-500 hover:text-secondaryBlue'
            } sm:text-sm`}>
              {category.name}
            </p>
          </Link>
        ))
      ) : (
        <p className="text-base text-gray-400 sm:text-sm">
          Nenhuma categoria disponível
        </p>
      )}
    </div>
  );
};

export default CategoryMenu;
