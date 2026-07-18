import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { FiGlobe, FiUsers, FiPackage, FiHeart, FiShield, FiDollarSign, FiHeadphones, FiArrowRight, FiPlay } from 'react-icons/fi'
import { FaMountain } from 'react-icons/fa'
import Hero from '../components/Hero'
import DestinationCard from '../components/DestinationCard'
import TrekCard from '../components/TrekCard'
import PackageCard from '../components/PackageCard'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import { destinations, treks, packages } from '../data/siteData'

const features = [
  { icon: <FiGlobe />, title: 'Breathtaking Landscapes', desc: 'Discover snow-capped peaks, pristine lakes, ancient villages, and lush valleys across the Himalayas.' },
  { icon: <FiUsers />, title: 'Experienced Guides', desc: 'Certified local experts who know every trail, hidden gem, and secret viewpoint.' },
  { icon: <FiPackage />, title: 'Curated Packages', desc: 'Thoughtfully designed itineraries tailored to your budget, interests, and travel style.' },
  { icon: <FiHeart />, title: 'Seamless Experience', desc: 'From discovery to booking to travel — everything managed in one seamless platform.' },
]

const whyChooseUs = [
  { icon: <FaMountain />, title: 'Expert Guides', desc: 'Local experts with years of Himalayan experience' },
  { icon: <FiShield />, title: 'Safe Travel', desc: 'First aid trained staff and safety protocols' },
  { icon: <FiDollarSign />, title: 'Affordable Prices', desc: 'Premium experiences at competitive rates' },
  { icon: <FiPackage />, title: 'Custom Packages', desc: 'Flexible itineraries for every traveler' },
  { icon: <FiHeadphones />, title: '24x7 Support', desc: 'Round-the-clock assistance during your trip' },
]

const generalFAQs = [
  { q: 'How do I book a trek or package?', a: 'You can book through our website booking page, call us at +91 70185 99060 or +91 98055 56015, or email info@astraroam.com. Our team will confirm your booking within 24 hours.' },
  { q: 'What should I pack for a trek?', a: 'Essentials include sturdy trekking shoes, warm layers, rain gear, sunscreen, water bottle, headlamp, and personal medications. A detailed packing list is shared after booking.' },
  { q: 'Is prior trekking experience required?', a: 'Many of our treks are beginner-friendly. We clearly mention difficulty levels. Our guides ensure everyone completes the trek safely and comfortably.' },
  { q: 'What is the cancellation policy?', a: 'Full refund if cancelled 15+ days before. 50% refund for 7-14 days. No refund within 7 days. We recommend travel insurance for unforeseen circumstances.' },
  { q: 'Are meals included in trek packages?', a: 'Yes, all meals during the trek are included - breakfast, lunch, evening snacks, and dinner. We accommodate dietary requirements with prior notice.' },
]

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card-home', {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.features-grid-home', start: 'top 80%' },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="home-page">
      <Hero />

      {/* Features */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="section-tag">Why ASTRAROAM</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Your Adventure, Our Passion</h2>
            <p className="text-gray text-lg max-w-xl mx-auto">We don't just plan trips. We craft life-changing Himalayan experiences.</p>
          </div>
          <div className="features-grid-home grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {features.map((f, i) => (
              <div key={i} className="feature-card-home text-center p-10 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glass-lg hover:border-transparent" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-2xl text-primary mx-auto mb-5 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:scale-105">
                  {f.icon}
                </div>
                <h3 className="text-lg mb-2.5">{f.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="section-tag">Destinations</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Explore Hidden Gems</h2>
            <p className="text-gray text-lg max-w-xl mx-auto">Discover the most stunning destinations across the Himalayan belt</p>
          </div>
          <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {destinations.slice(0, 4).map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/destinations" className="btn-primary">View All Destinations <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* Treks */}
      <section className="py-24 bg-navy">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="section-tag">Popular Treks</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] text-white mb-4">Trek the Himalayas</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">Handpicked trekking experiences for every level of adventure</p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
            {treks.slice(0, 3).map((t) => (
              <TrekCard key={t.id} trek={t} />
            ))}
          </div>
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/treks" className="btn-accent">Explore All Treks <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="section-tag">Packages</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Curated Travel Packages</h2>
            <p className="text-gray text-lg max-w-xl mx-auto">All-inclusive packages designed for the perfect Himalayan getaway</p>
          </div>
          <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {packages.map((p) => (
              <PackageCard key={p.id} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Banner */}
      <section className="relative h-[400px] max-md:h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=800&fit=crop"
          alt="Mountain adventure"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4" data-aos="zoom-in">
          <button className="w-20 h-20 rounded-full bg-accent/90 border-none text-navy text-[1.8rem] flex items-center justify-center cursor-pointer transition-all duration-300 shadow-glow hover:scale-110 hover:shadow-glow-lg">
            <FiPlay />
          </button>
          <h2 className="text-white text-3xl">Experience the Thrill</h2>
          <p className="text-white/70">Watch our adventures unfold</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="section-tag">The ASTRAROAM Difference</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Why Choose Us</h2>
            <p className="text-gray text-lg max-w-xl mx-auto">We go beyond just organizing trips — we build trust</p>
          </div>
          <div className="grid grid-cols-5 gap-6 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-primary-light text-white flex items-center justify-center text-lg mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-[0.95rem] mb-1.5">{item.title}</h4>
                <p className="text-gray text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* CTA */}
      <section className="relative min-h-[350px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920&h=600&fit=crop"
          alt="Mountain adventure"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 to-navy/90" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 w-full text-center py-20" data-aos="zoom-in">
          <h2 className="text-white text-[clamp(1.8rem,4vw,2.5rem)] mb-4">Ready for Your Next Adventure?</h2>
          <p className="text-white/70 text-lg mb-9 max-w-lg mx-auto">Book your dream Himalayan trip today and create memories that last a lifetime.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/booking" className="btn-primary">Book Now <FiArrowRight /></Link>
            <Link to="/destinations" className="btn-outline">Explore Tours</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="section-tag">FAQ</span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray text-lg max-w-xl mx-auto">Everything you need to know before your adventure</p>
          </div>
          <div className="max-w-[800px] mx-auto" data-aos="fade-up">
            <FAQ faqs={generalFAQs} />
          </div>
        </div>
      </section>
    </div>
  )
}
