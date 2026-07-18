import { Link } from 'react-router-dom'
import { FiMapPin, FiClock, FiBarChart2 } from 'react-icons/fi'

export default function DestinationCard({ destination }) {
  const { slug, name, location, shortDescription, duration, difficulty, image } = destination

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-xl hover:border-transparent" data-aos="fade-up">
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <div className="absolute top-4 left-4 px-3.5 py-1 bg-navy/70 backdrop-blur-md text-white font-heading text-[0.7rem] font-semibold rounded-full tracking-wider uppercase">
          {difficulty}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-primary text-xs font-medium mb-2">
          <FiMapPin /> {location}
        </div>
        <h3 className="text-xl font-bold text-navy dark:text-gray-100 mb-2">{name}</h3>
        <p className="text-gray dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{shortDescription}</p>
        <div className="flex gap-4 mb-5 pt-4 border-t border-gray-100 dark:border-gray-700">
          <span className="flex items-center gap-1.5 text-gray dark:text-gray-400 text-xs font-medium">
            <FiClock /> {duration}
          </span>
          <span className="flex items-center gap-1.5 text-gray dark:text-gray-400 text-xs font-medium">
            <FiBarChart2 /> {difficulty}
          </span>
        </div>
        <Link to={`/destination/${slug}`} className="btn-primary btn-sm w-full justify-center">
          View Details
        </Link>
      </div>
    </div>
  )
}
