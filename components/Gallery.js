import Image from "next/image";
import { siteConfig } from "../siteConfig";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-white text-text">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          See the Transformations{" "}
          <span className="text-[var(--color-accent)]">We Create</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto text-[var(--color-muted)] mb-12">
          Witness the difference our landscaping services make. Browse our
          before and after transformations below.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          {siteConfig.gallery.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface rounded-2xl overflow-hidden shadow-md"
            >
              <div className="grid grid-cols-2 gap-0">
                {/* Before Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={item.before}
                    alt="Before Landscaping"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-2 left-2 bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Before
                  </div>
                </div>

                {/* After Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={item.after}
                    alt="After Landscaping"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-2 right-2 bg-[var(--color-accent)] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    After
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

