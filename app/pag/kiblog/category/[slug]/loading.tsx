import React from "react";
export default function Loading() {
  return (
    <div className="relative bg-custom-bg bg-cover bg-bottom bg-no-repeat">
      {" "}
      <div className="relative z-20">
        {" "}
        <div className="m-4 mt-20 overflow-hidden lg:mt-56">
          {" "}
          <div className="h-12 w-3/4 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />{" "}
        </div>{" "}
        <div className="flex flex-col p-2 lg:flex-row">
          {" "}
          {/* Menu de Categorias Skeleton */}{" "}
          <div className="ml-8 mt-20 w-full sm:ml-4 sm:mt-10 lg:w-2/12">
            {" "}
            <div className="space-y-4">
              {" "}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"
                />
              ))}{" "}
            </div>{" "}
          </div>{" "}
          {/* Grid de Artigos Skeleton */}{" "}
          <div className="m-0 grid w-full grid-cols-1 gap-6 p-10 sm:p-4 md:grid-cols-2 lg:m-8 lg:w-10/12 lg:grid-cols-3">
            {" "}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-80 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            ))}{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
