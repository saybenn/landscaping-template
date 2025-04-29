import { siteConfig } from "../siteConfig";

export default function Footer() {
  const { name, tagline, hours, social } = siteConfig;

  return (
    <footer className="bg-[var(--color-text)] text-[var(--color-background)] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-[var(--color-accent)]">{tagline}</p>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} {name}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Hours</h4>
          <p>Mon–Fri: {hours.monFri}</p>
          <p>Sat: {hours.sat}</p>
          <p>Sun: {hours.sun}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect</h4>
          <p>
            <a
              href={social.website}
              className="hover:underline transition-all hover:text-[var(--color-accent)]"
            >
              Website
            </a>
          </p>
          <p>
            <a
              href={social.facebook}
              className="hover:underline transition-all hover:text-[var(--color-accent)]"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              href={social.instagram}
              className="hover:underline transition-all hover:text-[var(--color-accent)]"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

