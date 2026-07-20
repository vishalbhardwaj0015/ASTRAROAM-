import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { FiGlobe, FiUsers, FiPackage, FiHeart, FiShield, FiDollarSign, FiHeadphones, FiArrowRight, FiPhone } from 'react-icons/fi'
import { FaMountain, FaStar } from 'react-icons/fa'
import Hero from '../components/Hero'
import DestinationCard from '../components/DestinationCard'
import TrekCard from '../components/TrekCard'
import PackageCard from '../components/PackageCard'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import { destinations, treks, packages } from '../data/siteData'

const features = [
  { icon: <FiGlobe />, title: 'Breathtaking Landscapes', desc: 'Snow-capped peaks, pristine lakes, ancient villages, and lush valleys across the Himalayas.' },
  { icon: <FiUsers />, title: 'Expert Local Guides', desc: 'Certified guides who know every trail, hidden gem, and secret viewpoint in the region.' },
  { icon: <FiPackage />, title: 'Curated Experiences', desc: 'Thoughtfully designed itineraries tailored to your preferences and travel style.' },
  { icon: <FiHeart />, title: 'Seamless Journey', desc: 'From discovery to booking to travel — everything managed in one seamless platform.' },
]

const whyChooseUs = [
  { icon: <FaMountain />, title: 'Expert Guides', desc: 'Local experts with years of Himalayan experience' },
  { icon: <FiShield />, title: 'Safe Travel', desc: 'First aid trained staff and strict safety protocols' },
  { icon: <FiDollarSign />, title: 'Best Value', desc: 'Premium experiences at competitive rates' },
  { icon: <FiPackage />, title: 'Custom Trips', desc: 'Flexible itineraries for every traveler' },
  { icon: <FiHeadphones />, title: '24/7 Support', desc: 'Round-the-clock assistance during your trip' },
]

const stats = [
  { number: '500+', label: 'Happy Travelers', icon: <FiUsers /> },
  { number: '50+', label: 'Curated Treks', icon: <FaMountain /> },
  { number: '15+', label: 'Destinations', icon: <FiGlobe /> },
  { number: '4.9', label: 'Google Rating', icon: <FaStar /> },
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

      {/* Stats Banner */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-2">
            {stats.map((stat, i) => (
              <div key={i} className="text-center" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center text-accent mx-auto mb-3">
                  {stat.icon}
                </div>
                <span className="block font-heading text-2xl font-bold text-white">{stat.number}</span>
                <span className="text-white/40 text-xs font-body uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-off-white dark:bg-gray-900">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="section-tag">Why ASTRAROAM</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-4 mb-4 font-heading">Your Adventure, Our Passion</h2>
            <div className="premium-divider" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto dark:text-gray-400 font-light mt-4">We don't just plan trips. We craft life-changing Himalayan experiences.</p>
          </div>
          <div className="features-grid-home grid grid-cols-4 gap-8 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {features.map((f, i) => (
              <div key={i} className="feature-card-home text-center p-10 bg-white dark:bg-gray-800/80 rounded-lg border border-gray-100/80 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-premium-lg hover:border-accent/15" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-16 h-16 rounded-sm bg-navy/[0.04] dark:bg-accent/[0.08] flex items-center justify-center text-xl text-accent mx-auto mb-6 transition-all duration-500 group-hover:bg-accent group-hover:text-white">
                  {f.icon}
                </div>
                <h3 className="text-lg font-heading font-bold mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed dark:text-gray-400 font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="relative py-32 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop" alt="Mountain panorama" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/[0.93] dark:bg-gray-900/95" />
        <div className="relative max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="section-tag">Destinations</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-4 mb-4 font-heading">Our Destinations</h2>
            <div className="premium-divider" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto dark:text-gray-400 font-light mt-4">Discover the most stunning destinations across the Himalayan belt</p>
          </div>
          <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {destinations.slice(0, 4).map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
          <div className="text-center mt-16" data-aos="fade-up">
            <Link to="/destinations" className="btn-primary">
              View All Destinations <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Treks Section */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="section-tag">Popular Treks</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] text-white mt-4 mb-4 font-heading">Trek the Himalayas</h2>
            <div className="premium-divider" />
            <p className="text-white/40 text-lg max-w-xl mx-auto font-light mt-4">Handpicked trekking experiences for every level of adventure</p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
            {treks.slice(0, 3).map((t) => (
              <TrekCard key={t.id} trek={t} />
            ))}
          </div>
          <div className="text-center mt-16" data-aos="fade-up">
            <Link to="/treks" className="btn-accent">
              Explore All Treks <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-32 bg-off-white dark:bg-gray-950">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="section-tag">Packages</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-4 mb-4 font-heading">Curated Travel Packages</h2>
            <div className="premium-divider" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto dark:text-gray-400 font-light mt-4">All-inclusive packages designed for the perfect Himalayan getaway</p>
          </div>
          <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {packages.map((p) => (
              <PackageCard key={p.id} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative h-[400px] max-md:h-[350px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=800&fit=crop"
          alt="Mountain adventure"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full" data-aos="fade-up">
          <div className="max-w-[600px]">
            <span className="section-tag">Ready to Explore?</span>
            <h2 className="text-white text-[clamp(1.8rem,4vw,2.8rem)] mt-4 mb-5 font-heading">Your Himalayan Adventure Starts Here</h2>
            <div className="premium-divider !mb-6" />
            <p className="text-white/50 text-lg mb-8 font-light">Talk to our travel experts and plan your perfect trip. No hidden charges, best price guaranteed.</p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/booking" className="btn-accent">Book Now <FiArrowRight /></Link>
              <a href="tel:+917018599060" className="btn-outline flex items-center gap-2"><FiPhone /> Call Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-off-white dark:bg-gray-900">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="section-tag">The ASTRAROAM Difference</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-4 mb-4 font-heading">Why Choose Us</h2>
            <div className="premium-divider" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto dark:text-gray-400 font-light mt-4">We go beyond just organizing trips — we build trust</p>
          </div>
          <div className="grid grid-cols-5 gap-6 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="text-center p-8 bg-white dark:bg-gray-800/80 rounded-lg border border-gray-100/80 dark:border-gray-700/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-premium" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="w-14 h-14 rounded-sm bg-navy flex text-white items-center justify-center text-base mx-auto mb-5">
                  {item.icon}
                </div>
                <h4 className="text-[0.9rem] font-heading font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed dark:text-gray-400 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* FAQ */}
      <section className="py-32 bg-off-white dark:bg-gray-950">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="section-tag">FAQ</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] mt-4 mb-4 font-heading">Frequently Asked Questions</h2>
            <div className="premium-divider" />
            <p className="text-gray-500 text-lg max-w-xl mx-auto dark:text-gray-400 font-light mt-4">Everything you need to know before your adventure</p>
          </div>
          <div className="max-w-[800px] mx-auto" data-aos="fade-up">
            <FAQ faqs={generalFAQs} />
          </div>
        </div>
      </section>
    </div>
  )
}
