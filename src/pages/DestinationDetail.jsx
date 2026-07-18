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
          <h2 className="mb-4">Destination not found</h2>
          <Link to="/destinations" className="btn-primary">Back to Destinations</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <section className="relative h-[500px] max-md:h-[350px] overflow-hidden">
        <img src={dest.image} alt={dest.name} loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/10" />
        <div className="absolute bottom-16 left-0 right-0 px-5" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <span className="inline-block px-4 py-1.5 bg-accent text-navy font-heading text-[0.7rem] font-bold rounded-full tracking-wider uppercase mb-3">
            {dest.difficulty}
          </span>
          <h1 className="text-white text-[clamp(2rem,5vw,3.5rem)] mb-3">{dest.name}</h1>
          <div className="flex items-center gap-2 text-white/70 text-lg">
            <FiMapPin /> {dest.location}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-[1fr_380px] gap-10 items-start max-xl:grid-cols-1">
            {/* Main */}
            <div>
              <div className="grid grid-cols-4 gap-4 p-6 bg-white rounded-2xl shadow-glass-lg border border-gray-100 mb-10 max-md:grid-cols-2 max-sm:grid-cols-1" data-aos="fade-up">
                {[
                  [<FaMountain />, 'Altitude', dest.altitude],
                  [<FiClock />, 'Duration', dest.duration],
                  [<FiBarChart2 />, 'Difficulty', dest.difficulty],
                  [<FiCalendar />, 'Best Time', dest.bestTime],
                ].map(([Icon, label, value], i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="text-primary text-xl shrink-0" />
                    <div>
                      <span className="block text-[0.72rem] text-gray uppercase tracking-wider">{label}</span>
                      <strong className="block font-heading text-sm">{value}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-10" data-aos="fade-up">
                <h2 className="text-xl mb-5 pl-4 relative before:absolute before:left-0 before:top-1 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary before:to-accent before:rounded">About {dest.name}</h2>
                <p className="text-gray leading-relaxed">{dest.description}</p>
              </div>

              <div className="mb-10" data-aos="fade-up">
                <h2 className="text-xl mb-5 pl-4 relative before:absolute before:left-0 before:top-1 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary before:to-accent before:rounded">Itinerary</h2>
                <div className="pl-8 relative before:absolute before:left-2 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-100">
                  {dest.itinerary.map((day, i) => (
                    <div key={i} className="relative pb-7 last:pb-0">
                      <div className="absolute left-[-28px] top-1 w-[18px] h-[18px] rounded-full bg-white border-[3px] border-primary" />
                      <span className="font-heading text-[0.75rem] font-bold text-primary uppercase tracking-wider">Day {day.day}</span>
                      <h4 className="text-[1.05rem] mt-1 mb-1.5">{day.title}</h4>
                      <p className="text-gray text-sm leading-relaxed">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10" data-aos="fade-up">
                <h2 className="text-xl mb-5 pl-4 relative before:absolute before:left-0 before:top-1 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary before:to-accent before:rounded">Gallery</h2>
                <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                  {dest.gallery.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden aspect-[16/10]">
                      <img src={img} alt={`${dest.name} ${i + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1 mb-10" data-aos="fade-up">
                <div>
                  <h2 className="text-xl mb-5 pl-4 relative before:absolute before:left-0 before:top-1 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary before:to-accent before:rounded">What's Included</h2>
                  <ul className="flex flex-col gap-3">
                    {dest.included.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray"><FiCheck className="text-primary shrink-0" /> {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl mb-5 pl-4 relative before:absolute before:left-0 before:top-1 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary before:to-accent before:rounded">What's Excluded</h2>
                  <ul className="flex flex-col gap-3">
                    {dest.excluded.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-gray"><FiX className="text-danger shrink-0" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div data-aos="fade-up">
                <h2 className="text-xl mb-5 pl-4 relative before:absolute before:left-0 before:top-1 before:w-1 before:h-full before:bg-gradient-to-b before:from-primary before:to-accent before:rounded">FAQs</h2>
                <FAQ faqs={dest.faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="xl:sticky xl:top-24" data-aos="fade-left">
              <div className="bg-white rounded-2xl shadow-glass-xl overflow-hidden border border-gray-100">
                <div className="text-center py-7 bg-gradient-to-br from-navy to-navy-light text-white">
                  <span className="text-sm opacity-60">Starting from</span>
                  <h2 className="text-accent text-[2.2rem] font-heading my-1">₹{dest.price.toLocaleString()}</h2>
                  <span className="text-sm opacity-60">per person</span>
                </div>
                <div className="p-6 flex flex-col gap-3.5 border-b border-gray-100">
                  {[['Duration', dest.duration], ['Difficulty', dest.difficulty], ['Altitude', dest.altitude], ['Best Time', dest.bestTime]].map(([label, value]) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-gray text-sm">{label}</span>
                      <strong className="font-heading text-sm">{value}</strong>
                    </div>
                  ))}
                </div>
                <div className="p-6">
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
