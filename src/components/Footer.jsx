import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMountain, FaInstagram, FaFacebookF, FaYoutube, FaPhone, FaEnvelope, FaGlobe, FaStar } from 'react-icons/fa'
import { FiMapPin, FiSend } from 'react-icons/fi'
import { testimonials } from '../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()
  const [reviewForm, setReviewForm] = useState({ name: '', rating: 5, review: '' })
  const [reviewSent, setReviewSent] = useState(false)

  const handleReview = (e) => {
    e.preventDefault()
    if (reviewForm.name.trim() && reviewForm.review.trim()) {
      setReviewSent(true)
      setReviewForm({ name: '', rating: 5, review: '' })
      setTimeout(() => setReviewSent(false), 4000)
    }
  }

  return (
    <footer className="relative bg-navy pt-24 pb-0">
      <div className="absolute -top-15 left-0 right-0 text-navy pointer-events-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px]">
          <path fill="currentColor" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-5">

        {/* Reviews Section */}
        <div className="pb-10">
          <div className="text-center mb-7">
            <span className="section-tag">Testimonials</span>
            <h3 className="text-white text-[clamp(1.3rem,2.5vw,1.6rem)] mt-2">Reviews From Our Travelers</h3>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8 max-xl:grid-cols-2 max-md:grid-cols-1">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.id} className="glass-card p-5">
                <div className="flex gap-1 mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <FaStar key={i} className={`text-xs ${i < t.rating ? 'text-gold fill-gold' : 'text-white/20'}`} />
                  ))}
                </div>
                <p className="text-white/60 text-xs leading-relaxed italic mb-3">&ldquo;{t.review}&rdquo;</p>
                <div className="flex items-center gap-2.5 pt-3 border-t border-white/10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-heading font-bold text-[10px] text-white shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <h5 className="text-white text-xs font-bold">{t.name}</h5>
                    <span className="text-white/40 text-[10px]">{t.location} • {t.trek}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Write a Review */}
          <div className="glass-card p-6 max-w-xl mx-auto">
            <h4 className="text-white text-lg font-heading font-bold mb-1">Share Your Experience</h4>
            <p className="text-white/50 text-sm mb-5">Traveled with us? Leave a review and help other adventurers!</p>

            {reviewSent && (
              <div className="flex items-center gap-3 p-4 mb-5 rounded-xl bg-accent/10 border border-accent/20 animate-slide-up">
                <FaStar className="text-accent text-lg" />
                <p className="text-accent text-sm font-medium">Thank you! Your review has been submitted successfully.</p>
              </div>
            )}

            <form onSubmit={handleReview} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-xs font-heading uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/[0.08] border border-white/[0.12] rounded-xl text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/60 text-xs font-heading uppercase tracking-wider">Your Rating</label>
                  <div className="flex gap-1.5 py-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                        className="bg-transparent border-none cursor-pointer text-2xl transition-transform hover:scale-125"
                      >
                        <FaStar className={star <= reviewForm.rating ? 'text-gold fill-gold' : 'text-white/20'} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/60 text-xs font-heading uppercase tracking-wider">Your Review</label>
                <textarea
                  rows="3"
                  placeholder="Share your experience with ASTRAROAM..."
                  value={reviewForm.review}
                  onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/[0.08] border border-white/[0.12] rounded-xl text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-y min-h-[80px]"
                />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 self-start px-6 py-2.5 bg-gradient-to-r from-accent to-accent-light text-navy font-heading font-bold text-xs border-none rounded-full cursor-pointer transition-all duration-300 shadow-lg uppercase tracking-wider hover:-translate-y-0.5">
                Submit Review <FiSend />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 pb-14 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-9">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-2">
              <FaMountain className="text-accent text-2xl" />
              <span className="font-heading font-extrabold text-xl text-white tracking-widest">
                ASTRA<span className="text-accent">ROAM</span>
              </span>
            </Link>
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Travel Beyond Limits</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              ASTRAROAM is a modern tour & travel platform helping travelers discover stunning destinations, explore curated packages, book hotels, and plan unforgettable trips across Himachal Pradesh & Uttarakhand — all in one place.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/astraroam" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[42px] h-[42px] rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-accent hover:text-navy hover:border-accent hover:-translate-y-0.5">
                <FaInstagram />
              </a>
              <a href="https://facebook.com/astraroam" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-[42px] h-[42px] rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-accent hover:text-navy hover:border-accent hover:-translate-y-0.5">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com/@astraroam" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-[42px] h-[42px] rounded-full bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-accent hover:text-navy hover:border-accent hover:-translate-y-0.5">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold mb-6 pb-3 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-[30px] h-[2px] bg-accent rounded" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[['/', 'Home'], ['/destinations', 'Destinations'], ['/treks', 'Treks'], ['/gallery', 'Gallery'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="text-white/60 text-sm transition-all duration-300 hover:text-accent hover:pl-1.5">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white text-base font-bold mb-6 pb-3 relative">
              Top Destinations
              <span className="absolute bottom-0 left-0 w-[30px] h-[2px] bg-accent rounded" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[['/destination/triund', 'Triund'], ['/destination/spiti', 'Spiti Valley'], ['/destination/manali', 'Manali'], ['/destination/kasol', 'Kasol'], ['/destination/kheerganga', 'Kheerganga'], ['/destination/chitkul', 'Chitkul']].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="text-white/60 text-sm transition-all duration-300 hover:text-accent hover:pl-1.5">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-base font-bold mb-6 pb-3 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-[30px] h-[2px] bg-accent rounded" />
            </h4>
            <div className="flex items-start gap-3 mb-3.5">
              <FaPhone className="text-accent text-sm mt-1 shrink-0" />
              <a href="tel:+917018599060" className="text-white/60 text-sm hover:text-accent">+91 70185 99060</a>
            </div>
            <div className="flex items-start gap-3 mb-3.5">
              <FaPhone className="text-accent text-sm mt-1 shrink-0" />
              <a href="tel:+919805556015" className="text-white/60 text-sm hover:text-accent">+91 98055 56015</a>
            </div>
            <div className="flex items-start gap-3 mb-3.5">
              <FaEnvelope className="text-accent text-sm mt-1 shrink-0" />
              <a href="mailto:info@astraroam.com" className="text-white/60 text-sm hover:text-accent">info@astraroam.com</a>
            </div>
            <div className="flex items-start gap-3 mb-3.5">
              <FaGlobe className="text-accent text-sm mt-1 shrink-0" />
              <a href="https://www.astraroam.com" className="text-white/60 text-sm hover:text-accent">www.astraroam.com</a>
            </div>
            <div className="flex items-start gap-3">
              <FiMapPin className="text-accent text-sm mt-1 shrink-0" />
              <span className="text-white/60 text-sm">Himachal Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center py-6 border-t border-white/[0.08] max-sm:flex-col max-sm:gap-3 max-sm:text-center">
          <p className="text-white/40 text-sm">&copy; {year} ASTRAROAM. All rights reserved. Travel Beyond Limits.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-sm hover:text-accent">Privacy Policy</a>
            <a href="#" className="text-white/40 text-sm hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
