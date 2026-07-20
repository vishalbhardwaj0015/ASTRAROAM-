import Gallery from '../components/Gallery'

export default function GalleryPage() {
  return (
    <div>
      <section className="relative h-[400px] max-md:h-[300px] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&h=500&fit=crop" alt="Gallery" loading="eager" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/95" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5" data-aos="fade-up">
          <span className="section-tag">Visual Journey</span>
          <h1 className="text-white text-[clamp(2rem,5vw,3.5rem)] mb-3 mt-3 font-heading">Our Gallery</h1>
          <p className="text-white/45 text-lg max-w-lg font-light">A visual journey through the Himalayas captured by our travelers</p>
        </div>
      </section>
      <div className="pt-16 dark:bg-gray-900">
        <Gallery />
      </div>
    </div>
  )
}
