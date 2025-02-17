import GridColumTree from "../gridcolumtree/GridColumTree";
import Heroteste from "../heroteste/Heroteste";

export default function HeroHomeContainer() {
  return (
    <div className="mt-12">
      <div
        className="relative"
        style={{
          background: "linear-gradient(transparent 50%, #002b55 50%)", // Gradiente: metade superior transparente, metade inferior com a cor #002b55
        }}
      >
        <div className="w-full flex flex-col lg:flex-row items-center  justify-center align-middle lg:justify-around gap-10">
          <div className="h-64 w-4/5 lg:w-1/3  rounded-lg bg-white">
            <h3>testeste1</h3>
          </div>
          <div className="h-64 w-4/5 lg:w-1/3 rounded-lg bg-white">
            <h3>testeste2</h3>
          </div>
          <div className="h-64 w-4/5 lg:w-1/3 rounded-lg bg-white">
            <h3>testeste3</h3>
          </div>
        </div>
      </div>
      <div className=" bg-[#002b55] pb-6 pt-12">
        <div className="p-4">
          <h2 className="mt-9 text-center text-3xl font-semibold text-gray-100">
            Soluções Digitais para Alavancar Seu Negócio
          </h2>
        </div>
        <div>
          <Heroteste />
          <GridColumTree />
        </div>
      </div>
    </div>
  );
}
