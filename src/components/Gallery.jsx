import { useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop', alt: 'Mountain peaks at sunrise' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=1080&fit=crop', alt: 'Dramatic mountain landscape' },
  { src: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1920&h=1080&fit=crop', alt: 'Snow-capped Himalayan peaks' },
  { src: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920&h=1080&fit=crop', alt: 'Valley with clouds' },
  { src: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&h=1080&fit=crop', alt: 'Misty mountain trail' },
  { src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&h=1080&fit=crop', alt: 'Serene mountain lake' },
  { src: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&h=1080&fit=crop', alt: 'Village in the mountains' },
  { src: 'https://images.unsplash.com/photo-1595814294526-84287e1bde23?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1595814294526-84287e1bde23?w=1920&h=1080&fit=crop', alt: 'Himalayan village view' },
  { src: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1920&h=1080&fit=crop', alt: 'Starlit night sky' },
]

const spanPatterns = [
  'col-span-2 row-span-2',
  'row-span-2',
  '',
  '',
  'col-span-2',
]

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const navigate = (dir) => {
    setCurrentIndex((prev) => (prev + dir + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-24">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="section-tag">Gallery</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4">Captured Moments</h2>
          <p className="text-gray text-lg max-w-xl mx-auto">
            Explore the breathtaking landscapes and unforgettable experiences from our journeys
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 [grid-auto-rows:200px] max-md:grid-cols-2 max-md:[grid-auto-rows:160px] max-sm:grid-cols-1 max-sm:[grid-auto-rows:220px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${spanPatterns[i]} max-sm:col-span-1 max-sm:row-span-1`}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-12 h-12 rounded-full bg-white text-navy font-bold text-2xl flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-300">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center animate-fade-in" onClick={closeLightbox}>
          <button
            className="absolute top-6 right-6 bg-transparent border-none text-white text-3xl cursor-pointer p-2 transition-colors hover:text-accent hover:rotate-90"
            onClick={closeLightbox}
          >
            <FiX />
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 border-none text-white text-3xl p-4 rounded-full transition-all hover:bg-accent/30 hover:text-accent"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
          >
            <FiChevronLeft />
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 border-none text-white text-3xl p-4 rounded-full transition-all hover:bg-accent/30 hover:text-accent"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
          >
            <FiChevronRight />
          </button>
          <img
            src={galleryImages[currentIndex].full}
            alt={galleryImages[currentIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
