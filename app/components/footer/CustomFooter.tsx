 import { Footer as FlowbiteFooter } from "flowbite-react";

export default function CustomFooter() {
  return (
    <FlowbiteFooter container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Brand
            href="/"
            src="/logo.png"
            alt="KiSite Logo"
            name="KiSite"
          />
          <FlowbiteFooter.LinkGroup>
            <FlowbiteFooter.Link href="#">Sobre</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Politica de Privacidade</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Licenças</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="/pag/contato">Contato</FlowbiteFooter.Link>
          </FlowbiteFooter.LinkGroup>
        </div>
        <FlowbiteFooter.Divider />
        <FlowbiteFooter.Copyright href="/" by="KiSite" year={2022} />
      </div>
    </FlowbiteFooter>
  );
}
