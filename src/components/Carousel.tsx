import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "@nextui-org/react";

import { siteConfig } from "@/config/site";

const Carousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex justify-center items-center">
      <button aria-label="Previous" className="p-2" onClick={scrollPrev}>
        <svg
          className="w-8 h-8 text-content1-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19l-7-7 7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div ref={emblaRef} className="overflow-hidden w-full max-w-3xl">
        <div className="flex">
          {siteConfig.carouselItems.map((slide, index) => (
            <div
              key={index}
              className="w-full flex flex-shrink-0 justify-center"
            >
              <Link href={slide.href}>
                <img
                  alt={`Slide ${slide.label}`}
                  className="object-contain w-full h-64"
                  src={slide.src}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button aria-label="Next" className="p-2" onClick={scrollNext}>
        <svg
          className="w-8 h-8 text-content1-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
