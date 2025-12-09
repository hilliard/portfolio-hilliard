import { allItems } from "@/data/portfolio";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function PortfolioItem({ params }: PageProps) {
  const { slug } = await params;
  const item = allItems.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="intro relative py-20 px-8 grid grid-cols-1 md:grid-cols-[min-content_max-content] gap-4 w-min mx-auto">
          <h1 className="section__title section__title--intro font-light text-5xl md:text-7xl mb-5 leading-none md:col-start-2 md:self-end">
            {item.jobTitle ? (
              <>
                {item.jobTitle} {item.role && <strong className="block font-black">{item.role}</strong>}
              </>
            ) : (
              <>
                {item.title}
                {item.subtitle && <strong className="block font-black">{item.subtitle}</strong>}
              </>
            )}
          </h1>
          <p className="section__subtitle section__subtitle--intro bg-accent px-4 py-1 font-mono mb-4 text-xl md:text-2xl self-start md:col-start-2 md:row-start-2 md:text-right md:relative md:-left-6 md:w-[calc(100%+1.5em)] inline-block">
            {item.company || item.subtitle}
          </p>
          <div className="intro__img relative z-10 min-w-[250px] shadow-[0.25em_0.25em_0.75em_rgba(0,0,0,0.25),0.125em_0.125em_0.25em_rgba(0,0,0,0.15)] md:col-start-1 md:row-start-1 md:row-end-3">
            <Image
              src={item.introImage || item.image}
              alt={item.title}
              width={480}
              height={600}
              className="block max-w-full"
              priority
            />
          </div>
        </section>

        <div className="portfolio-item-individual max-w-[1000px] mx-auto px-8 pb-20">
          {item.contentTitle && <h3 className="text-2xl font-bold mb-5">{item.contentTitle}</h3>}
          {item.contentImage && (
            <div className="mb-8">
              <Image
                src={item.contentImage}
                alt={item.title}
                width={1000}
                height={600}
                className="w-full h-auto block"
              />
            </div>
          )}
          {item.content &&
            item.content.map((paragraph, index) => (
              <p key={index} className="mb-6 max-w-[1000px] mx-auto">
                {paragraph}
              </p>
            ))}

          {item.skills && (
            <div className="mb-4">
              <strong>Skills: </strong>
              <ul className="list-disc list-inside ml-4 mt-2">
                {item.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {item.technologies && (
            <p className="mb-2">
              <strong>Technologies: </strong> {item.technologies}
            </p>
          )}
          {item.tools && (
            <p className="mb-2">
              <strong>Tools: </strong> {item.tools}
            </p>
          )}
          {item.additionalRoles && (
            <p className="mb-2">
              <strong>Additional Roles: </strong> {item.additionalRoles}
            </p>
          )}
          {item.awards && (
            <p className="mb-2">
              <strong>Awards: </strong> {item.awards}
            </p>
          )}
          {item.exit && (
            <p className="mb-2">
              <strong>Exit: </strong> {item.exit}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
