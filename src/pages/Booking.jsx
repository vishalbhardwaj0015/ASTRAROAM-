import BookingForm from '../components/BookingForm'
import { FiPhone, FiMail, FiClock } from 'react-icons/fi'

export default function Booking() {
  return (
    <div>
      <section className="relative h-[350px] max-md:h-[280px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&h=500&fit=crop" alt="Book Your Adventure" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5" data-aos="fade-up">
          <h1 className="text-white text-[clamp(2rem,5vw,3rem)] mb-3">Book Your Adventure</h1>
          <p className="text-white/70 text-lg max-w-lg">Fill out the form below and we'll craft your perfect Himalayan experience</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-[1fr_380px] gap-10 items-start max-xl:grid-cols-1">
            <BookingForm />

            <div data-aos="fade-left">
              <div className="bg-white rounded-2xl p-8 shadow-glass-md border border-gray-100 mb-6">
                <h3 className="text-xl mb-3">Need Help Booking?</h3>
                <p className="text-gray text-sm leading-relaxed mb-6">Our travel experts are available to help you plan the perfect trip.</p>
                <div className="flex flex-col gap-4.5">
                  {[
                    [<FiPhone />, 'Call Us', <div><a href="tel:+917018599060" className="text-navy text-[0.95rem] font-medium hover:text-primary block">+91 70185 99060</a><a href="tel:+919805556015" className="text-navy text-[0.95rem] font-medium hover:text-primary block">+91 98055 56015</a></div>],
                    [<FiMail />, 'Email Us', <a href="mailto:info@astraroam.com" className="text-navy text-[0.95rem] font-medium hover:text-primary">info@astraroam.com</a>],
                    [<FiClock />, 'Working Hours', <p className="text-navy text-[0.95rem] font-medium">Mon – Sat: 9:00 AM – 7:00 PM</p>],
                  ].map(([Icon, label, content], i) => (
                    <div key={i} className="flex gap-3.5">
                      <Icon className="text-primary text-lg mt-0.5 shrink-0" />
                      <div>
                        <span className="block text-[0.72rem] text-gray uppercase tracking-wider mb-0.5">{label}</span>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-glass-md border border-gray-100">
                <h3 className="text-xl mb-5">Booking Process</h3>
                <div className="flex flex-col gap-5">
                  {[
                    ['1', 'Submit Form', 'Fill in your travel details and preferences'],
                    ['2', 'Get Quote', 'Receive a customized itinerary within 24 hours'],
                    ['3', 'Confirm & Pay', 'Confirm your booking with a small advance'],
                    ['4', 'Travel!', 'Pack your bags and start your adventure'],
                  ].map(([num, title, desc]) => (
                    <div key={num} className="flex gap-3.5 items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center font-heading font-bold text-xs shrink-0">
                        {num}
                      </div>
                      <div>
                        <h4 className="text-[0.95rem] mb-0.5">{title}</h4>
                        <p className="text-gray text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
