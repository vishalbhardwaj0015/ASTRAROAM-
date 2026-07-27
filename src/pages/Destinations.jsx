import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/siteData'

export default function Destinations() {
  return (
    <div>
      <section className="relative h-[400px] max-md:h-[300px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=500&fit=crop" alt="Destinations" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/95" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <span className="section-tag">Explore</span>
          <h1 className="text-white text-[clamp(2rem,5vw,3.5rem)] mb-3 mt-3 font-heading">Our Destinations</h1>
          <p className="text-white/45 text-lg max-w-lg font-light">{'\u201CHandpicked locations across the Himalayan belt for your perfect getaway.\u201D'}</p>
        </div>
      </section>
      <section className="py-32 dark:bg-gray-900">
        <div className="max-w-[1280px] mx-auto px-8">
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
