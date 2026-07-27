import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiSun, FiMoon, FiPhone } from 'react-icons/fi'
import { FaMountain, FaPhoneAlt } from 'react-icons/fa'
import logo from '../pics/logo.jpeg'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/destinations', label: 'Destinations' },
  { path: '/treks', label: 'Tours & Treks' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/about', label: 'About' },

]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { dark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
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
    <>
      {/* Top Info Bar - hides on scroll */}
      {/* <div className={`hidden lg:block w-full transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-[40px] opacity-100'
        } bg-primary-dark/80 border-b border-white/[0.04]`}>
        <div className="max-w-[1280px] mx-auto px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+917018599060" className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors text-[0.65rem] font-body tracking-wide">
              <FiPhone className="text-[0.6rem]" />
              <span>+91 70185 99060</span>
            </a>
            <a href="tel:+919805556015" className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors text-[0.65rem] font-body tracking-wide">
              <FiPhone className="text-[0.6rem]" />
              <span>+91 98055 56015</span>
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-white/30 text-[0.6rem] font-body uppercase tracking-wider">Manali, Himachal Pradesh</span>
            <div className="w-[1px] h-3 bg-white/10" />
            <span className="text-white/30 text-[0.6rem] font-body uppercase tracking-wider">Mon - Sat: 9AM - 7PM</span>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 flex items-center transition-all duration-500 ${scrolled
          ? 'top-0 h-[72px] bg-primary/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-premium border-b border-accent/10'
          : 'top-0 h-[78px] bg-gradient-to-b from-black/40 via-black/20 to-transparent'
          }`}
      >
        <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 z-[1001] group">
            <div className="relative">
              <div className={`w-11 h-11 rounded-full overflow-hidden border-2 transition-all duration-500 ${scrolled
                ? 'border-accent/40 shadow-gold'
                : 'border-white/20 group-hover:border-accent/50 group-hover:shadow-gold'
                }`}>
                <img src={logo} alt="Astraroam Logo" className="w-full h-full object-cover" />
              </div>
              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 transition-all duration-500 ${scrolled
                ? 'bg-accent border-primary'
                : 'bg-accent border-white/20'
                }`} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-[1.15rem] tracking-wide leading-none transition-all duration-300">
                <span className="text-white">ASTRA</span><span className="text-accent">ROAM</span>
              </span>
              <span className="text-white/40 text-[0.5rem] font-body uppercase tracking-[0.35em] leading-none mt-1.5">Himalayan Adventures</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div
            className={`flex items-center gap-1 ${mobileOpen
              ? 'fixed inset-0 bg-primary/98 dark:bg-gray-900/98 backdrop-blur-2xl flex-col justify-center gap-1 opacity-100 visible'
              : 'max-lg:opacity-0 max-lg:invisible max-lg:fixed max-lg:inset-0 max-lg:bg-primary/98 max-lg:dark:bg-gray-900/98 max-lg:backdrop-blur-2xl max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:gap-1'
              }`}
          >
            {mobileOpen && (
              <div className="lg:hidden mb-10 text-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-4 border-2 border-accent/30 shadow-gold">
                  <img src={logo} alt="Astraroam Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-heading font-bold text-2xl text-white block">
                  ASTRA<span className="text-accent">ROAM</span>
                </span>
                <span className="text-white/30 text-[0.5rem] font-body uppercase tracking-[0.35em] mt-1 block">Himalayan Adventures</span>
              </div>
            )}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-body text-[0.78rem] font-medium px-5 py-2.5 rounded-full transition-all duration-300 tracking-wide ${location.pathname === link.path
                  ? 'text-accent bg-accent/[0.1]'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                  } ${mobileOpen ? 'text-lg py-3' : ''}`}
              >
                {link.label}
                {location.pathname === link.path && !mobileOpen && (
                  <span className="absolute bottom-0.5 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
                )}
              </Link>
            ))}
            <div className="flex flex-col items-center gap-4 mt-10 max-lg:flex-row lg:hidden">
              <Link to="/booking" className="btn-accent btn-sm min-w-[220px] justify-center">
                Book Now
              </Link>
              <a href="tel:+917018599060" className="btn-outline btn-sm min-w-[220px] justify-center">
                <FaPhoneAlt className="text-xs" /> Call Now
              </a>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3 z-[1001]">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/50 cursor-pointer transition-all duration-300 hover:bg-accent/10 hover:text-accent hover:border-accent/30 hover:shadow-gold"
              aria-label="Toggle dark mode"
            >
              {dark ? <FiSun className="text-sm" /> : <FiMoon className="text-sm" />}
            </button>
            <Link
              to="/booking"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-[0.7rem] tracking-wide transition-all duration-300 hover:shadow-gold hover:-translate-y-0.5 uppercase"
              style={{
                background: 'linear-gradient(135deg, #c9a84c, #dbbf6a)',
                color: '#0f2027',
              }}
            >
              Book Trip
            </Link>
            <button
              className="lg:hidden w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white/50 cursor-pointer transition-all duration-300 hover:bg-accent/10 hover:text-accent hover:border-accent/30"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
