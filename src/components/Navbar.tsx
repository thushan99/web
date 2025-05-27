import { useEffect, useState } from "react"
import { MenuIcon, XIcon } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Project Scope", href: "#project-scope" },
    { name: "Milestones", href: "#milestones" },
    { name: "Downloads", href: "#downloads" },
    { name: "About Us", href: "#about-us" },
    { name: "Contact Us", href: "#contact-us" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-green-500/5" 
        : "bg-white/60 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <img
                src="/tomatoLogo.png"
                alt="TomatoGuard Logo"
                className="w-52 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-green-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-green-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'top-3'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md border-t border-white/20 rounded-b-2xl">
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-green-600 hover:bg-green-50 block px-4 py-3 rounded-xl text-base font-medium w-full text-left transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
