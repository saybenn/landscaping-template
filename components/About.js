import Image from "next/image";
import { siteConfig } from "../siteConfig";

export default function About() {
  const { heading, text, quote, image } = siteConfig.about;
  return (
    <section
      id="about"
      className="py-20 px-6 bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="lg:text-5xl text-4xl font-semibold mb-4">
            {heading.before}{" "}
            <span className="text-[var(--color-accent)]">
              {heading.highlight}
            </span>
          </h2>
          <p className="mb-6 text-xl">{text}</p>
          <blockquote className="italic text-[var(--color-muted)] border-l-4 border-accent pl-4 text-lg">
            {quote}
          </blockquote>
        </div>
        <div className="w-full h-80 relative">
          <Image
            src={image}
            alt="About Evergreen"
            fill
            className="object-cover rounded-2xl shadow-md"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}

