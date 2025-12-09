import Image from "next/image";

export default function About() {
  return (
    <section className="about-me max-w-[1000px] mx-auto py-20 px-8 md:grid md:grid-cols-[1fr_200px] md:gap-x-8" id="about">
      <h2 className="section__title section__title--about text-accent text-4xl md:text-6xl mb-5 md:col-start-1 md:row-start-1">
        Who I am
      </h2>
      <p className="section__subtitle section__subtitle--about bg-accent font-mono mb-4 px-4 py-1 text-xl md:text-2xl md:col-start-1 md:col-end-[-1] md:row-start-2 md:relative md:-left-4 md:w-[calc(100%+2em)] md:pl-4 md:pr-[calc(200px+4em)]">
        Problem Solver located in Westminster, CO
      </p>

      <div className="about-me__body md:col-start-1 md:row-start-3">
        <p className="mb-4">
          I am a person with a wide range of knowledge and experience, bridging the gap between diverse disciplines. As a problem-solver, I have the ability to dissect complex challenges, identifying root causes and devise innovative, multi-faceted solutions. My foundation as a Hardware Engineer gives me a deep understanding of physical systems, circuits, and components, allowing me to envision tangible solutions and troubleshoot at the most fundamental level. Complementing this, my expertise as a Software Engineer enables me to build the intelligent systems, algorithms, and applications that bring hardware to life, seamlessly integrating the digital with the physical. Along with the technical skils, entrepreneurial spirit drives me to identify market gaps, develop viable products, and navigate the complexities of launching and growing a venture. My role as a Quality Control Specialist instills a meticulous attention to detail and a relentless pursuit of perfection, ensuring that every product or solution we create is not only innovative and functional but also robust, reliable, and valuable.
        </p>
      </div>

      <div className="about-me__img relative z-10 shadow-[0.25em_0.25em_0.75em_rgba(0,0,0,0.25),0.125em_0.125em_0.25em_rgba(0,0,0,0.15)] md:col-start-2 md:row-start-1 md:row-end-4">
        <Image
          src="/img/Hilliard-Repelling-3rd-Flatiiron-480.jpg"
          alt="Hilliard"
          width={480}
          height={600}
          className="block max-w-full"
        />
      </div>
    </section>
  );
}
