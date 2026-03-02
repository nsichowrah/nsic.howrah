import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ImageCarousel({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) {
    return null;
  }

  const goToSlide = (index) => {
    const nextIndex = (index + slides.length) % slides.length;
    setActiveIndex(nextIndex);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      <div className="relative h-[260px] sm:h-[360px] lg:h-[460px]">
        {slides.map((slide, index) => (
          <article
            key={`${slide.title}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 z-10 p-5 text-white sm:p-8">
              <p className="text-xl font-bold sm:text-3xl">{slide.title}</p>
              <p className="mt-2 max-w-2xl text-sm text-slate-100 sm:text-base">{slide.caption}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 items-center justify-between px-3 sm:px-5">
        <button
          type="button"
          onClick={() => goToSlide(activeIndex - 1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-700 backdrop-blur transition hover:bg-white"
          aria-label="Previous slide"
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-700 backdrop-blur transition hover:bg-white"
          aria-label="Next slide"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-7 bg-white" : "w-2.5 bg-white/60 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageCarousel;
