export const metadata = {
  title: 'Lias Design | Diseño y Marketing',
  description: 'Estudio creativo de Mizrrain Lias en Minnesota. Diseño, marketing y branding para tu empresa.',
  openGraph: {
    title: 'Lias Design',
    description: 'Hacemos tus diseños realidad.',
  },
};

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
      <section id="servicio">
        <OffersSection />
      </section>
      <FinancilaFreedom />
      <FinancialFuture />
      <section id="trabajo">
        <Carousel options={carouselOptions} autoplay autoplayInterval={3000} >
          <img src="images/big_banner.png" alt="Slide 1" />
          <img src="images/big_banner-original.png" alt="Slide 2" />
          <img src="images/big_banner.png" alt="Slide 3" />
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
