import { Link } from 'react-router-dom'
import { FiMapPin, FiClock, FiBarChart2, FiArrowRight } from 'react-icons/fi'

export default function DestinationCard({ destination }) {
  const { slug, name, location, shortDescription, duration, difficulty, image } = destination

  return (
    <div className="group premium-card" data-aos="fade-up">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
        {/* Difficulty badge */}
        <div className="absolute top-5 left-5">
          <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white font-body text-[0.65rem] font-medium rounded-sm tracking-wider uppercase border border-white/15">
            {difficulty}
          </span>
        </div>
        {/* Location at bottom */}
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-white font-heading text-xl font-bold mb-1">{name}</h3>
          <div className="flex items-center gap-1.5 text-white/60 text-xs font-body">
            <FiMapPin className="text-accent" /> {location}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2 font-light">{shortDescription}</p>
        <div className="flex items-center gap-5 mb-5 pb-5 border-b border-gray-100 dark:border-gray-700/50">
          <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs font-body">
            <FiClock className="text-accent/60" /> {duration}
          </span>
          <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs font-body">
            <FiBarChart2 className="text-accent/60" /> {difficulty}
          </span>
        </div>
        <Link to={`/destination/${slug}`} className="inline-flex items-center gap-2 text-accent text-sm font-heading font-semibold tracking-wide transition-all duration-300 group-hover:gap-3">
          View Details <FiArrowRight className="text-xs" />
        </Link>
      </div>
    </div>
  )
}
