import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaBuilding, FaUsers, FaNetworkWired, FaHandshake, FaHeadset } from 'react-icons/fa';
import CompanyStory from '../components/about/CompanyStory';
import TeamSection from '../components/about/TeamSection';

const carouselSlides = [
  {
    title: 'Our Office',
    subtitle: 'Where ideas take shape',
    icon: FaBuilding,
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Team at Work',
    subtitle: 'Collaboration in action',
    icon: FaUsers,
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    title: 'Network Operations Center',
    subtitle: 'Monitoring 24/7',
    icon: FaNetworkWired,
    gradient: 'from-emerald-600 to-teal-500',
  },
  {
    title: 'Community Event',
    subtitle: 'Connecting with our users',
    icon: FaHandshake,
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Customer Support Team',
    subtitle: 'Always here for you',
    icon: FaHeadset,
    gradient: 'from-rose-600 to-red-500',
  },
];

export default function About() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <section className="page-header">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">About Us</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Learn about our journey, our mission, and the team that makes it all happen.
          </p>
        </div>
      </section>
      <CompanyStory />

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] text-center mb-4">Life at Skynet</h2>
          <p className="text-[var(--text-secondary)] text-center mb-10 max-w-2xl mx-auto">A glimpse into our workspace, team, and the community we serve.</p>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            loop
            className="image-carousel"
          >
            {carouselSlides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${slide.gradient} flex flex-col items-center justify-center p-8`}>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, white 1px, transparent 1px), radial-gradient(circle at 70% 30%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <slide.icon className="text-white text-3xl" />
                    </div>
                    <p className="text-white font-bold text-lg">{slide.title}</p>
                    <p className="text-white/60 text-sm">{slide.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <TeamSection />
    </motion.main>
  );
}
