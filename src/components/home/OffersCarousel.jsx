import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const offers = [
  { id: 1, title: 'New Connection Offer', description: 'Get 1 month FREE on any annual plan. Limited time offer!', gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)', badge: 'HOT DEAL' },
  { id: 2, title: 'Refer & Earn', description: 'Refer a friend and both get ₹500 off on your next bill.', gradient: 'linear-gradient(135deg, #9333ea, #ec4899)', badge: 'POPULAR' },
  { id: 3, title: 'Student Special', description: 'Special discounted plans for students. Just show your ID!', gradient: 'linear-gradient(135deg, #16a34a, #059669)', badge: 'STUDENTS' },
  { id: 4, title: 'Upgrade & Save', description: 'Upgrade your plan and get 20% off for the first 3 months.', gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)', badge: 'SAVE 20%' },
  { id: 5, title: 'Family Bundle', description: 'Connect 2 homes under one account and save 25% on your total bill.', gradient: 'linear-gradient(135deg, #e11d48, #be185d)', badge: 'FAMILY' },
  { id: 6, title: 'Festival Bonanza', description: 'Special festive pricing — get 3 months extra free on yearly plans!', gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)', badge: 'LIMITED' },
];

export default function OffersCarousel() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <SectionHeading title="Special Offers" subtitle="Don't miss out on our exclusive deals and promotions." />
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="pb-14"
        >
          {offers.map((offer) => (
            <SwiperSlide key={offer.id}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative rounded-2xl p-8 text-white min-h-[220px] flex flex-col justify-between overflow-hidden"
                style={{ background: offer.gradient }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm mb-4">{offer.badge}</span>
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{offer.description}</p>
                </div>
                <div className="relative z-10">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="!text-white border border-white/30 hover:!bg-white/20"
                    onClick={() => window.location.href = 'tel:+919876543210'}
                  >
                    Claim Offer
                  </Button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
