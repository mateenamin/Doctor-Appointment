import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold text-sky-400 mb-3">
              Doc<span className="text-white">Book</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Book appointments with top doctors easily. 
              Your health is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <NavLink to="/" className="text-slate-400 hover:text-sky-400 text-sm">Home</NavLink>
              <NavLink to="/doctors" className="text-slate-400 hover:text-sky-400 text-sm">Doctors</NavLink>
              <NavLink to="/about" className="text-slate-400 hover:text-sky-400 text-sm">About Us</NavLink>
              <NavLink to="/contact" className="text-slate-400 hover:text-sky-400 text-sm">Contact</NavLink>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <p>📍 Lahore, Pakistan</p>
              <p>📞 +92 300 1234567</p>
              <p>✉️ info@docbook.pk</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-500 text-sm">
          © 2026 DocBook. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer