import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FiStar } from 'react-icons/fi'
import { testimonials } from '../data/siteData'

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="section-tag">Testimonials</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-white mb-4">What Our Travelers Say</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Real experiences from real adventurers who explored with ASTRAROAM
          </p>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-16 [&_.swiper-pagination]:!relative [&_.swiper-pagination]:!mt-8 [&_.swiper-pagination-bullet]:!bg-white/30 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!w-2.5 [&_.swiper-pagination-bullet]:!h-2.5 [&_.swiper-pagination-bullet-active]:!bg-accent [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet-active]:!rounded-[5px]"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="glass-card h-full flex flex-col p-8">
                <div className="flex gap-1 mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FiStar
                        key={i}
                        className={i < t.rating ? 'text-gold fill-gold' : 'text-white/20'}
                      />
                    ))}
                </div>
                <p className="text-white/80 text-[0.95rem] leading-relaxed italic flex-1 mb-6">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-heading font-bold text-sm text-white shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-white text-[0.95rem] mb-0.5">{t.name}</h4>
                    <span className="text-white/50 text-xs">{t.location} • {t.trek}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
