import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiSun, FiMoon, FiPhone } from 'react-icons/fi'
import { FaMountain, FaPhoneAlt } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

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
      <div className={`hidden lg:block w-full transition-all duration-500 overflow-hidden ${
        scrolled ? 'max-h-0 opacity-0' : 'max-h-[40px] opacity-100'
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
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 flex items-center transition-all duration-500 ${
          scrolled
            ? 'top-0 h-[68px] bg-primary/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-premium border-b border-white/[0.04]'
            : 'top-0 lg:top-[40px] h-[72px] lg:h-[68px] bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-[1001] group">
            <div className="relative">
              <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center border border-accent/25 transition-all duration-500 group-hover:bg-accent/20 group-hover:border-accent/40 group-hover:shadow-gold">
                <FaMountain className="text-accent text-base transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-[1.1rem] text-white tracking-wide leading-none">
                ASTRA<span className="text-accent">ROAM</span>
              </span>
              <span className="text-white/30 text-[0.45rem] font-body uppercase tracking-[0.3em] leading-none mt-1">Himalayan Adventures</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div
            className={`flex items-center gap-0.5 ${
              mobileOpen
                ? 'fixed inset-0 bg-primary/98 dark:bg-gray-900/98 backdrop-blur-2xl flex-col justify-center gap-2 opacity-100 visible'
                : 'max-lg:opacity-0 max-lg:invisible max-lg:fixed max-lg:inset-0 max-lg:bg-primary/98 max-lg:dark:bg-gray-900/98 max-lg:backdrop-blur-2xl max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:gap-2'
            }`}
          >
            {mobileOpen && (
              <div className="lg:hidden mb-8 text-center">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mx-auto mb-3 border border-accent/20">
                  <FaMountain className="text-accent text-lg" />
                </div>
                <span className="font-heading font-bold text-xl text-white block">
                  ASTRA<span className="text-accent">ROAM</span>
                </span>
              </div>
            )}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-body text-[0.78rem] font-medium px-5 py-2.5 rounded-sm transition-all duration-300 tracking-wide ${
                  location.pathname === link.path
                    ? 'text-accent bg-accent/[0.08]'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                } ${mobileOpen ? 'text-lg max-lg:text-lg' : ''}`}
              >
                {link.label}
                {location.pathname === link.path && !mobileOpen && (
                  <span className="absolute bottom-1 left-5 right-5 h-[2px] bg-accent rounded-full" />
                )}
              </Link>
            ))}
            <div className="flex flex-col items-center gap-4 mt-8 max-lg:flex-row lg:hidden">
              <Link to="/booking" className="btn-accent btn-sm min-w-[200px] justify-center">
                Book Now
              </Link>
              <a href="tel:+917018599060" className="btn-outline btn-sm min-w-[200px] justify-center">
                <FaPhoneAlt className="text-xs" /> Call Now
              </a>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2.5 z-[1001]">
            <a
              href="tel:+917018599060"
              className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-sm bg-accent/10 border border-accent/20 text-accent text-[0.7rem] font-body font-semibold tracking-wide transition-all duration-300 hover:bg-accent hover:text-primary hover:border-accent hover:shadow-gold"
            >
              <FaPhoneAlt className="text-[0.6rem]" />
              Call Now
            </a>
            <Link
              to="/booking"
              className="hidden lg:flex px-4 py-2 rounded-sm bg-accent text-primary text-[0.7rem] font-heading font-bold tracking-wide transition-all duration-300 hover:shadow-gold hover:-translate-y-0.5 uppercase"
            >
              Book Trip
            </Link>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-sm bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 cursor-pointer transition-all duration-300 hover:bg-accent/10 hover:text-accent hover:border-accent/30"
              aria-label="Toggle dark mode"
            >
              {dark ? <FiSun className="text-sm" /> : <FiMoon className="text-sm" />}
            </button>
            <button
              className="lg:hidden bg-transparent border-none text-white text-2xl cursor-pointer p-1 transition-colors hover:text-accent"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
