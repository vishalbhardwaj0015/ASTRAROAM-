import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { destinations, treks } from '../data/siteData'
import { API_URL } from '../config/api'
import { FaMountain, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaStar, FaShieldAlt, FaHeadset, FaMapMarkedAlt } from 'react-icons/fa'
import { FiSend, FiUsers, FiCalendar, FiMapPin, FiCheck } from 'react-icons/fi'

const allOptions = [
  ...destinations.map((d) => d.name),
  ...treks.map((t) => t.name),
  'Custom Destination',
]

const travelTypes = ['Trekking', 'Tour Package', 'Road Trip', 'Weekend Getaway', 'Honeymoon', 'Group Trip', 'Family Vacation']

const budgetRanges = [
  'Under ₹5,000',
  '₹5,000 – ₹10,000',
  '₹10,000 – ₹20,000',
  '₹20,000 – ₹50,000',
  '₹50,000+',
  'Flexible / Discuss Later',
]

export default function BookingForm() {
  const { destination } = useParams()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    dreamDestination: destination ? decodeURIComponent(destination).replace(/-/g, ' ') : '',
    travelType: '',
    people: '',
    date: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim()) errs.phone = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = 'Enter valid 10-digit number'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = 'Enter valid email'
    if (!form.dreamDestination) errs.dreamDestination = 'Select your dream destination'
    if (!form.travelType) errs.travelType = 'Select travel type'
    if (!form.people || form.people < 1) errs.people = 'Enter group size'
    if (!form.date) errs.date = 'Select travel date'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const sendWhatsApp = (data) => {
    const msg = encodeURIComponent(
      `*NEW BOOKING REQUEST — ASTRAROAM*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Email: ${data.email}\n\n` +
      `Dream Destination: ${data.dreamDestination}\n` +
      `Travel Type: ${data.travelType}\n` +
      `Group Size: ${data.people} person(s)\n` +
      `Travel Date: ${data.date}\n` +
      `Budget: ${data.budget || 'Not specified'}\n\n` +
      `Special Requirements:\n${data.message || 'None'}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `Sent from ASTRAROAM Website`
    )
    window.open(`https://wa.me/917018599060?text=${msg}`, '_blank')
    setTimeout(() => {
      window.open(`https://wa.me/919805556015?text=${msg}`, '_blank')
    }, 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      sendWhatsApp(form)
      try {
        await fetch(`${API_URL}/api/booking`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
      } catch (err) {
        console.error('API error:', err)
      }
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 6000)
      setForm({ name: '', phone: '', email: '', dreamDestination: '', travelType: '', people: '', date: '', budget: '', message: '' })
      setErrors({})
    }
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const today = new Date().toISOString().split('T')[0]

  const inputClass = (field) =>
    `w-full px-5 py-4 border rounded-sm font-body text-sm text-navy dark:text-gray-100 transition-all duration-300 bg-off-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:border-accent dark:focus:border-accent focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-accent/10 ${errors[field] ? 'border-danger' : 'border-gray-200 dark:border-gray-700'}`

  return (
    <div data-aos="fade-up">
      {submitted && (
        <div className="text-center p-12 mb-8 bg-accent/[0.04] dark:bg-gray-800 border border-accent/15 dark:border-accent/20 rounded-lg animate-slide-up">
          <div className="w-16 h-16 rounded-sm bg-accent text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-5 shadow-gold">
            <FiCheck />
          </div>
          <h3 className="text-2xl text-navy dark:text-gray-100 font-heading font-bold mb-2">Booking Request Sent!</h3>
          <p className="text-gray-500 dark:text-gray-300 text-base max-w-md mx-auto font-light">Your dream trip details have been shared with our team. We'll contact you within 2 hours.</p>
          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-accent font-medium">
            <FaWhatsapp className="text-lg" /> Sent to +91 70185 99060 & +91 98055 56015
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-lg p-10 shadow-premium border border-gray-100/80 dark:border-gray-700/50">
        <div className="mb-8">
          <span className="section-tag">Plan Your Trip</span>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] mt-3 mb-2 dark:text-gray-100 font-heading">Tell Us Your Dream</h2>
          <p className="text-gray-500 dark:text-gray-300 text-sm font-light">Share your travel vision and we'll make it happen.</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Personal Info */}
          <div>
            <h4 className="font-body font-semibold text-navy dark:text-gray-100 text-xs mb-3 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-sm bg-accent text-primary text-[9px] flex items-center justify-center font-bold">1</span>
              Personal Information
            </h4>
            <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
              <div className="flex flex-col gap-1.5">
                <label className="font-body font-medium text-[0.7rem] text-gray-500 dark:text-gray-300 uppercase tracking-wider">Full Name *</label>
                <input type="text" placeholder="Your full name" value={form.name} onChange={(e) => handleChange('name', e.target.value)} className={inputClass('name')} />
                {errors.name && <span className="text-danger text-xs font-medium">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-body font-medium text-[0.7rem] text-gray-500 dark:text-gray-300 uppercase tracking-wider">Phone Number *</label>
                <input type="tel" placeholder="10-digit mobile" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} className={inputClass('phone')} />
                {errors.phone && <span className="text-danger text-xs font-medium">{errors.phone}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-body font-medium text-[0.7rem] text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email *</label>
                <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className={inputClass('email')} />
                {errors.email && <span className="text-danger text-xs font-medium">{errors.email}</span>}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-700/50" />

          {/* Trip Details */}
          <div>
            <h4 className="font-body font-semibold text-navy dark:text-gray-100 text-xs mb-3 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-sm bg-accent text-primary text-[9px] flex items-center justify-center font-bold">2</span>
              Your Dream Trip
            </h4>
            <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
              <div className="flex flex-col gap-1.5">
                <label className="font-body font-medium text-[0.7rem] text-gray-500 dark:text-gray-300 uppercase tracking-wider">Dream Destination *</label>
                <select value={form.dreamDestination} onChange={(e) => handleChange('dreamDestination', e.target.value)} className={inputClass('dreamDestination')}>
                  <option value="">Where do you want to go?</option>
                  {allOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.dreamDestination && <span className="text-danger text-xs font-medium">{errors.dreamDestination}</span>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-body font-medium text-[0.7rem] text-gray-500 dark:text-gray-300 uppercase tracking-wider">Travel Type *</label>
                <select value={form.travelType} onChange={(e) => handleChange('travelType', e.target.value)} className={inputClass('travelType')}>
                  <option value="">What kind of trip?</option>
                  {travelTypes.map((t, i) => (
                    <option key={i} value={t}>{t}</option>
                  ))}
                </select>
                {errors.travelType && <span className="text-danger text-xs font-medium">{errors.travelType}</span>}
              </div>
            </div>
          </div>

          {/* Travel Details */}
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            <div className="flex flex-col gap-1.5">
              <label className="font-body font-medium text-[0.7rem] text-gray-500 dark:text-gray-300 uppercase tracking-wider flex items-center gap-1"><FiUsers className="text-accent" /> Group Size *</label>
              <input type="number" min="1" max="50" placeholder="How many travelers?" value={form.people} onChange={(e) => handleChange('people', e.target.value)} className={inputClass('people')} />
              {errors.people && <span className="text-danger text-xs font-medium">{errors.people}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-body font-medium text-[0.7rem] text-gray-500 dark:text-gray-300 uppercase tracking-wider flex items-center gap-1"><FiCalendar className="text-accent" /> Travel Date *</label>
              <input type="date" min={today} value={form.date} onChange={(e) => handleChange('date', e.target.value)} className={inputClass('date')} />
              {errors.date && <span className="text-danger text-xs font-medium">{errors.date}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-body font-medium text-[0.7rem] text-gray-500 dark:text-gray-300 uppercase tracking-wider">Budget Range</label>
              <select value={form.budget} onChange={(e) => handleChange('budget', e.target.value)} className={inputClass('budget')}>
                <option value="">Select budget (optional)</option>
                {budgetRanges.map((b, i) => (
                  <option key={i} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Special Requirements */}
          <div className="flex flex-col gap-1.5">
            <label className="font-body font-medium text-[0.7rem] text-gray-500 dark:text-gray-300 uppercase tracking-wider">Special Requirements / Dream Details</label>
            <textarea
              rows="4"
              placeholder="Tell us about your dream trip — preferred activities, dietary needs, accommodation style..."
              value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="w-full px-5 py-4 border border-gray-200 dark:border-gray-700 rounded-sm font-body text-sm text-navy dark:text-gray-100 transition-all duration-300 bg-off-white dark:bg-gray-800 focus:outline-none focus:border-accent dark:focus:border-accent focus:bg-white dark:focus:bg-gray-700 focus:ring-2 focus:ring-accent/10 resize-y min-h-[100px]"
            />
          </div>

          <button type="submit" className="btn-primary self-start text-sm px-10 py-4 mt-2">
            Send Booking Request <FiSend />
          </button>
        </form>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-4 gap-4 mt-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {[
          [FaShieldAlt, 'Safe & Secure', 'Verified & trusted platform'],
          [FaHeadset, '24/7 Support', 'Round-the-clock assistance'],
          [FaStar, 'Premium Quality', 'Handpicked experiences'],
          [FaMapMarkedAlt, 'Expert Guides', 'Certified local professionals'],
        ].map(([Icon, title, desc], i) => (
          <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-sm border border-gray-100/80 dark:border-gray-700/50" data-aos="fade-up" data-aos-delay={i * 80}>
            <div className="w-10 h-10 rounded-sm bg-accent/[0.08] text-accent flex items-center justify-center text-base shrink-0">
              <Icon />
            </div>
            <div>
              <h5 className="font-body font-semibold text-xs text-navy dark:text-gray-100">{title}</h5>
              <p className="text-gray-500 dark:text-gray-400 text-[10px] font-light">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
