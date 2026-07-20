import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { FiMapPin, FiClock, FiBarChart2, FiCalendar, FiCheck, FiX } from 'react-icons/fi'
import { FaMountain } from 'react-icons/fa'
import FAQ from '../components/FAQ'
import { destinations } from '../data/siteData'

export default function DestinationDetail() {
  const { slug } = useParams()
  const dest = destinations.find((d) => d.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!dest) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center">
        <div>
          <h2 className="mb-5 font-heading text-2xl">Destination not found</h2>
          <Link to="/destinations" className="btn-primary">Back to Destinations</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[550px] max-md:h-[400px] overflow-hidden">
        <img src={dest.image} alt={dest.name} loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-primary/10" />
        <div className="absolute bottom-16 left-0 right-0 px-8" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span className="inline-block px-4 py-1.5 bg-accent text-primary font-body text-[0.65rem] font-bold rounded-sm tracking-wider uppercase mb-4">
            {dest.difficulty}
          </span>
          <h1 className="text-white text-[clamp(2rem,5vw,3.5rem)] mb-3 font-heading">{dest.name}</h1>
          <div className="flex items-center gap-2 text-white/50 text-lg font-light">
            <FiMapPin className="text-accent" /> {dest.location}
          </div>
        </div>
      </section>

      <section className="py-32 dark:bg-gray-900">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-[1fr_380px] gap-10 items-start max-xl:grid-cols-1">
            {/* Main */}
            <div>
              {/* Info Grid */}
              <div className="grid grid-cols-4 gap-4 p-7 bg-white dark:bg-gray-800 rounded-lg shadow-premium border border-gray-100/80 dark:border-gray-700/50 mb-12 max-md:grid-cols-2 max-sm:grid-cols-1" data-aos="fade-up">
                {[
                  [<FaMountain />, 'Altitude', dest.altitude],
                  [<FiClock />, 'Duration', dest.duration],
                  [<FiBarChart2 />, 'Difficulty', dest.difficulty],
                  [<FiCalendar />, 'Best Time', dest.bestTime],
                ].map(([Icon, label, value], i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="text-accent text-lg shrink-0" />
                    <div>
                      <span className="block text-[0.65rem] text-gray-400 dark:text-gray-500 uppercase tracking-wider font-body">{label}</span>
                      <strong className="block font-body text-sm font-semibold">{value}</strong>
                    </div>
                  </div>
                ))}
              </div>

              {/* About */}
              <div className="mb-12" data-aos="fade-up">
                <h2 className="text-xl mb-5 pl-5 relative before:absolute before:left-0 before:top-1 before:w-[3px] before:h-full before:bg-accent before:rounded-sm font-heading">About {dest.name}</h2>
                <p className="text-gray-500 leading-relaxed dark:text-gray-400 font-light">{dest.description}</p>
              </div>

              {/* Itinerary */}
              <div className="mb-12" data-aos="fade-up">
                <h2 className="text-xl mb-6 pl-5 relative before:absolute before:left-0 before:top-1 before:w-[3px] before:h-full before:bg-accent before:rounded-sm font-heading">Itinerary</h2>
                <div className="pl-8 relative before:absolute before:left-[7px] before:top-0 before:bottom-0 before:w-[1px] before:bg-gray-200 dark:before:bg-gray-700">
                  {dest.itinerary.map((day, i) => (
                    <div key={i} className="relative pb-8 last:pb-0">
                      <div className="absolute left-[-32px] top-1 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-[2px] border-accent" />
                      <span className="font-body text-[0.7rem] font-bold text-accent uppercase tracking-wider">Day {day.day}</span>
                      <h4 className="text-[1.05rem] mt-1.5 mb-1.5 font-heading font-bold">{day.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed dark:text-gray-400 font-light">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="mb-12" data-aos="fade-up">
                <h2 className="text-xl mb-6 pl-5 relative before:absolute before:left-0 before:top-1 before:w-[3px] before:h-full before:bg-accent before:rounded-sm font-heading">Gallery</h2>
                <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                  {dest.gallery.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden aspect-[16/10]">
                      <img src={img} alt={`${dest.name} ${i + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Included / Excluded */}
              <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1 mb-12" data-aos="fade-up">
                <div>
                  <h2 className="text-xl mb-5 pl-5 relative before:absolute before:left-0 before:top-1 before:w-[3px] before:h-full before:bg-accent before:rounded-sm font-heading">What's Included</h2>
                  <ul className="flex flex-col gap-3">
                    {dest.included.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400 font-light"><FiCheck className="text-accent shrink-0" /> {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl mb-5 pl-5 relative before:absolute before:left-0 before:top-1 before:w-[3px] before:h-full before:bg-accent before:rounded-sm font-heading">What's Excluded</h2>
                  <ul className="flex flex-col gap-3">
                    {dest.excluded.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-gray-400 font-light"><FiX className="text-danger shrink-0" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQ */}
              <div data-aos="fade-up">
                <h2 className="text-xl mb-5 pl-5 relative before:absolute before:left-0 before:top-1 before:w-[3px] before:h-full before:bg-accent before:rounded-sm font-heading">FAQs</h2>
                <FAQ faqs={dest.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="xl:sticky xl:top-24" data-aos="fade-left">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-premium-lg overflow-hidden border border-gray-100/80 dark:border-gray-700/50">
                <div className="text-center py-8 bg-navy text-white">
                  <h2 className="text-accent text-xl font-heading font-bold">{dest.name}</h2>
                  <span className="text-sm text-white/40 font-light">{dest.location}</span>
                </div>
                <div className="p-7 flex flex-col gap-4 border-b border-gray-100/80 dark:border-gray-700/50">
                  {[['Duration', dest.duration], ['Difficulty', dest.difficulty], ['Altitude', dest.altitude], ['Best Time', dest.bestTime]].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm dark:text-gray-400 font-light">{label}</span>
                      <strong className="font-body text-sm font-semibold">{value}</strong>
                    </div>
                  ))}
                </div>
                <div className="p-7">
                  <Link to={`/booking/${dest.slug}`} className="btn-primary w-full justify-center">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
