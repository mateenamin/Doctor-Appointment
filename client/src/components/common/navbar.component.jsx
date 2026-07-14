import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">D</span>
          </div>
          <span className="text-xl font-bold text-slate-800">
            Doc<span className="text-blue-500">Book</span>
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium text-sm"
                : "text-slate-600 hover:text-blue-500 text-sm transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink to="/doctors"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium text-sm"
                : "text-slate-600 hover:text-blue-500 text-sm transition-all"
            }
          >
            Doctors
          </NavLink>
          <NavLink to="/specializations"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium text-sm"
                : "text-slate-600 hover:text-blue-500 text-sm transition-all"
            }
          >
            Specializations
          </NavLink>
          <NavLink to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium text-sm"
                : "text-slate-600 hover:text-blue-500 text-sm transition-all"
            }
          >
            About
          </NavLink>
          <NavLink to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium text-sm"
                : "text-slate-600 hover:text-blue-500 text-sm transition-all"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="text-slate-600 text-sm font-medium hover:text-blue-500 transition-all px-4 py-2"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-blue-500 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-600 transition-all flex items-center gap-2"
          >
            Book Appointment
            <span>→</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          <NavLink to="/" className="text-slate-600 text-sm" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/doctors" className="text-slate-600 text-sm" onClick={() => setIsOpen(false)}>Doctors</NavLink>
          <NavLink to="/about" className="text-slate-600 text-sm" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className="text-slate-600 text-sm" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <button onClick={() => navigate('/login')} className="text-slate-600 text-sm text-left">Login</button>
          <button onClick={() => navigate('/signup')} className="bg-blue-500 text-white text-sm px-4 py-2 rounded-full">Book Appointment</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar