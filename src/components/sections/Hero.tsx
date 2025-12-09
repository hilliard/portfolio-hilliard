import Image from "next/image";

export default function Hero() {
  return (
    <section className="intro relative py-20 px-8 grid grid-cols-1 md:grid-cols-[min-content_max-content] gap-4 w-min mx-auto" id="home">
      <div className="intro__img relative z-10 min-w-[250px] shadow-[0.25em_0.25em_0.75em_rgba(0,0,0,0.25),0.125em_0.125em_0.25em_rgba(0,0,0,0.15)] md:col-start-1 md:row-start-1 md:row-end-3">
        <Image
          src="/img/Me-In-Vancouver.jpg"
          alt="a picture of Hilliard Scott"
          width={400}
          height={600}
          className="block max-w-full"
          priority
        />
      </div>
      <h1 className="section__title section__title--intro font-light text-5xl md:text-7xl mb-5 leading-none md:col-start-2 md:self-end">
        Hello, I am <strong className="block font-black">Hilliard M. Scott III</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro bg-accent px-4 py-1 font-mono mb-4 text-xl md:text-2xl self-start md:col-start-2 md:row-start-2 md:text-right md:relative md:-left-6 md:w-[calc(100%+1.5em)] inline-block">
        Problem Solver
      </p>
    </section>
  );
}
