import { Link } from 'react-router-dom'
import { FiArrowRight, FiMap, FiClock, FiCalendar, FiStar } from 'react-icons/fi'
import { FaMountain } from 'react-icons/fa'

export default function TrekCard({ trek }) {
  const { slug, name, location, altitude, distance, difficulty, bestTime, duration, image, highlights, price, originalPrice } = trek

  return (
    <div className="group premium-card" data-aos="fade-up">
      <div className="relative h-72 overflow-hidden">
        <img src={image} alt={name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        {/* Difficulty badge */}
        <div className="absolute top-5 left-5">
          <span className="px-4 py-1.5 bg-accent text-primary font-body text-[0.6rem] font-bold rounded-sm tracking-wider uppercase">
            {difficulty}
          </span>
        </div>
        {/* Price badge */}
        {price && (
          <div className="absolute top-5 right-5">
            <div className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1.5 rounded-sm font-body">
              <span className="text-[0.65rem] font-bold">₹{price.toLocaleString('en-IN')}</span>
              {originalPrice && (
                <span className="text-[0.55rem] line-through opacity-50 ml-1.5">₹{originalPrice.toLocaleString('en-IN')}</span>
              )}
              <span className="text-[0.5rem] block opacity-60 -mt-0.5">/person</span>
            </div>
          </div>
        )}
        {/* Name & Location */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-white font-heading text-xl font-bold mb-1.5">{name}</h3>
          <p className="text-white/50 text-xs font-body">{location}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-5">
          {[
            [FaMountain, 'Altitude', altitude],
            [FiMap, 'Distance', distance],
            [FiClock, 'Duration', duration],
            [FiCalendar, 'Best Time', bestTime],
          ].map(([Icon, label, value]) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="text-accent/50 text-sm shrink-0" />
              <div>
                <span className="block text-[0.6rem] text-gray-400 dark:text-gray-500 uppercase tracking-wider font-body">{label}</span>
                <span className="block font-body font-medium text-[0.8rem] text-navy dark:text-gray-100">{value}</span>
              </div>
            </div>
          ))}
        </div>
        {highlights && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {highlights.slice(0, 3).map((h, i) => (
              <span key={i} className="px-3 py-1 bg-accent/[0.06] text-accent-dark dark:text-accent text-[0.65rem] font-medium rounded-sm border border-accent/10">
                {h}
              </span>
            ))}
          </div>
        )}
        <Link to={`/booking/${slug}`} className="inline-flex items-center gap-2 text-accent text-sm font-heading font-semibold tracking-wide transition-all duration-300 group-hover:gap-3">
          Book This Trek <FiArrowRight className="text-xs" />
        </Link>
      </div>
    </div>
  )
}
