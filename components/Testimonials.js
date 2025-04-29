import Slider from "react-slick";
import { siteConfig } from "../siteConfig";
import { renderStars } from "../utils/helpers";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-white] text-center">
      <h2 className="text-4xl sm:text-4xl font-bold text-[var(--color-text)] mb-12">
        What <span className="text-[var(--color-accent)]">Clients Say</span>
      </h2>

      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {siteConfig.testimonials.map((review, idx) => (
            <div key={idx} className="px-4">
              {" "}
              {/* <-- Add padding here */}
              <div className="p-8 bg-white rounded-2xl shadow-lg text-center flex flex-col items-center">
                {/* Star Rating */}
                <div className="mb-4 flex justify-center">
                  {renderStars(review.rating)}
                </div>

                {/* Quote */}
                <p className="text-lg sm:text-xl text-[var(--color-muted)] italic mb-6">
                  “{review.quote}”
                </p>

                {/* Client Name */}
                <p className="font-semibold text-[var(--color-primary)] text-lg">
                  – {review.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

