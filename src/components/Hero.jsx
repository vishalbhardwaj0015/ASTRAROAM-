import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { FiChevronDown } from 'react-icons/fi'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.3,
      })
      gsap.from('.hero-subtitle', {
        y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.6,
      })
      gsap.from('.hero-buttons', {
        y: 30, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.9,
      })
      gsap.from('.hero-scroll', {
        opacity: 0, duration: 1, delay: 1.5,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&h=1080&fit=crop"
          alt="Trekker exploring Himalayan mountains"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/60 to-primary/30" />
      </div>

      {/* Mountain SVGs */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="rgba(27,94,32,0.3)" d="M0,192L48,186.7C96,181,192,171,288,176C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
        <svg viewBox="0 0 1440 320" className="w-full h-auto -mt-10">
          <path fill="rgba(11,29,42,0.5)" d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      {/* Clouds */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-[15%] left-[-10%] w-[300px] h-[60px] bg-white/5 rounded-full blur-2xl animate-float-cloud" />
        <div className="absolute top-[30%] right-[-5%] w-[200px] h-[40px] bg-white/5 rounded-full blur-2xl animate-float-cloud-2" />
        <div className="absolute top-[20%] left-[40%] w-[250px] h-[50px] bg-white/5 rounded-full blur-2xl animate-float-cloud-3" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-5 pt-20 w-full">
        <div className="inline-block font-heading text-xs font-bold tracking-[4px] uppercase text-accent mb-5 px-5 py-2 border border-accent/30 rounded-full bg-accent/[0.08]">
          ASTRAROAM – Travel Beyond Limits
        </div>
        <h1 className="hero-title font-heading font-black text-white leading-[1.05] mb-6 tracking-tight" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
          EXPLORE<br />
          <span className="bg-gradient-to-r from-accent to-[#c0e862] bg-clip-text text-transparent">
            HIMACHAL PRADESH
          </span><br />
          & UTTARAKHAND
        </h1>
        <p className="hero-subtitle text-white/70 max-w-[550px] mb-10 leading-relaxed" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
          ASTRAROAM is a modern tour & travel platform that helps you discover stunning destinations, explore curated packages, and plan unforgettable Himalayan adventures — all in one place.
        </p>
        <div className="hero-buttons flex gap-4 flex-wrap">
          <Link to="/destinations" className="btn-primary">Explore Tours</Link>
          <Link to="/booking" className="btn-outline">Book Now</Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer text-white/50 text-xs font-heading tracking-widest uppercase transition-colors hover:text-accent"
        onClick={scrollToContent}
      >
        <span>Scroll Down</span>
        <FiChevronDown className="text-2xl animate-bounce-scroll" />
      </div>
    </section>
  )
}
