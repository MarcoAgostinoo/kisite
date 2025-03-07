import Link from "next/link";

const FourPillars = () => {
  return (
    <div className="py-12 px-4" style={{ backgroundImage: "url('/index/backgroundSection.jpg')" }}>
      {/* Título Principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-primaryBlue text-center mb-12">
        4 Pilares Essenciais para Sites de Alta Performance
      </h2>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <Link href="/design" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-secondaryBlue mb-2">Design Atraente</h3>
            <img 
              src="/blog/design.jpg" 
              alt="Design Profissional" 
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className="text-neutralGray text-sm mb-4">
              Layout responsivo e visualmente impactante que <strong>converte visitantes em clientes</strong>.
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/conteudo" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-secondaryBlue mb-2">Conteúdo Relevante</h3>
            <img 
              src="/blog/conteudo.jpg" 
              alt="Conteúdo de Qualidade" 
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className="text-neutralGray text-sm mb-4">
              Textos otimizados para SEO que <strong>posicionam sua marca no topo dos resultados</strong>.
            </p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link href="/ux" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-secondaryBlue mb-2">Experiência do Usuário</h3>
            <img 
              src="/blog/ux.jpg" 
              alt="User Experience" 
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className="text-neutralGray text-sm mb-4">
              Navegação intuitiva que <strong>reduz taxas de rejeição em até 40%</strong>.
            </p>
          </div>
        </Link>

        {/* Card 4 */}
        <Link href="/conversao" className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-secondaryBlue mb-2">Elementos de Conversão</h3>
            <img 
              src="/blog/conversao.jpg" 
              alt="Call to Action" 
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className="text-neutralGray text-sm mb-4">
              CTAs estratégicos que <strong>aumentam taxas de conversão em 30%+</strong>.
            </p>
          </div>
        </Link>
      </div>

      {/* Chamada para Ação */}
      <div className="max-w-4xl mx-auto mt-12 text-center px-4">
        <p className="text-lg text-deepBlack font-medium mb-6">
          Quer implementar esses pilares em seu projeto? Nossa equipe especializada cria soluções sob medida para alavancar seus resultados!
        </p>
        <Link href="/contato">
          <button className="bg-secondaryBlue text-white px-8 py-3 rounded-full hover:bg-subtlePurple transition-colors duration-300 shadow-md">
            Fale com um Especialista
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FourPillars;