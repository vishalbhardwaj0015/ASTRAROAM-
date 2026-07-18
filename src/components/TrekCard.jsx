import { Link } from 'react-router-dom'
import { FiArrowRight, FiMap, FiClock, FiCalendar } from 'react-icons/fi'
import { FaMountain } from 'react-icons/fa'

export default function TrekCard({ trek }) {
  const { slug, name, location, altitude, distance, difficulty, bestTime, duration, image, highlights } = trek

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glass-xl" data-aos="fade-up">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-navy/80" />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <span className="px-3.5 py-1 bg-accent/90 text-navy font-heading text-[0.7rem] font-bold rounded-full tracking-wider uppercase">
            {difficulty}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold mb-1">{name}</h3>
          <p className="text-white/70 text-sm">{location}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="flex items-center gap-2.5">
            <FaMountain className="text-primary text-lg shrink-0" />
            <div>
              <span className="block text-[0.7rem] text-gray dark:text-gray-400 uppercase tracking-wider">Altitude</span>
              <span className="block font-heading font-semibold text-sm text-navy dark:text-gray-100">{altitude}</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <FiMap className="text-primary text-lg shrink-0" />
            <div>
              <span className="block text-[0.7rem] text-gray dark:text-gray-400 uppercase tracking-wider">Distance</span>
              <span className="block font-heading font-semibold text-sm text-navy dark:text-gray-100">{distance}</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <FiClock className="text-primary text-lg shrink-0" />
            <div>
              <span className="block text-[0.7rem] text-gray dark:text-gray-400 uppercase tracking-wider">Duration</span>
              <span className="block font-heading font-semibold text-sm text-navy dark:text-gray-100">{duration}</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <FiCalendar className="text-primary text-lg shrink-0" />
            <div>
              <span className="block text-[0.7rem] text-gray dark:text-gray-400 uppercase tracking-wider">Best Time</span>
              <span className="block font-heading font-semibold text-sm text-navy dark:text-gray-100">{bestTime}</span>
            </div>
          </div>
        </div>
        {highlights && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {highlights.map((h, i) => (
              <span key={i} className="px-3 py-1 bg-off-white dark:bg-gray-700 text-gray dark:text-gray-300 text-[0.72rem] font-medium rounded-full border border-gray-100 dark:border-gray-600">
                {h}
              </span>
            ))}
          </div>
        )}
        <Link to={`/booking/${slug}`} className="btn-accent btn-sm w-full justify-center">
          Book Trek <FiArrowRight />
        </Link>
      </div>
    </div>
  )
}
