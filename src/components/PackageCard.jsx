import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

export default function PackageCard({ pkg }) {
  return (
    <div className="group premium-card" data-aos="fade-up">
      <div className="relative h-56 overflow-hidden">
        <img src={pkg.image} alt={pkg.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
        <div className="absolute top-5 left-5">
          <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white font-body text-[0.65rem] font-medium rounded-sm tracking-wider uppercase border border-white/15">
            {pkg.duration}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-navy dark:text-gray-100 mb-2">{pkg.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 font-light">{pkg.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5 pb-5 border-b border-gray-100 dark:border-gray-700/50">
          {pkg.destinations.map((d, i) => (
            <span key={i} className="px-3 py-1 bg-off-white dark:bg-gray-700/50 text-[0.7rem] font-medium text-navy dark:text-gray-200 rounded-sm border border-gray-100 dark:border-gray-600/50">
              {d}
            </span>
          ))}
        </div>
        <Link to="/booking" className="inline-flex items-center gap-2 text-accent text-sm font-heading font-semibold tracking-wide transition-all duration-300 group-hover:gap-3">
          Book Package <FiArrowRight className="text-xs" />
        </Link>
      </div>
    </div>
  )
}
