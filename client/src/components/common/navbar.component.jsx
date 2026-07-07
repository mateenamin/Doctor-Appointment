import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-sky-500">
          Doc<span className="text-slate-800">Book</span>
        </NavLink>

        {/* Links */}
        <div className="flex items-center gap-8">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-sky-500 font-medium text-sm" : "text-slate-600 hover:text-sky-500 text-sm"
          }>
            Home
          </NavLink>
          <NavLink to="/doctors" className={({ isActive }) =>
            isActive ? "text-sky-500 font-medium text-sm" : "text-slate-600 hover:text-sky-500 text-sm"
          }>
            Doctors
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "text-sky-500 font-medium text-sm" : "text-slate-600 hover:text-sky-500 text-sm"
          }>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? "text-sky-500 font-medium text-sm" : "text-slate-600 hover:text-sky-500 text-sm"
          }>
            Contact
          </NavLink>
        </div>

        
        {/* Buttons */}
        <div className="flex items-center gap-3">
          <NavLink to="/login"
            className="text-sm text-sky-500 border border-sky-500 px-4 py-2 rounded-lg hover:bg-sky-50"
          >
            Login
          </NavLink>
          <NavLink to="/signup"
            className="text-sm text-white bg-sky-500 px-4 py-2 rounded-lg hover:bg-sky-600"
          >
            Sign Up
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar