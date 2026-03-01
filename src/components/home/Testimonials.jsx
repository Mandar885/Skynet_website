import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <SectionHeading title="What Our Customers Say" subtitle="Don't just take our word for it — hear from our satisfied customers." />
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl border border-[var(--border-color)] card-shadow h-full"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >
                <FaQuoteLeft className="text-2xl mb-4" style={{ color: 'var(--color-primary)', opacity: 0.3 }} />
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">"{t.review}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] text-sm">{t.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">{t.location}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={12} className={i < t.rating ? 'text-amber-400' : 'text-gray-300'} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
