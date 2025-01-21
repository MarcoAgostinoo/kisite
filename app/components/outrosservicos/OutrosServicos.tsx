import { Button } from "flowbite-react";
export default function OutrosServicos() {
  return (
    <div className="flex mt-6 w-auto text-white bg-myCustomBlue  flex-col lg:flex-row items-center align-middle justify-center p-4    gap-10">
      <div className="flex-col w-full lg:w-1/2 p-10 border-r-2">
        <h2 className="text-white text-3xl font-bold">DESENVOLVIMENTO DE SITES</h2>
        <p>
          Sem um site profissional sua empresa é invisível para milhares de
          pessoas que buscam pelo seu serviço todos os dias no Google. Você
          poderá contratar um site por assinatura mensal ou um site de pagamento
          único, mas independente da sua escolha, o site sempre será sua base
          para qualquer estratégia de marketing digital.
        </p> <br />
        <p>
          Na UpSites, focamos exclusivamente no desenvolvimento de websites e
          consultoria em SEO. Desde 2016 criamos mais de 150 sites por ano, e
          além de sites bonitos, fazemos sites que posicionam na 1ª página do
          Google e oferecem a melhor experiência possível para os usuários.
        </p><br />
        <p>
          Chegou a hora de elevar a presença online da sua empresa. Invista na
          criação de um site profissional para sua empresa e transforme-o em uma
          poderosa ferramenta de vendas e marketing.
        </p><br />
      </div>

      <div  className="flex-col w-full lg:w-1/2 pl-10 pr-10 lg:p-4 mt-[-40px] lg:mt-[0px]">
        <p className="text-amber-400">AGÊNCIA DE CRIAÇÃO DE SITES</p>
        <br />
        <h2 className="text-white text-white text-3xl font-bold">EMPRESA DE CRIAÇÃO DE SITES</h2>
        <ul className="ml-4 list-disc">
          <li>Estratégias para atrair mais visitantes para seu site</li>
          <li>Site otimizado para posicionamento no Google</li>
          <li>Criação de Conteúdo para Site</li>
          <li>Consultoria de SEO</li>
          <li>Suporte e manutenção de site</li>
          <li>Ferramenta moderna de edição de layout</li>
          <li>Vídeos tutoriais para gestão do site</li>
        </ul>
        <Button className="mt-4 w-40 lg:mt-10" href="/" gradientDuoTone="greenToBlue">Green to Blue</Button>
      </div>
    </div>
  );
}
