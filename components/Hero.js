import Image from "next/image";
import { siteConfig } from "../siteConfig";

export default function Hero() {
  const { heading, subheading, backgroundImage } = siteConfig.hero;
  return (
    <section className="relative w-full lg:h-[85vh] md:h-[50vh] flex items-center justify-center bg-black text-white overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Landscaping hero background"
        fill
        className="object-cover opacity-70"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          {heading.before}{" "}
          <span className="text-[var(--color-accent)]">
            {heading.highlight}
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl">{subheading}</p>
        <a
          href={siteConfig.callToAction.href}
          className="inline-block mt-6 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg shadow-md hover:cursor-pointer hover:bg-[var(--color-primary)]/80 transition"
        >
          {siteConfig.callToAction.label}
        </a>
      </div>
    </section>
  );
}

