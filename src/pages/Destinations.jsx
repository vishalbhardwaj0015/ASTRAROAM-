import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/siteData'

export default function Destinations() {
  return (
    <div>
      <section className="relative h-[350px] max-md:h-[280px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=500&fit=crop" alt="Destinations" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5" data-aos="fade-up">
          <h1 className="text-white text-[clamp(2rem,5vw,3rem)] mb-3">Our Destinations</h1>
          <p className="text-white/70 text-lg max-w-lg">Handpicked locations across the Himalayan belt for your perfect getaway</p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {destinations.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
