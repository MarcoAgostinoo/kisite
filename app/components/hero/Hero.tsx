import { Button } from "flowbite-react";

export default function Hero() {
  return (
    <section className="mt-24 flex w-full flex-col items-center justify-center px-4 text-center sm:px-8">
      <div className="flex items-center space-y-4">
        <Button className="rounded-full" gradientDuoTone="purpleToPink">
          New
        </Button>
        <p className="max-w-lg text-lg sm:text-xl md:text-2xl">
          We have launched over 100 blocks in E-commerce UI! See whats new
        </p>
      </div>
      <div className="m-5 sm:ml-8 sm:mr-8 md:ml-20 md:mr-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl">
          Build websites even faster with components on top of Tailwind CSS
        </h1>
      </div>
      <div className="m-5 sm:ml-8 sm:mr-8 md:ml-20 md:mr-20">
        <h3 className="text-lg sm:text-xl md:text-2xl">
          Start developing with an open-source library of over 600+ UI
          components, sections, and pages built with the utility classes from
          Tailwind CSS and designed in Figma.
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button color="blue">Blue</Button>
        <Button outline gradientDuoTone="greenToBlue">
          Green to Blue
        </Button>
      </div>
    </section>
  );
}
