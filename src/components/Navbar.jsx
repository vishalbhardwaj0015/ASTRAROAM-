import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaMountain } from 'react-icons/fa'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/destinations', label: 'Destinations' },
  { path: '/treks', label: 'Treks' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        scrolled
          ? 'h-[70px] bg-navy/95 backdrop-blur-xl shadow-lg shadow-black/20'
          : 'h-20 bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 z-[1001]">
          <FaMountain className="text-accent text-2xl" />
          <span className="font-heading font-extrabold text-xl text-white tracking-widest">
            ASTRA<span className="text-accent">ROAM</span>
          </span>
        </Link>

        <div
          className={`flex items-center gap-2 ${
            mobileOpen
              ? 'fixed inset-0 bg-navy/95 backdrop-blur-xl flex-col justify-center gap-5 opacity-100 visible'
              : 'max-lg:opacity-0 max-lg:invisible max-lg:fixed max-lg:inset-0 max-lg:bg-navy/95 max-lg:backdrop-blur-xl max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:gap-5'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 tracking-wide ${
                location.pathname === link.path
                  ? 'text-accent bg-accent/15'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              } ${mobileOpen ? 'text-2xl max-lg:text-2xl' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="btn-primary btn-sm mt-4 max-lg:mt-6"
          >
            Book Now
          </Link>
        </div>

        <button
          className="lg:hidden bg-transparent border-none text-white text-2xl cursor-pointer z-[1001] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  )
}
