import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { destinations, treks } from '../data/siteData'
import { FiSend } from 'react-icons/fi'

export default function BookingForm() {
  const { destination } = useParams()
  const allOptions = [
    ...destinations.map((d) => ({ name: d.name, type: 'Destination' })),
    ...treks.map((t) => ({ name: t.name, type: 'Trek' })),
  ]

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    destination: destination ? decodeURIComponent(destination).replace(/-/g, ' ') : '',
    people: '',
    date: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim()) errs.phone = 'Phone is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = 'Enter valid 10-digit phone number'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = 'Enter valid email'
    if (!form.destination) errs.destination = 'Select a destination'
    if (!form.people || form.people < 1) errs.people = 'Enter number of people'
    if (!form.date) errs.date = 'Select travel date'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
      setForm({ name: '', phone: '', email: '', destination: '', people: '', date: '', message: '' })
    }
  }

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const today = new Date().toISOString().split('T')[0]

  const inputClass = (field) =>
    `w-full px-4 py-3.5 border-2 rounded-xl font-body text-sm text-navy transition-all duration-300 bg-off-white focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 ${
      errors[field] ? 'border-danger' : 'border-gray-100'
    }`

  return (
    <div className="bg-white rounded-3xl p-10 shadow-glass-lg" data-aos="fade-up">
      {submitted && (
        <div className="text-center p-8 mb-8 bg-primary/5 border-2 border-primary/20 rounded-2xl animate-slide-up">
          <div className="w-15 h-15 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4" style={{width:'60px',height:'60px'}}>
            ✓
          </div>
          <h3 className="text-xl text-primary mb-2">Booking Submitted!</h3>
          <p className="text-gray">We'll contact you shortly to confirm your adventure.</p>
        </div>
      )}

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div className="flex flex-col gap-1.5">
            <label className="font-heading font-semibold text-sm text-navy">Full Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={inputClass('name')}
            />
            {errors.name && <span className="text-danger text-xs font-medium">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-heading font-semibold text-sm text-navy">Phone Number *</label>
            <input
              type="tel"
              placeholder="10-digit phone number"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={inputClass('phone')}
            />
            {errors.phone && <span className="text-danger text-xs font-medium">{errors.phone}</span>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div className="flex flex-col gap-1.5">
            <label className="font-heading font-semibold text-sm text-navy">Email Address *</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={inputClass('email')}
            />
            {errors.email && <span className="text-danger text-xs font-medium">{errors.email}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-heading font-semibold text-sm text-navy">Destination / Trek *</label>
            <select
              value={form.destination}
              onChange={(e) => handleChange('destination', e.target.value)}
              className={inputClass('destination')}
            >
              <option value="">Select destination</option>
              {allOptions.map((opt, i) => (
                <option key={i} value={opt.name}>{opt.name} ({opt.type})</option>
              ))}
            </select>
            {errors.destination && <span className="text-danger text-xs font-medium">{errors.destination}</span>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          <div className="flex flex-col gap-1.5">
            <label className="font-heading font-semibold text-sm text-navy">Number of People *</label>
            <input
              type="number"
              min="1"
              max="50"
              placeholder="How many travelers?"
              value={form.people}
              onChange={(e) => handleChange('people', e.target.value)}
              className={inputClass('people')}
            />
            {errors.people && <span className="text-danger text-xs font-medium">{errors.people}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-heading font-semibold text-sm text-navy">Travel Date *</label>
            <input
              type="date"
              min={today}
              value={form.date}
              onChange={(e) => handleChange('date', e.target.value)}
              className={inputClass('date')}
            />
            {errors.date && <span className="text-danger text-xs font-medium">{errors.date}</span>}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-heading font-semibold text-sm text-navy">Message (Optional)</label>
          <textarea
            rows="4"
            placeholder="Any special requirements or questions..."
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="w-full px-4 py-3.5 border-2 border-gray-100 rounded-xl font-body text-sm text-navy transition-all duration-300 bg-off-white focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 resize-y min-h-[100px]"
          />
        </div>

        <button type="submit" className="btn-primary self-start mt-2">
          Submit Booking <FiSend />
        </button>
      </form>
    </div>
  )
}
