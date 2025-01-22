import Image from 'next/image';

export default function Homemdigitando () {
  return (
    <div>
        <Image
          src="/Designsemnome.gif"
          alt="Webinho Coração"
          width={270}
          height={270}
          className="mr-0 mt-6 lg:mt-0  lg:mr-16 object-contain"
          priority={true}
        />
    </div>
  );
}
