import { useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'
import { pics } from '../data/images'

const galleryImages = [
  ...pics.map((p, i) => ({ src: p.src, full: p.src, alt: `ASTRAROAM Trip ${i + 1}` })),
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop', alt: 'Mountain peaks at sunrise' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=1080&fit=crop', alt: 'Dramatic mountain landscape' },
  { src: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1920&h=1080&fit=crop', alt: 'Valley with clouds' },
  { src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&h=1080&fit=crop', alt: 'Serene mountain lake' },
  { src: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&h=600&fit=crop', full: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1920&h=1080&fit=crop', alt: 'Starlit night sky' },
]

const sizes = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
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
    <section className="py-20 dark:bg-gray-900">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="section-tag">Gallery</span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] mb-4 dark:text-gray-100">Captured Moments</h2>
          <p className="text-gray dark:text-gray-400 text-lg max-w-xl mx-auto">
            Explore the breathtaking landscapes and unforgettable experiences from our journeys
          </p>
        </div>

        <div className="grid grid-cols-4 auto-rows-[220px] gap-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${sizes[i] || ''} max-md:!col-span-1 max-md:!row-span-1`}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              {/* Zoom icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                <FiZoomIn className="text-xl" />
              </div>
              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-heading font-semibold">{img.alt}</p>
                <p className="text-white/50 text-xs mt-0.5">Click to view full size</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center animate-fade-in" onClick={closeLightbox}>
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white cursor-pointer transition-all hover:bg-accent hover:text-navy hover:border-accent"
            onClick={closeLightbox}
          >
            <FiX className="text-xl" />
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white cursor-pointer transition-all hover:bg-white/20 hover:text-accent"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white cursor-pointer transition-all hover:bg-white/20 hover:text-accent"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
          >
            <FiChevronRight className="text-2xl" />
          </button>
          <div className="text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[currentIndex].full}
              alt={galleryImages[currentIndex].alt}
              className="max-w-[85vw] max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-white/60 text-sm mt-4 font-heading">
              {galleryImages[currentIndex].alt}
              <span className="text-white/30 ml-2">{currentIndex + 1} / {galleryImages.length}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
