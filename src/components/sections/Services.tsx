export default function Services() {
  return (
    <section
      className="my-services bg-dark text-light text-center py-20 px-8 bg-cover bg-center bg-no-repeat"
      id="services"
      style={{ backgroundImage: "url(/img/services-bg.jpg)" }}
    >
      <h2 className="section__title section__title--services text-accent relative text-4xl md:text-6xl mb-5 after:content-[''] after:block after:w-8 after:h-[1px] after:mx-auto after:my-4 after:bg-light after:opacity-25">
        What I Do
      </h2>
      <div className="services max-w-[1000px] mx-auto md:flex md:justify-between">
        <div className="service max-w-[500px] mx-auto md:mx-0 md:ml-8 first:ml-0">
          <h3 className="text-xl md:text-2xl mb-5 font-bold">Engineer / Entrepreneur</h3>
          <p className="mb-4">
            As an Electrical Engineer, I have designed and built power supplies for the Space Shuttle for NASA, a Nuclear Submarine for the Navy, and a Black Ops Helicopter for the Air Force. As a Software Engineer. I have designed and built problem-tracking software, data backup software, engineering configuration management, and build tools. As an Entrepreneur, I have co-founded Datasonix Inc., Benchmark Tape Systems, and Rebit Incorporated, and founded GoldTending Incorporated. My intention is to think and live differently, and my goal is to add value wherever I go.
          </p>
        </div>
        <div className="service max-w-[500px] mx-auto md:mx-0 md:ml-8">
          <h3 className="text-xl md:text-2xl mb-5 font-bold">Coach / Player</h3>
          <p className="mb-4">
            I am a seasoned hockey veteran with over two decades dedicated to coaching, culminating in an impressive record that includes an International Silver Stick Championship, a Bantam A State Championship, and a Golden High School Championship, along with instrumental support in coaching the CU Women&apos;s team to Nationals. Beyond my strategic oversight as a Hockey Coach, I possess specialized expertise as a Goalie Coach, deeply understanding the nuanced demands of the position. Despite having many coaching achievements, my passion for the game remains in tact. As a veteran, reliable Beer League goalie, I embrace the camaraderie and pure enjoyment that comes from playing the game I love.
          </p>
        </div>
        <div className="service max-w-[500px] mx-auto md:mx-0 md:ml-8">
          <h3 className="text-xl md:text-2xl mb-5 font-bold">Musician</h3>
          <p className="mb-4">
            I am a dedicated bass player deeply rooted in the local music scene, consistently lending my rhythmic foundation to various bands. My primary focus isn&apos;t on flashy solos, but on expertly supporting the song, understanding that the groove and harmony are the backbone of any great performance. This commitment to the music&apos;s core is further amplified by the fact that I cutom built the bass I play, a testament to my passion for the instrument and my hands-on approach to my craft. Above all, I thrive on the energy of live performances, finding immense joy in creating unique moments and lasting memories for both the audience and my fellow bandmates through the power of music.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <a
          href="#work"
          className="btn inline-block py-2 px-10 bg-accent text-dark no-underline cursor-pointer text-sm uppercase tracking-[2px] font-black transition-transform duration-200 ease-in-out hover:scale-110 mr-4"
        >
          My Work
        </a>
        <a
          href="#play"
          className="btn inline-block py-2 px-10 bg-accent text-dark no-underline cursor-pointer text-sm uppercase tracking-[2px] font-black transition-transform duration-200 ease-in-out hover:scale-110"
        >
          My Play
        </a>
      </div>
    </section>
  );
}
