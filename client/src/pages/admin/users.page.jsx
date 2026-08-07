const usersList = [
  { id: 1, name: "Ahmed Khan", email: "ahmed@gmail.com", phone: "+92 300 1111111", appointments: 3, joined: "Jan 2026", initials: "AK", color: "bg-blue-100 text-blue-600" },
  { id: 2, name: "Sara Malik", email: "sara@gmail.com", phone: "+92 300 2222222", appointments: 1, joined: "Feb 2026", initials: "SM", color: "bg-green-100 text-green-600" },
  { id: 3, name: "Usman Butt", email: "usman@gmail.com", phone: "+92 300 3333333", appointments: 5, joined: "Mar 2026", initials: "UB", color: "bg-yellow-100 text-yellow-600" },
  { id: 4, name: "Fatima Raza", email: "fatima@gmail.com", phone: "+92 300 4444444", appointments: 2, joined: "Apr 2026", initials: "FR", color: "bg-purple-100 text-purple-600" },
  { id: 5, name: "Bilal Hassan", email: "bilal@gmail.com", phone: "+92 300 5555555", appointments: 4, joined: "May 2026", initials: "BH", color: "bg-red-100 text-red-600" },
  { id: 6, name: "Nadia Tariq", email: "nadia@gmail.com", phone: "+92 300 6666666", appointments: 1, joined: "Jun 2026", initials: "NT", color: "bg-pink-100 text-pink-600" },
]

const AdminUsersPage = () => {
  return (
    <div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Users</h1>
        <p className="text-slate-400 text-sm">All registered patients</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Users", value: usersList.length, icon: "👥" },
          { label: "Active Users", value: 5, icon: "✅" },
          { label: "New This Month", value: 2, icon: "🆕" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-lg">
              {stat.icon}
            </div>
            <div>
              <p className="text-slate-800 font-bold text-lg">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#EFF6FF]">
            <tr>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Patient</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Email</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Phone</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Appointments</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Joined</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user) => (
              <tr key={user.id} className="border-t border-slate-50 hover:bg-slate-50 transition-all">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${user.color} flex items-center justify-center text-xs font-bold`}>
                      {user.initials}
                    </div>
                    <span className="text-slate-800 font-medium text-sm">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500 text-sm">{user.email}</td>
                <td className="px-6 py-4 text-slate-500 text-sm">{user.phone}</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
                    {user.appointments} appointments
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500 text-sm">{user.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminUsersPage