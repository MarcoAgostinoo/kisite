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
            <FlowbiteFooter.Link href="/pag/sobre">Sobre</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="/pag/politica-de-privacidade">Política de Privacidade</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="/pag/licencas">Licenças</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="/pag/contato">Contato</FlowbiteFooter.Link>
          </FlowbiteFooter.LinkGroup>
        </div>
        <FlowbiteFooter.Divider />
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z"/>
            </svg>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.719-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.457 0 1.69.861 3.179 2.169 4.055-.8-.026-1.554-.245-2.213-.612v.061c0 2.362 1.679 4.337 3.911 4.779-.409.111-.84.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.79-.023-1.175-.067 2.179 1.396 4.768 2.209 7.557 2.209 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.633.961-.695 1.8-1.562 2.46-2.549z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.059-2.563.334-3.535 1.306-.972.972-1.247 2.254-1.306 3.535-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.281.334 2.563 1.306 3.535.972.972 2.254 1.247 3.535 1.306 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.563-.334 3.535-1.306.972-.972 1.247-2.254 1.306-3.535.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.334-2.563-1.306-3.535-.972-.972-2.254-1.247-3.535-1.306-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
            </svg>
          </a>
        </div>
        <FlowbiteFooter.Divider />
        <FlowbiteFooter.Copyright href="/" by="KiSite" year={2025} />
      </div>
    </FlowbiteFooter>
  );
}
