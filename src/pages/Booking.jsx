import BookingForm from '../components/BookingForm'
import { FaPhone, FaEnvelope, FaWhatsapp, FaClock, FaMountain } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'

export default function Booking() {
  return (
    <div>
      <section className="relative h-[350px] max-md:h-[280px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&h=500&fit=crop" alt="Book Your Adventure" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5" data-aos="fade-up">
          <span className="section-tag">Book Now</span>
          <h1 className="text-white text-[clamp(2rem,5vw,3.5rem)] mb-3 mt-2">Plan Your Dream Trip</h1>
          <p className="text-white/70 text-lg max-w-lg">Share your travel vision and our experts will craft the perfect Himalayan experience for you</p>
        </div>
      </section>

      <section className="py-20 bg-off-white dark:bg-gray-950">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-[1fr_360px] gap-10 items-start max-xl:grid-cols-1">
            <BookingForm />

            <div className="xl:sticky xl:top-24 space-y-5" data-aos="fade-left">
              {/* Contact Card */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-glass-lg border border-gray-50 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-5">
                  <FaMountain className="text-accent text-xl" />
                  <h3 className="font-heading font-bold text-lg">Need Help?</h3>
                </div>
                <p className="text-gray text-sm leading-relaxed mb-5 dark:text-gray-400">Talk to our travel experts directly. We're available 7 days a week to help plan your perfect trip.</p>

                <div className="flex flex-col gap-4">
                  <a href="tel:+917018599060" className="flex items-center gap-3 p-3 rounded-xl bg-off-white dark:bg-gray-700 hover:bg-primary/5 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <FaPhone />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray dark:text-gray-400 uppercase tracking-wider">Call Now</span>
                      <span className="block font-heading font-bold text-sm text-navy dark:text-gray-100">+91 70185 99060</span>
                    </div>
                  </a>
                  <a href="tel:+919805556015" className="flex items-center gap-3 p-3 rounded-xl bg-off-white dark:bg-gray-700 hover:bg-primary/5 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <FaPhone />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray dark:text-gray-400 uppercase tracking-wider">Call Now</span>
                      <span className="block font-heading font-bold text-sm text-navy dark:text-gray-100">+91 98055 56015</span>
                    </div>
                  </a>
                  <a href="https://wa.me/917018599060" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-off-white dark:bg-gray-700 hover:bg-[#25D366]/5 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray dark:text-gray-400 uppercase tracking-wider">WhatsApp</span>
                      <span className="block font-heading font-bold text-sm text-navy dark:text-gray-100">Quick Response</span>
                    </div>
                  </a>
                  <a href="mailto:info@astraroam.com" className="flex items-center gap-3 p-3 rounded-xl bg-off-white dark:bg-gray-700 hover:bg-accent/5 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                      <FaEnvelope />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray dark:text-gray-400 uppercase tracking-wider">Email</span>
                      <span className="block font-heading font-bold text-sm text-navy dark:text-gray-100">info@astraroam.com</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-7 shadow-glass-lg border border-gray-50 dark:border-gray-700">
                <h3 className="font-heading font-bold text-lg mb-5">How It Works</h3>
                <div className="flex flex-col gap-4">
                  {[
                    ['1', 'Share Your Dream', 'Tell us where you want to go, when, and with whom', '📝'],
                    ['2', 'Get Custom Plan', 'Our experts craft a personalized itinerary for you', '🗺️'],
                    ['3', 'Confirm & Go', 'Pay a small advance and start your adventure', '🏔️'],
                  ].map(([num, title, desc, emoji]) => (
                    <div key={num} className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-lg shrink-0">
                        {emoji}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm text-navy dark:text-gray-100">{title}</h4>
                        <p className="text-gray text-xs leading-relaxed dark:text-gray-400">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-7 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <FaClock className="text-accent" />
                  <h3 className="font-heading font-bold text-lg">Working Hours</h3>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Mon – Sat</span>
                    <span className="font-medium">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Sunday</span>
                    <span className="font-medium">10:00 AM – 4:00 PM</span>
                  </div>
                  <div className="border-t border-white/10 mt-2 pt-2">
                    <div className="flex justify-between">
                      <span className="text-white/60">WhatsApp</span>
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
