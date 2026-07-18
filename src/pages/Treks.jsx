import TrekCard from '../components/TrekCard'
import { treks } from '../data/siteData'

export default function Treks() {
  return (
    <div>
      <section className="relative h-[350px] max-md:h-[280px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&h=500&fit=crop" alt="Treks" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5" data-aos="fade-up">
          <h1 className="text-white text-[clamp(2rem,5vw,3rem)] mb-3">Trekking Adventures</h1>
          <p className="text-white/70 text-lg max-w-lg">Challenge yourself with our curated Himalayan treks for every skill level</p>
        </div>
      </section>
      <section className="py-24 dark:bg-gray-900">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
            {treks.map((t) => (
              <TrekCard key={t.id} trek={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
