import { useState } from 'react'
import { FaPhone, FaEnvelope, FaGlobe, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { FiMapPin, FiSend, FiClock, FiMessageCircle } from 'react-icons/fi'
import { API_URL } from '../config/api'

const contactCards = [
  { icon: <FaPhone />, title: 'Call Us', detail: '+91 70185 99060 / +91 98055 56015', sub: 'Mon – Sat, 9AM – 7PM', action: 'tel:+917018599060', color: 'from-primary to-primary-light' },
  { icon: <FaEnvelope />, title: 'Email Us', detail: 'info@astraroam.com', sub: 'We reply within 24 hours', action: 'mailto:info@astraroam.com', color: 'from-accent to-accent-light' },
  { icon: <FaWhatsapp />, title: 'WhatsApp', detail: '+91 70185 99060 / +91 98055 56015', sub: 'Quick response guaranteed', action: 'https://wa.me/917018599060', color: 'from-[#25D366] to-[#128C7E]' },
  { icon: <FiMapPin />, title: 'Visit Office', detail: 'Manali, Himachal Pradesh', sub: 'Near Mall Road – 175131', action: 'https://maps.google.com/?q=Manali+Himachal+Pradesh', color: 'from-navy to-navy-light' },
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

  const sendWhatsApp = (data) => {
    const msg = encodeURIComponent(
      `*New Inquiry - ASTRAROAM*\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `Subject: ${data.subject}\n` +
      `Message: ${data.message}`
    )
    window.open(`https://wa.me/917018599060?text=${msg}`, '_blank')
    setTimeout(() => {
      window.open(`https://wa.me/919805556015?text=${msg}`, '_blank')
    }, 1500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      sendWhatsApp(form)
      try {
        await fetch(`${API_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
      } catch (err) {
        console.error('API error:', err)
      }
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
    `w-full px-5 py-4 border rounded-sm font-body text-sm text-navy dark:text-gray-100 transition-all duration-300 bg-off-white dark:bg-gray-800 focus:outline-none focus:border-accent focus:bg-white focus:dark:bg-gray-700 focus:ring-2 focus:ring-accent/10 ${errors[field] ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'}`

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[400px] max-md:h-[300px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1920&h=500&fit=crop" alt="Contact Us" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/95" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5" data-aos="fade-up">
          <span className="section-tag">Get in Touch</span>
          <h1 className="text-white text-[clamp(2rem,5vw,3.5rem)] mb-3 mt-3 font-heading">Contact Us</h1>
          <p className="text-white/45 text-lg max-w-xl font-light">{'\u201CHave questions? We\u2019d love to hear from you. Reach out for bookings, queries, or travel advice.\u201D'}</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-off-white dark:bg-gray-950">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-4 gap-6 -mt-20 relative z-10 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {contactCards.map((card, i) => (
              <a
                key={i}
                href={card.action}
                target={card.action.startsWith('http') ? '_blank' : undefined}
                rel={card.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group premium-card p-7"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className={`w-12 h-12 rounded-sm bg-gradient-to-br ${card.color} text-white flex items-center justify-center text-lg mb-5 transition-transform duration-500 group-hover:scale-110`}>
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-navy dark:text-gray-100 mb-1 text-base">{card.title}</h3>
                <p className="text-navy dark:text-gray-100 font-medium text-sm mb-0.5">{card.detail}</p>
                <p className="text-gray-500 text-xs dark:text-gray-400 font-light">{card.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 dark:bg-gray-900">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-[1.3fr_1fr] gap-14 items-start max-xl:grid-cols-1">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="mb-10">
                <span className="section-tag">Send a Message</span>
                <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] mt-3 mb-3 font-heading">Let's Plan Your Adventure</h2>
                <p className="text-gray-500 text-base dark:text-gray-400 font-light">{'\u201CFill out the form below and our travel experts will get back to you within 24 hours.\u201D'}</p>
              </div>

              {submitted && (
                <div className="flex items-center gap-4 p-6 mb-8 rounded-sm animate-slide-up bg-accent/[0.06] border border-accent/15">
                  <div className="w-12 h-12 rounded-sm bg-accent text-primary text-xl flex items-center justify-center shrink-0 font-bold">✓</div>
                  <div>
                    <h4 className="text-navy font-heading font-bold text-base dark:text-gray-100">Message Sent Successfully!</h4>
                    <p className="text-gray-500 text-sm dark:text-gray-400 font-light">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                  <div className="flex flex-col gap-2">
                    <label className="font-body font-medium text-xs text-navy dark:text-gray-100 uppercase tracking-wider">Full Name *</label>
                    <input type="text" placeholder="Your full name" value={form.name} onChange={(e) => handleChange('name', e.target.value)} className={inputClass('name')} />
                    {errors.name && <span className="text-red-500 text-xs font-medium">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body font-medium text-xs text-navy dark:text-gray-100 uppercase tracking-wider">Email Address *</label>
                    <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className={inputClass('email')} />
                    {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
                  <div className="flex flex-col gap-2">
                    <label className="font-body font-medium text-xs text-navy dark:text-gray-100 uppercase tracking-wider">Phone Number *</label>
                    <input type="tel" placeholder="10-digit mobile number" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} className={inputClass('phone')} />
                    {errors.phone && <span className="text-red-500 text-xs font-medium">{errors.phone}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body font-medium text-xs text-navy dark:text-gray-100 uppercase tracking-wider">Subject *</label>
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
                  <label className="font-body font-medium text-xs text-navy dark:text-gray-100 uppercase tracking-wider">Your Message *</label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your travel dates, group size, preferred destinations..."
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`${inputClass('message')} resize-y min-h-[130px]`}
                  />
                  {errors.message && <span className="text-red-500 text-xs font-medium">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary self-start text-sm px-10 py-4">
                  Send Message <FiSend />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="xl:sticky xl:top-24 space-y-6" data-aos="fade-left">
              {/* Office Info */}
              <div className="premium-card p-8">
                <h3 className="font-heading font-bold text-lg mb-6">Office Information</h3>
                <div className="flex gap-4 mb-6">
                  <div className="w-10 h-10 rounded-sm bg-accent/[0.08] text-accent flex items-center justify-center text-base shrink-0">
                    <FiMapPin />
                  </div>
                  <div>
                    <span className="block text-[0.65rem] text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1 font-body">Office Address</span>
                    <p className="text-navy dark:text-gray-100 text-sm font-medium leading-relaxed">
                      ASTRAROAM Travel Agency<br />
                      Near Mall Road, Manali<br />
                      Kullu District, HP – 175131
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mb-6">
                  <div className="w-10 h-10 rounded-sm bg-accent/[0.08] text-accent flex items-center justify-center text-base shrink-0">
                    <FiClock />
                  </div>
                  <div>
                    <span className="block text-[0.65rem] text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1 font-body">Working Hours</span>
                    <p className="text-navy dark:text-gray-100 text-sm font-medium">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-navy dark:text-gray-100 text-sm font-medium">Sunday: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-sm bg-accent/[0.08] text-accent flex items-center justify-center text-base shrink-0">
                    <FiMessageCircle />
                  </div>
                  <div>
                    <span className="block text-[0.65rem] text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1 font-body">Response Time</span>
                    <p className="text-navy dark:text-gray-100 text-sm font-medium">Within 2 hours on working days</p>
                    <p className="text-gray-500 text-xs dark:text-gray-400 font-light">24/7 WhatsApp support available</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="premium-card p-8">
                <h3 className="font-heading font-bold text-lg mb-2">Follow Our Adventures</h3>
                <p className="text-gray-500 text-sm mb-6 dark:text-gray-400 font-light">{'\u201CStay connected for travel tips and exclusive deals.\u201D'}</p>
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
                      className={`flex items-center gap-3 px-4 py-3 rounded-sm bg-off-white dark:bg-gray-700/50 text-navy dark:text-gray-100 text-sm font-medium transition-all duration-500 hover:text-white hover:-translate-y-0.5 ${s.color}`}
                    >
                      {s.icon} <span className="font-light">{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-sm overflow-hidden shadow-premium border border-gray-100 dark:border-gray-700">
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
      <section className="relative py-24 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=400&fit=crop" alt="Adventure" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-navy/95" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center" data-aos="zoom-in">
          <h2 className="text-white text-[clamp(1.5rem,3vw,2.2rem)] mb-4 font-heading">Prefer to Talk Directly?</h2>
                <p className="text-white/45 text-lg mb-10 max-w-lg mx-auto font-light">{'\u201COur travel experts are just a phone call away.\u201D'}</p>
          <div className="flex gap-5 justify-center flex-wrap">
            <a href="tel:+917018599060" className="btn-accent text-sm px-10 py-4">
              <FaPhone /> Call Now
            </a>
            <a href="https://wa.me/917018599060" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm px-10 py-4">
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
