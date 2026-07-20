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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-700 ${
        scrolled
          ? 'h-[72px] bg-primary/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-premium border-b border-white/[0.04]'
          : 'h-[88px] bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-[1001] group">
          <div className="w-9 h-9 rounded-sm bg-accent/10 flex items-center justify-center border border-accent/20 transition-all duration-500 group-hover:bg-accent/20 group-hover:border-accent/40">
            <FaMountain className="text-accent text-base" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-white tracking-wide leading-none">
              ASTRA<span className="text-accent">ROAM</span>
            </span>
            <span className="text-white/25 text-[0.5rem] font-body uppercase tracking-premium leading-none mt-0.5">Premium Travel</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div
          className={`flex items-center gap-1 ${
            mobileOpen
              ? 'fixed inset-0 bg-primary/98 dark:bg-gray-900/98 backdrop-blur-2xl flex-col justify-center gap-4 opacity-100 visible'
              : 'max-lg:opacity-0 max-lg:invisible max-lg:fixed max-lg:inset-0 max-lg:bg-primary/98 max-lg:dark:bg-gray-900/98 max-lg:backdrop-blur-2xl max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:gap-4'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-[0.8rem] font-medium px-5 py-2.5 rounded-sm transition-all duration-500 tracking-wide ${
                location.pathname === link.path
                  ? 'text-accent bg-accent/10'
                  : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
              } ${mobileOpen ? 'text-xl max-lg:text-xl' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="btn-accent btn-sm mt-6 max-lg:mt-8"
          >
            Book Now
          </Link>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-3 z-[1001]">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-sm bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/50 cursor-pointer transition-all duration-500 hover:bg-accent/10 hover:text-accent hover:border-accent/30"
            aria-label="Toggle dark mode"
          >
            {dark ? <FiSun className="text-sm" /> : <FiMoon className="text-sm" />}
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
