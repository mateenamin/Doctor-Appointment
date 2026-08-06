import { Outlet, NavLink, useNavigate } from 'react-router-dom'

const AdminLayout = () => {
  const navigate = useNavigate()

  const menuItems = [
    { path: '/admin/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/admin/doctors', icon: '👨‍⚕️', label: 'Doctors' },
    { path: '/admin/appointments', icon: '📅', label: 'Appointments' },
    { path: '/admin/users', icon: '👥', label: 'Users' },
  ]

  return (
    <div className="flex min-h-screen bg-[#EFF6FF]">

      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-100 shadow-sm flex flex-col fixed h-full">

        {/* Logo */}
        <div className="px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">D</span>
            </div>
            <span className="text-lg font-bold text-slate-800">
              Doc<span className="text-blue-500">Book</span>
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">Admin Panel</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6">
          <p className="text-slate-400 text-xs font-medium mb-3 px-2">
            MAIN MENU
          </p>
          <div className="flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                    isActive
                      ? 'bg-blue-500 text-white font-medium'
                      : 'text-slate-600 hover:bg-[#EFF6FF] hover:text-blue-500'
                  }`
                }
              >
                <span>{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Logout */}
        <div className="px-4 py-5 border-t border-slate-100">
          <button
            onClick={() => {
              localStorage.removeItem('token')
              localStorage.removeItem('user')
              navigate('/login')
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-500 hover:bg-red-50 w-full transition-all"
          >
            <span>🚪</span>
            Logout
          </button>
        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">

        {/* Top Bar */}
        <div className="bg-white border-b border-slate-100 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-slate-800 font-bold text-lg">Admin Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              A
            </div>
            <div>
              <p className="text-slate-800 text-sm font-medium">Admin</p>
              <p className="text-slate-400 text-xs">admin@docbook.pk</p>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8">
          <Outlet />
        </div>

      </div>

    </div>
  )
}

export default AdminLayout