'use client';

import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  
} from '@/components';
import { Carousel } from '@/components/UI/Carousel';
import { useIsMobile } from '../../../libs/useIsMobile';

const carouselOptions = {
  loop: true,
  align: 'center',
  skipSnaps: false,
  dragFree: true,
}

export default function Home() {

  const isMobile = useIsMobile();

  const desktopImages = [
    "images/slider-1.webp",
    "images/slider-2.webp",
    "images/slider-3.webp",
    "images/slider-4.webp",
    "images/slider-5.webp",
    "images/slider-6.webp",
  ];

  const mobileImages = [
    "images/slider-sm-1.webp",
    "images/slider-sm-2.webp",
    "images/slider-sm-3.webp",
    "images/slider-sm-4.webp",
    "images/slider-sm-5.webp",
    "images/slider-sm-6.webp",
  ];
  return (
    <main>
      <HeroSection />
      <Featured />
      <section id="servicio">
        <OffersSection />
      </section>
      <FinancilaFreedom />
      <FinancialFuture />
      <section id="trabajo">
        <Carousel options={carouselOptions} autoplay autoplayInterval={3000} >
          {(isMobile ? mobileImages : desktopImages).map((src, idx) => (
            <img src={src} alt={`Slide ${idx + 1}`} key={src} style={{width: "100%", objectFit: "contain", display: "block",}}/>
          ))}
        </Carousel>
      </section>
      <section id="equipo">
        <IntroSection />
      </section>
      <JoinSection />
      <section id="faq">
        <FAQ />
      </section>
    </main>
  );
}
