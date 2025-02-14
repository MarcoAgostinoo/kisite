import { Button } from "flowbite-react";
import React from "react";
import ClientOnlyAnimation from "../../apis/hookObserver/ClientOnlyAnimation";

export default function OutrosServicos() {
  return (
    <div className="mt-6 flex flex-col  items-center justify-center gap-10 bg-myCustomBlue p-8">
      <div className="mt-14">
        <p className="animate-pulse text-3xl text-amber-300 text-shadow-amber animate-infinite animate-ease-out lg:mt-0">
          AGÊNCIA DE CRIAÇÃO DE SITES
        </p>
      </div>

      <div className="mt-6 flex w-auto flex-col items-center justify-center gap-10 p-8 align-middle text-white lg:flex-row">
        <div className=" -mt-24 w-full flex-col border-b-2 p-10 lg:w-1/2 lg:border-b-0 lg:border-r-2">
          <h2 className="text-3xl font-bold text-white">
            DESENVOLVIMENTO DE SITES
          </h2>
          <p>
            Sem um site profissional sua empresa é invisível para milhares de
            pessoas que buscam pelo seu serviço todos os dias no Google. Você
            poderá contratar um site por assinatura mensal ou um site de
            pagamento único, mas independente da sua escolha, o site sempre será
            sua base para qualquer estratégia de marketing digital.
          </p>
          <br />
          <p>
            Na UpSites, focamos exclusivamente no desenvolvimento de websites e
            consultoria em SEO. Desde 2016 criamos mais de 150 sites por ano, e
            além de sites bonitos, fazemos sites que posicionam na 1ª página do
            Google e oferecem a melhor experiência possível para os usuários.
          </p>
          <br />
          <p>
            Chegou a hora de elevar a presença online da sua empresa. Invista na
            criação de um site profissional para sua empresa e transforme-o em
            uma poderosa ferramenta de vendas e marketing.
          </p>
          <br />
          {/* Exemplo de animação com jump-in */}
          <ClientOnlyAnimation
            threshold={0.2}
            animationClasses="animate-jump-in"
            animationDelay="0.3s"
          >
            <div>
              <h2 className="text-3xl font-semibold mt-8">
                Texto com animação Jump In
              </h2>
              <p className="text-lg">
                Este texto está animado com o efeito jump in.
              </p>
            </div>
          </ClientOnlyAnimation>
        </div>

        <div className="w-full -mt-28 flex-col pl-10 pr-10 lg:w-1/2 lg:p-4">
          <h2 className="text-3xl font-bold text-white">
            EMPRESA DE CRIAÇÃO DE SITES
          </h2>
          <ul className="ml-4 list-disc">
            <li>Estratégias para atrair mais visitantes para seu site</li>
            <li>Site otimizado para posicionamento no Google</li>
            <li>Criação de Conteúdo para Site</li>
            <li>Consultoria de SEO</li>
            <li>Suporte e manutenção de site</li>
            <li>Ferramenta moderna de edição de layout</li>
            <li>Vídeos tutoriais para gestão do site</li>
            <li>Suporte e manutenção de site</li>
            <li>Ferramenta moderna de edição de layout</li>
            <li>Vídeos tutoriais para gestão do site</li>
            <li>Suporte e manutenção de site</li>
            <li>Ferramenta moderna de edição de layout</li>
          </ul>

          <Button
            className="mt-4 w-40 animate-bounce animate-fill-both animate-twice lg:mt-10"
            href="/"
            gradientDuoTone="greenToBlue"
          >
            Green to Blue
          </Button>

          {/* Exemplo de animação com pulse */}
          <ClientOnlyAnimation
            threshold={0.2}
            animationClasses="animate-pulse"
            animationDelay="0.1s"
          >
            <div>
              <h2 className="text-3xl font-semibold">
                Texto com animação Pulse
              </h2>
              <p className="text-lg">
                Este texto está animado com o efeito pulse.
              </p>
            </div>
          </ClientOnlyAnimation>
        </div>
      </div>
    </div>
  );
}
