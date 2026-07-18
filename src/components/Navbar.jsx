import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { FaMountain } from 'react-icons/fa'
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
          ? 'h-[70px] bg-navy/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-black/20'
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
              ? 'fixed inset-0 bg-navy/95 dark:bg-gray-900/95 backdrop-blur-xl flex-col justify-center gap-5 opacity-100 visible'
              : 'max-lg:opacity-0 max-lg:invisible max-lg:fixed max-lg:inset-0 max-lg:bg-navy/95 max-lg:dark:bg-gray-900/95 max-lg:backdrop-blur-xl max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:gap-5'
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

        <div className="flex items-center gap-3 z-[1001]">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white cursor-pointer transition-all duration-300 hover:bg-accent hover:text-navy hover:border-accent"
            aria-label="Toggle dark mode"
          >
            {dark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </button>
          <button
            className="lg:hidden bg-transparent border-none text-white text-2xl cursor-pointer p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  )
}
