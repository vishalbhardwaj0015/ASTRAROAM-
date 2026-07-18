import Gallery from '../components/Gallery'

export default function GalleryPage() {
  return (
    <div>
      <section className="relative h-[350px] max-md:h-[280px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&h=500&fit=crop" alt="Gallery" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-primary/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5" data-aos="fade-up">
          <h1 className="text-white text-[clamp(2rem,5vw,3rem)] mb-3">Our Gallery</h1>
          <p className="text-white/70 text-lg max-w-lg">A visual journey through the Himalayas captured by our travelers</p>
        </div>
      </section>
      <div className="pt-10 dark:bg-gray-900">
        <Gallery />
      </div>
    </div>
  )
}
