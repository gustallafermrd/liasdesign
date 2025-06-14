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

const carouselOptions = {
  loop: true,
  align: 'center',
  skipSnaps: false,
  dragFree: true,
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <section id="servicios">
        <OffersSection />
      </section>
      <FinancilaFreedom />
      <FinancialFuture />
      <Carousel options={carouselOptions} autoplay autoplayInterval={3000} >
        <img src="images/big_banner.png" alt="Slide 1" />
        <img src="images/big_banner-original.png" alt="Slide 2" />
        <img src="images/big_banner.png" alt="Slide 3" />
      </Carousel>
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
