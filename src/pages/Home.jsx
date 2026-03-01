import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import OTTScrollBar from '../components/home/OTTScrollBar';
import OffersCarousel from '../components/home/OffersCarousel';
import PlansPreview from '../components/home/PlansPreview';
import Testimonials from '../components/home/Testimonials';
import AvailabilityChecker from '../components/home/AvailabilityChecker';

export default function Home() {
  const scrollToAvailability = () => {
    document.getElementById('availability-checker')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <HeroSection onCheckAvailability={scrollToAvailability} />
      <FeaturesSection />
      <OTTScrollBar />
      <OffersCarousel />
      <PlansPreview />
      <Testimonials />
      <AvailabilityChecker />
    </main>
  );
}
