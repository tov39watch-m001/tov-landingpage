import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, X, ChevronDown, MessageCircle } from 'lucide-react'
import { categories } from '../data/products'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location])

  const navLinks = [
    { label: 'หน้าหลัก', to: '/' },
    { label: 'เกี่ยวกับเรา', to: '/about' },
    { label: 'ติดต่อ', to: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#111111] border-b border-[#222222] transition-shadow duration-300 ${scrolled ? 'nav-scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#FFC300] tracking-widest">TOV</span>
            <span className="hidden sm:block text-[#555] text-xs mt-1">|&nbsp;PREMIUM</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors hover:text-[#FFC300] ${location.pathname === l.to ? 'text-[#FFC300]' : 'text-[#AAAAAA]'}`}
              >
                {l.label}
              </Link>
            ))}
            {/* Products dropdown */}
            <div className="relative dropdown-parent">
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#FFC300] ${location.pathname.startsWith('/products') ? 'text-[#FFC300]' : 'text-[#AAAAAA]'}`}
                onClick={() => setDropdownOpen(v => !v)}
              >
                สินค้า <ChevronDown size={14} />
              </button>
              <div className="dropdown-menu min-w-[180px] bg-[#1A1A1A] border border-[#333] rounded-xl shadow-2xl py-2 mt-2">
                <Link to="/products" className="block px-4 py-2 text-sm text-[#AAAAAA] hover:text-[#FFC300] hover:bg-[#222]">
                  สินค้าทั้งหมด
                </Link>
                {categories.filter(c => c !== 'ทั้งหมด').map(cat => (
                  <Link
                    key={cat}
                    to={`/products?cat=${encodeURIComponent(cat)}`}
                    className="block px-4 py-2 text-sm text-[#AAAAAA] hover:text-[#FFC300] hover:bg-[#222]"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(v => !v)}
              className="p-2 text-[#AAAAAA] hover:text-[#FFC300] transition-colors"
              aria-label="ค้นหา"
            >
              <Search size={18} />
            </button>
            <a
              href="https://line.me/ti/p/~@tov"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#FFC300] hover:bg-[#E6A800] text-black text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle size={16} />
              LINE
            </a>
            <button
              className="lg:hidden p-2 text-[#AAAAAA] hover:text-[#FFC300] transition-colors"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="เมนู"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-3 animate-[fadeIn_0.2s_ease]">
            <input
              autoFocus
              type="text"
              placeholder="ค้นหาสินค้า..."
              className="w-full bg-[#222] border border-[#333] rounded-lg px-4 py-2 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#FFC300]"
            />
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-[#222] px-4 pb-6 pt-4 space-y-1 animate-[fadeIn_0.2s_ease]">
          {navLinks.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="block py-3 text-sm font-medium text-[#AAAAAA] hover:text-[#FFC300] border-b border-[#1A1A1A]"
            >
              {l.label}
            </Link>
          ))}
          <div>
            <button
              className="flex items-center gap-1 py-3 text-sm font-medium text-[#AAAAAA] hover:text-[#FFC300] border-b border-[#1A1A1A] w-full"
              onClick={() => setDropdownOpen(v => !v)}
            >
              สินค้า <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="pl-4 space-y-1 pt-1">
                <Link to="/products" className="block py-2 text-sm text-[#AAAAAA] hover:text-[#FFC300]">สินค้าทั้งหมด</Link>
                {categories.filter(c => c !== 'ทั้งหมด').map(cat => (
                  <Link key={cat} to={`/products?cat=${encodeURIComponent(cat)}`} className="block py-2 text-sm text-[#AAAAAA] hover:text-[#FFC300]">
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a
            href="https://line.me/ti/p/~@tov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-4 bg-[#FFC300] hover:bg-[#E6A800] text-black text-sm font-semibold px-4 py-3 rounded-lg transition-colors"
          >
            <MessageCircle size={16} />
            ติดต่อผ่าน LINE
          </a>
        </div>
      )}
    </nav>
  )
}
