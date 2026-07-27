import BookingForm from '../components/BookingForm'
import { FaPhone, FaEnvelope, FaWhatsapp, FaClock, FaMountain } from 'react-icons/fa'

export default function Booking() {
  return (
    <div>
      <section className="relative h-[400px] max-md:h-[300px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&h=500&fit=crop" alt="Book Your Adventure" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/95" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5" data-aos="fade-up">
          <span className="section-tag">Book Now</span>
          <h1 className="text-white text-[clamp(2rem,5vw,3.5rem)] mb-3 mt-3 font-heading">Plan Your Dream Trip</h1>
          <p className="text-white/45 text-lg max-w-lg font-light">{'\u201CShare your travel vision and our experts will craft the perfect Himalayan experience.\u201D'}</p>
        </div>
      </section>

      <section className="py-24 bg-off-white dark:bg-gray-950">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-[1fr_360px] gap-10 items-start max-xl:grid-cols-1">
            <BookingForm />

            <div className="xl:sticky xl:top-24 space-y-5" data-aos="fade-left">
              {/* Contact Card */}
              <div className="premium-card p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-sm bg-accent/10 flex items-center justify-center">
                    <FaMountain className="text-accent text-base" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">Need Help?</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 dark:text-gray-400 font-light">{'\u201CTalk to our travel experts directly. We\u2019re available 7 days a week.\u201D'}</p>

                <div className="flex flex-col gap-3">
                  <a href="tel:+917018599060" className="flex items-center gap-3 p-3.5 rounded-sm bg-off-white dark:bg-gray-700/50 hover:bg-accent/[0.04] transition-colors group">
                    <div className="w-10 h-10 rounded-sm bg-accent/[0.08] text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors">
                      <FaPhone />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider font-body">Call Now</span>
                      <span className="block font-body font-semibold text-sm text-navy dark:text-gray-100">+91 70185 99060</span>
                    </div>
                  </a>
                  <a href="tel:+919805556015" className="flex items-center gap-3 p-3.5 rounded-sm bg-off-white dark:bg-gray-700/50 hover:bg-accent/[0.04] transition-colors group">
                    <div className="w-10 h-10 rounded-sm bg-accent/[0.08] text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors">
                      <FaPhone />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider font-body">Call Now</span>
                      <span className="block font-body font-semibold text-sm text-navy dark:text-gray-100">+91 98055 56015</span>
                    </div>
                  </a>
                  <a href="https://wa.me/917018599060" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3.5 rounded-sm bg-off-white dark:bg-gray-700/50 hover:bg-[#25D366]/[0.04] transition-colors group">
                    <div className="w-10 h-10 rounded-sm bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider font-body">WhatsApp</span>
                      <span className="block font-body font-semibold text-sm text-navy dark:text-gray-100">Quick Response</span>
                    </div>
                  </a>
                  <a href="mailto:info@astraroam.com" className="flex items-center gap-3 p-3.5 rounded-sm bg-off-white dark:bg-gray-700/50 hover:bg-accent/[0.04] transition-colors group">
                    <div className="w-10 h-10 rounded-sm bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors">
                      <FaEnvelope />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider font-body">Email</span>
                      <span className="block font-body font-semibold text-sm text-navy dark:text-gray-100">info@astraroam.com</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* How It Works */}
              <div className="premium-card p-7">
                <h3 className="font-heading font-bold text-lg mb-5">How It Works</h3>
                <div className="flex flex-col gap-5">
                  {[
                    ['1', 'Share Your Dream', '\u201CTell us where you want to go, when, and with whom.\u201D'],
                    ['2', 'Get Custom Plan', '\u201COur experts craft a personalized itinerary for you.\u201D'],
                    ['3', 'Confirm & Go', '\u201CConfirm your booking and start your adventure.\u201D'],
                  ].map(([num, title, desc]) => (
                    <div key={num} className="flex gap-4 items-start">
                      <div className="w-9 h-9 rounded-sm bg-navy text-accent flex items-center justify-center text-sm font-heading font-bold shrink-0">
                        {num}
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-sm text-navy dark:text-gray-100">{title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed dark:text-gray-400 font-light mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-navy rounded-lg p-7 text-white">
                <div className="flex items-center gap-2.5 mb-5">
                  <FaClock className="text-accent text-base" />
                  <h3 className="font-heading font-bold text-lg">Working Hours</h3>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/40 font-light">Mon – Sat</span>
                    <span className="font-medium">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 font-light">Sunday</span>
                    <span className="font-medium">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="border-t border-white/[0.08] mt-2 pt-3">
                    <div className="flex justify-between">
                      <span className="text-white/40 font-light">WhatsApp</span>
                      <span className="font-medium text-accent">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
