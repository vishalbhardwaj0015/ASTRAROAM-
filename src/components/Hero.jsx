import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { FiChevronDown } from 'react-icons/fi'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.4,
      })
      gsap.from('.hero-title', {
        y: 50, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.6,
      })
      gsap.from('.hero-subtitle', {
        y: 30, opacity: 0, duration: 1, ease: 'power3.out', delay: 1.0,
      })
      gsap.from('.hero-buttons', {
        y: 20, opacity: 0, duration: 1, ease: 'power3.out', delay: 1.3,
      })
      gsap.from('.hero-stats', {
        y: 20, opacity: 0, duration: 1, ease: 'power3.out', delay: 1.6,
      })
      gsap.from('.hero-scroll', {
        opacity: 0, duration: 1, delay: 2.0,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section ref={heroRef} className="relative h-screen min-h-[750px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80"
          alt="Majestic Himalayan mountain range at golden hour"
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/90" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Floating accent line */}
      <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-accent/30 to-transparent z-10 max-lg:hidden" />

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-8 pt-28 lg:pt-24 w-full">
        <div className="max-w-[700px]">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-3 font-body text-[0.65rem] font-medium uppercase tracking-premium text-accent mb-8 mt-10 px-5 py-2.5 border border-accent/25 rounded-sm bg-accent/[0.06] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Premium Himalayan Experiences Since 2021
          </div>

          {/* Title */}
          <h1 className="hero-title font-heading text-white leading-[1.05] mb-7" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}>
            <span className="block text-white/90">Discover the</span>
            <span className="block mt-1">
              <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                Himalayas
              </span>
            </span>
            <span className="block text-white/90 mt-1">Like Never Before</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-white/55 max-w-[520px] mb-12 leading-relaxed font-light" style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)' }}>
            Curated luxury treks, bespoke itineraries, and unforgettable adventures across Himachal Pradesh & Uttarakhand — crafted for the discerning traveler.
          </p>

          {/* Buttons */}
          <div className="hero-buttons flex gap-5 flex-wrap mb-16">
            <Link to="/destinations" className="btn-accent">
              Explore Destinations
            </Link>
            <Link to="/booking" className="btn-outline">
              Plan Your Journey
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats flex gap-12 flex-wrap">
            {[
              ['500+', 'Happy Travelers'],
              ['50+', 'Curated Treks'],
              ['15+', 'Destinations'],
            ].map(([num, label]) => (
              <div key={label}>
                <span className="block font-heading text-2xl font-bold text-accent">{num}</span>
                <span className="text-white/40 text-xs font-body uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer text-white/30 text-[0.6rem] font-body tracking-premium uppercase transition-colors hover:text-accent"
        onClick={scrollToContent}
      >
        <span>Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-accent/50 to-transparent" />
      </div>

      {/* Right side floating element */}
      <div className="absolute right-8 bottom-24 z-20 max-lg:hidden">
        <div className="flex flex-col items-center gap-2 text-white/25 text-[0.55rem] font-body tracking-premium uppercase writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-accent/30" />
          <span>Astraroam</span>
        </div>
      </div>
    </section>
  )
}
