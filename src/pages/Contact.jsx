import { useState } from 'react'
import { FaPhone, FaEnvelope, FaGlobe, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { FiMapPin, FiSend, FiClock, FiMessageCircle } from 'react-icons/fi'

const contactCards = [
  { icon: <FaPhone />, title: 'Call Us', detail: '+91 70185 99060 / +91 98055 56015', sub: 'Mon – Sat, 9AM – 7PM', action: 'tel:+917018599060', color: 'from-primary to-primary-light' },
  { icon: <FaEnvelope />, title: 'Email Us', detail: 'info@astraroam.com', sub: 'We reply within 24 hours', action: 'mailto:info@astraroam.com', color: 'from-accent to-accent-light' },
  { icon: <FaWhatsapp />, title: 'WhatsApp', detail: '+91 70185 99060 / +91 98055 56015', sub: 'Quick response guaranteed', action: 'https://wa.me/917018599060', color: 'from-[#25D366] to-[#128C7E]' },
  { icon: <FiMapPin />, title: 'Visit Office', detail: 'Shimla, Himachal Pradesh', sub: 'Near Mall Road – 171102', action: 'https://maps.google.com/?q=Shimla+Himachal+Pradesh', color: 'from-navy to-navy-light' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter valid email'
    if (!form.phone.trim()) errs.phone = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = 'Enter valid 10-digit number'
    if (!form.subject.trim()) errs.subject = 'Subject is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      setErrors({})
    }
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const inputClass = (field) =>
    `w-full px-5 py-4 border-2 rounded-xl font-body text-sm text-navy transition-all duration-300 bg-off-white focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 ${errors[field] ? 'border-red-400' : 'border-gray-100'}`

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[350px] max-md:h-[280px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1920&h=500&fit=crop" alt="Contact Us" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5" data-aos="fade-up">
          <span className="section-tag">Get in Touch</span>
          <h1 className="text-white text-[clamp(2rem,5vw,3.5rem)] mb-3 mt-2">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-xl">Have questions? We'd love to hear from you. Reach out for bookings, queries, or travel advice.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-off-white">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-4 gap-6 -mt-20 relative z-10 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {contactCards.map((card, i) => (
              <a
                key={i}
                href={card.action}
                target={card.action.startsWith('http') ? '_blank' : undefined}
                rel={card.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-white rounded-2xl p-7 shadow-glass-lg border border-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-xl"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-navy mb-1">{card.title}</h3>
                <p className="text-navy font-semibold text-sm mb-0.5">{card.detail}</p>
                <p className="text-gray text-xs">{card.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-[1.3fr_1fr] gap-14 items-start max-xl:grid-cols-1">

            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="mb-8">
                <span className="section-tag">Send a Message</span>
                <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] mt-2 mb-3">Let's Plan Your Adventure</h2>
                <p className="text-gray text-base">Fill out the form below and our travel experts will get back to you within 24 hours with a personalized itinerary.</p>
              </div>

              {submitted && (
                <div className="flex items-center gap-3 p-5 mb-8 rounded-2xl animate-slide-up" style={{ background: 'rgba(27,94,32,0.06)', border: '2px solid rgba(27,94,32,0.15)' }}>
                  <div className="w-12 h-12 rounded-full bg-primary text-white text-xl flex items-center justify-center shrink-0">✓</div>
                  <div>
                    <h4 className="text-primary font-heading font-bold text-base">Message Sent Successfully!</h4>
                    <p className="text-gray text-sm">We'll get back to you within 24 hours. Check your email.</p>
                  </div>
                </div>
              )}

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                  <div className="flex flex-col gap-2">
                    <label className="font-heading font-semibold text-sm text-navy">Full Name *</label>
                    <input type="text" placeholder="e.g. Rahul Sharma" value={form.name} onChange={(e) => handleChange('name', e.target.value)} className={inputClass('name')} />
                    {errors.name && <span className="text-red-500 text-xs font-medium">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-heading font-semibold text-sm text-navy">Email Address *</label>
                    <input type="email" placeholder="e.g. rahul@email.com" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className={inputClass('email')} />
                    {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                  <div className="flex flex-col gap-2">
                    <label className="font-heading font-semibold text-sm text-navy">Phone Number *</label>
                    <input type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} className={inputClass('phone')} />
                    {errors.phone && <span className="text-red-500 text-xs font-medium">{errors.phone}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-heading font-semibold text-sm text-navy">Subject *</label>
                    <select value={form.subject} onChange={(e) => handleChange('subject', e.target.value)} className={inputClass('subject')}>
                      <option value="">Select a subject</option>
                      <option value="Booking Inquiry">Booking Inquiry</option>
                      <option value="Trek Information">Trek Information</option>
                      <option value="Custom Package">Custom Package Request</option>
                      <option value="Group Tour">Group Tour</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && <span className="text-red-500 text-xs font-medium">{errors.subject}</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-heading font-semibold text-sm text-navy">Your Message *</label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your travel dates, group size, preferred destinations, or any questions..."
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`${inputClass('message')} resize-y min-h-[130px]`}
                  />
                  {errors.message && <span className="text-red-500 text-xs font-medium">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary self-start text-base px-10 py-4">
                  Send Message <FiSend />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="xl:sticky xl:top-24 space-y-6" data-aos="fade-left">

              {/* Office Info */}
              <div className="bg-white rounded-2xl p-8 shadow-glass-lg border border-gray-50">
                <h3 className="font-heading font-bold text-xl mb-6">Office Information</h3>

                <div className="flex gap-4 mb-6">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0">
                    <FiMapPin />
                  </div>
                  <div>
                    <span className="block text-[0.7rem] text-gray uppercase tracking-wider mb-1">Office Address</span>
                    <p className="text-navy text-sm font-medium leading-relaxed">
                      ASTRAROAM Travel Agency<br />
                      Near Mall Road, Manali<br />
                      Kullu District, Himachal Pradesh – 175131
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mb-6">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent-dark flex items-center justify-center text-lg shrink-0">
                    <FiClock />
                  </div>
                  <div>
                    <span className="block text-[0.7rem] text-gray uppercase tracking-wider mb-1">Working Hours</span>
                    <p className="text-navy text-sm font-medium">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                    <p className="text-navy text-sm font-medium">Sunday: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-navy/10 text-navy flex items-center justify-center text-lg shrink-0">
                    <FiMessageCircle />
                  </div>
                  <div>
                    <span className="block text-[0.7rem] text-gray uppercase tracking-wider mb-1">Response Time</span>
                    <p className="text-navy text-sm font-medium">Within 2 hours on working days</p>
                    <p className="text-gray text-xs">24/7 WhatsApp support available</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-glass-lg border border-gray-50">
                <h3 className="font-heading font-bold text-xl mb-2">Follow Our Adventures</h3>
                <p className="text-gray text-sm mb-6">Stay connected for travel tips, stunning photos, and exclusive deals.</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com/astraroam', color: 'hover:bg-pink-500' },
                    { icon: <FaFacebookF />, label: 'Facebook', href: 'https://facebook.com/astraroam', color: 'hover:bg-blue-600' },
                    { icon: <FaYoutube />, label: 'YouTube', href: 'https://youtube.com/@astraroam', color: 'hover:bg-red-600' },
                    { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://wa.me/917018599060', color: 'hover:bg-[#25D366]' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-off-white text-navy text-sm font-medium transition-all duration-300 hover:text-white hover:-translate-y-0.5 ${s.color}`}
                    >
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-glass-lg border border-gray-50">
                <iframe
                  title="ASTRAROAM Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.1234!2d77.1945!3d32.2432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sManali!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920&h=400&fit=crop" alt="Adventure" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-navy/90" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 text-center" data-aos="zoom-in">
          <h2 className="text-white text-[clamp(1.5rem,3vw,2.2rem)] mb-4">Prefer to Talk Directly?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">Our travel experts are just a phone call away. Call us now and start planning your dream trip.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:+917018599060" className="btn-primary text-base px-10 py-4">
              <FaPhone /> Call Now
            </a>
            <a href="https://wa.me/917018599060" target="_blank" rel="noopener noreferrer" className="btn-outline text-base px-10 py-4">
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
