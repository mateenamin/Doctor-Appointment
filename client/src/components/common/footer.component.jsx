import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Logo + About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">D</span>
              </div>
              <span className="text-xl font-bold">
                Doc<span className="text-blue-400">Book</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pakistan's most trusted doctor appointment platform.
              Book verified specialists instantly.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {['f', 'in', 't', 'yt'].map((s, i) => (
                <div key={i} className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 text-xs hover:bg-blue-500 hover:text-white cursor-pointer transition-all">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">Company</h4>
            <div className="flex flex-col gap-3">
              {['About Us', 'Careers', 'Blog', 'Press'].map((item, i) => (
                <a key={i} href="#" className="text-slate-400 text-sm hover:text-blue-400 transition-all">{item}</a>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">Specializations</h4>
            <div className="flex flex-col gap-3">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dentistry'].map((item, i) => (
                <a key={i} href="#" className="text-slate-400 text-sm hover:text-blue-400 transition-all">{item}</a>
              ))}
            </div>
          </div>

          {/* Support + Newsletter */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">Support</h4>
            <div className="flex flex-col gap-3 mb-6">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, i) => (
                <a key={i} href="#" className="text-slate-400 text-sm hover:text-blue-400 transition-all">{item}</a>
              ))}
            </div>

            {/* Newsletter */}
            <h4 className="text-sm font-bold mb-3 text-white">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800 text-slate-300 text-xs px-3 py-2 rounded-lg outline-none border border-slate-700 focus:border-blue-500"
              />
              <button className="bg-blue-500 text-white text-xs px-3 py-2 rounded-lg hover:bg-blue-600 transition-all">
                →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 DocBook. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 text-xs hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-xs hover:text-blue-400">Terms of Service</a>
            <a href="#" className="text-slate-500 text-xs hover:text-blue-400">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer