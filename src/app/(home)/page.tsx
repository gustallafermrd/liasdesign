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
      <OffersSection />
      <FinancilaFreedom />
      <FinancialFuture />
      <Carousel options={carouselOptions} autoplay autoplayInterval={3000} >
        <img src="images/big_banner.png" alt="Slide 1" />
        <img src="images/big_banner-original.png" alt="Slide 2" />
        <img src="images/big_banner.png" alt="Slide 3" />
      </Carousel>
      <IntroSection />
      <JoinSection />
      <FAQ />
    </main>
  );
}
