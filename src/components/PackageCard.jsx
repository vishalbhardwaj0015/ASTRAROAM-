import { Link } from 'react-router-dom'

export default function PackageCard({ pkg }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glass-xl" data-aos="fade-up">
      <div className="relative h-52 overflow-hidden">
        <img src={pkg.image} alt={pkg.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white font-heading font-extrabold text-2xl">
          ₹{pkg.price.toLocaleString()} <span className="text-sm font-normal opacity-70">/ person</span>
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-accent/10 text-primary font-heading text-xs font-semibold rounded-full mb-3">
          {pkg.duration}
        </span>
        <h3 className="text-lg font-bold text-navy mb-2">{pkg.name}</h3>
        <p className="text-gray text-sm leading-relaxed mb-4">{pkg.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {pkg.destinations.map((d, i) => (
            <span key={i} className="px-2.5 py-1 bg-off-white text-[0.75rem] font-medium text-navy rounded-full border border-gray-100">
              {d}
            </span>
          ))}
        </div>
        <Link to="/booking" className="btn-primary btn-sm w-full justify-center">
          Book Package
        </Link>
      </div>
    </div>
  )
}
