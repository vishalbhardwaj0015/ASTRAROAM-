import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaYoutube, FaPhone, FaEnvelope, FaGlobe, FaStar, FaWhatsapp } from 'react-icons/fa'
import { FiMapPin, FiSend } from 'react-icons/fi'
import { testimonials } from '../data/siteData'
import logo from '../pics/logo.jpeg'

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="relative bg-primary pt-40 pb-0">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 text-off-white dark:text-gray-900 pointer-events-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px]">
          <path fill="currentColor" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Testimonials + Newsletter */}
        <div className="pb-12 grid grid-cols-[1fr_1fr] gap-10 items-start max-lg:grid-cols-1">
          {/* Testimonials */}
          <div>
            <span className="section-tag">Testimonials</span>
            <h3 className="text-white text-lg mt-3 mb-6 font-heading font-bold">What Travelers Say</h3>
            <div className="flex flex-col gap-3">
              {testimonials.slice(0, 3).map((t) => (
                <div key={t.id} className="flex gap-4 glass-card p-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center font-heading font-bold text-[10px] text-primary shrink-0">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h5 className="text-white text-xs font-bold font-body">{t.name}</h5>
                      <span className="text-white/25 text-[10px] font-body">{t.location}</span>
                      <div className="flex gap-0.5 ml-auto">
                        {Array(5).fill(0).map((_, i) => (
                          <FaStar key={i} className={`text-[9px] ${i < t.rating ? 'text-accent fill-accent' : 'text-white/10'}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2 font-light">&ldquo;{t.review}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <span className="section-tag">Stay Updated</span>
            <h3 className="text-white text-lg mt-3 mb-6 font-heading font-bold">Join Our Newsletter</h3>
            <div className="glass-card p-6">
              <p className="text-white/40 text-sm font-light mb-5 leading-relaxed">
                {'\u201CGet exclusive deals, trek updates, and travel tips delivered straight to your inbox. No spam, ever.\u201D'}
              </p>
              {subscribed && (
                <div className="flex items-center gap-2 p-3 mb-4 rounded-full bg-accent/10 border border-accent/20 animate-slide-up">
                  <FaStar className="text-accent text-sm" />
                  <p className="text-accent text-xs font-medium font-body">Thanks for subscribing!</p>
                </div>
              )}
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-5 py-3.5 bg-white/[0.06] border border-white/[0.1] rounded-full text-white text-sm font-body placeholder:text-white/25 focus:outline-none focus:border-accent/40 focus:shadow-gold transition-all"
                />
                <button type="submit" className="inline-flex items-center gap-2 self-start px-6 py-2.5 rounded-full font-heading font-bold text-[11px] border-none cursor-pointer transition-all duration-300 shadow-gold uppercase tracking-wider hover:-translate-y-0.5 hover:shadow-gold-lg" style={{ background: 'linear-gradient(135deg, #c9a84c, #dbbf6a)', color: '#0f2027' }}>
                  Subscribe <FiSend />
                </button>
              </form>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.06]">
                <FaWhatsapp className="text-accent/60 text-lg" />
                <div>
                  <p className="text-white/50 text-xs font-body">Quick Help?</p>
                  <a href="https://wa.me/917018599060" target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-body font-medium hover:underline">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 pb-16 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-9">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3.5 mb-4 group">
              <div className="relative">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-accent/30 shadow-gold transition-all duration-500 group-hover:border-accent/50 group-hover:shadow-gold-lg">
                  <img src={logo} alt="Astraroam Logo" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent border-2 border-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-[1.15rem] text-white tracking-wide leading-none">
                  ASTRA<span className="text-accent">ROAM</span>
                </span>
                <span className="text-white/40 text-[0.5rem] font-body uppercase tracking-[0.35em] leading-none mt-1.5">Himalayan Adventures</span>
              </div>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-6 font-light">
              Premium tour & travel platform helping travelers discover stunning destinations, explore curated packages, and plan unforgettable Himalayan adventures.
            </p>
            <div className="flex gap-3">
              {[FaInstagram, FaFacebookF, FaYoutube].map((Icon, i) => {
                const hrefs = ['https://instagram.com/astraroam', 'https://facebook.com/astraroam', 'https://youtube.com/@astraroam']
                const labels = ['Instagram', 'Facebook', 'YouTube']
                return (
                  <a key={i} href={hrefs[i]} target="_blank" rel="noopener noreferrer" aria-label={labels[i]} className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/40 transition-all duration-300 hover:bg-accent/15 hover:text-accent hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-gold">
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-heading font-bold mb-6 pb-3 relative uppercase tracking-wider">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-accent to-transparent rounded-full" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[['/', 'Home'], ['/destinations', 'Destinations'], ['/treks', 'Treks'], ['/gallery', 'Gallery'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="text-white/40 text-sm transition-all duration-300 hover:text-accent hover:pl-1 font-light">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white text-sm font-heading font-bold mb-6 pb-3 relative uppercase tracking-wider">
              Top Destinations
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-accent to-transparent rounded-full" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[['/destination/triund', 'Triund'], ['/destination/spiti', 'Spiti Valley'], ['/destination/manali', 'Manali'], ['/destination/kasol', 'Kasol'], ['/destination/kheerganga', 'Kheerganga'], ['/destination/chitkul', 'Chitkul']].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="text-white/40 text-sm transition-all duration-300 hover:text-accent hover:pl-1 font-light">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-heading font-bold mb-6 pb-3 relative uppercase tracking-wider">
              Contact Us
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-accent to-transparent rounded-full" />
            </h4>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <FaPhone className="text-accent text-[10px]" />
              </div>
              <div className="flex flex-col">
                <a href="tel:+917018599060" className="text-white/40 text-sm hover:text-accent transition-colors font-light">+91 70185 99060</a>
                <a href="tel:+919805556015" className="text-white/40 text-sm hover:text-accent transition-colors font-light">+91 98055 56015</a>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <FaEnvelope className="text-accent text-[10px]" />
              </div>
              <a href="mailto:info@astraroam.com" className="text-white/40 text-sm hover:text-accent transition-colors font-light">info@astraroam.com</a>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <FaGlobe className="text-accent text-[10px]" />
              </div>
              <a href="https://www.astraroam.com" className="text-white/40 text-sm hover:text-accent transition-colors font-light">www.astraroam.com</a>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <FiMapPin className="text-accent text-[10px]" />
              </div>
              <span className="text-white/40 text-sm font-light">Shimla, Himachal Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center py-6 border-t border-white/[0.06] max-sm:flex-col max-sm:gap-3 max-sm:text-center">
          <p className="text-white/25 text-sm font-light">&copy; {year} ASTRAROAM. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/25 text-sm hover:text-accent transition-colors font-light">Privacy Policy</a>
            <a href="#" className="text-white/25 text-sm hover:text-accent transition-colors font-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
