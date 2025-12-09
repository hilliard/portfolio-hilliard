import Link from "next/link";
import Image from "next/image";

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface PortfolioGridProps {
  title: string;
  subtitle: string;
  id: string;
  items: PortfolioItem[];
}

export default function PortfolioGrid({ title, subtitle, id, items }: PortfolioGridProps) {
  return (
    <section className="my-work bg-dark text-light text-center py-20 px-8" id={id}>
      <h2 className="section__title section__title--work text-4xl md:text-6xl mb-5">{title}</h2>
      <p className="section__subtitle section__subtitle--work text-accent font-bold mb-8 text-xl md:text-2xl">
        {subtitle}
      </p>

      <div className="portfolio grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))]">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="portfolio__item bg-accent overflow-hidden focus:relative focus:z-10 group"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={480}
              height={300}
              className="portfolio__img block max-w-full transition-transform duration-750 ease-[cubic-bezier(0.5,0,0.5,1)] opacity-100 group-hover:scale-120 group-hover:opacity-50 group-focus:scale-120 group-focus:opacity-50 w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
