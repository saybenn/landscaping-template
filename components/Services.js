"use client"; // If you use Next.js 13 app router

import Image from "next/image";
import { siteConfig } from "../siteConfig";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="services"
      className="py-20 bg-[var(--color-text)] text-[var(--color-accent)] md:text-[var(--color-background)]"
    >
      <h2 className="text-5xl   font-semibold mb-4 text-center md:mb-16 text-white">
        Our <span className="text-[var(--color-accent)]">Services</span>
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col gap-24 px-6">
        {siteConfig.services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-stretch relative`}
              data-aos={isEven ? "fade-right" : "fade-left"}
            >
              {/* Text Block for Desktop */}
              <div className="md:h-[450px] hidden md:flex w-full md:w-1/2 flex-col justify-end">
                <div className="flex flex-col h-full justify-between pb-0 ">
                  {/* Service Name */}
                  <h3
                    className={`flex items-center h-full text-4xl md:text-5xl font-extrabold] text-[var(--color-accent)] font-bold italic w-full ${
                      isEven ? "text-left" : "text-right flex-row-reverse"
                    } `}
                  >
                    {service.title}
                  </h3>

                  {/* Description Card */}
                  <div
                    className={`bg-[var(--color-surface)]/80 text-text p-8 shadow-lg ${
                      isEven
                        ? "text-left rounded-l-2xl rounded-r-none"
                        : "text-right rounded-r-2xl rounded-l-none"
                    } flex items-center h-[300px] md:h-[350px]`}
                  >
                    <p className="text-xl leading-relaxed text-[var(--color-text)]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-80 md:h-[450px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover ${
                    isEven
                      ? "rounded-2xl md:rounded-l-none"
                      : "rounded-2xl  md:rounded-r-none "
                  }`}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-aos="zoom-in"
                />

                {/* Text overlay for Mobile */}
                <div
                  data-aos="zoom-in"
                  className="md:hidden absolute inset-0 flex flex-col justify-center items-center bg-black/70  rounded-2xl text-center p-6"
                >
                  <h3 className="text-3xl font-extrabold text-[var(--color-secondary) mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base text-white leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

