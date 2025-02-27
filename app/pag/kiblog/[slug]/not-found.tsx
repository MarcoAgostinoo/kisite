export default function NotFound() {
  return (
    <div className="bg-gray-50 pt-56 dark:bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-primaryBlue dark:text-white mb-4">
          Artigo não encontrado
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          O artigo que você está procurando não existe ou foi removido.
        </p>
      </div>
    </div>
  );
}