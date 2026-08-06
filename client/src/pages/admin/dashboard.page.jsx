const stats = [
  { label: "Total Doctors", value: "150+", icon: "👨‍⚕️", color: "bg-blue-100 text-blue-600", change: "+12 this month" },
  { label: "Total Patients", value: "20,000+", icon: "👥", color: "bg-green-100 text-green-600", change: "+250 this month" },
  { label: "Appointments", value: "1,250", icon: "📅", color: "bg-yellow-100 text-yellow-600", change: "+85 today" },
  { label: "Pending Approvals", value: "8", icon: "⏳", color: "bg-red-100 text-red-600", change: "Needs attention" },
]

const recentAppointments = [
  { patient: "Ahmed Khan", doctor: "Dr. Ali Ahmed", specialty: "Cardiology", date: "2026-08-06", time: "10:00 AM", status: "confirmed" },
  { patient: "Sara Malik", doctor: "Dr. Sara Fatima", specialty: "Neurology", date: "2026-08-06", time: "11:30 AM", status: "pending" },
  { patient: "Usman Butt", doctor: "Dr. M. Khan", specialty: "Orthopedics", date: "2026-08-06", time: "02:00 PM", status: "confirmed" },
  { patient: "Fatima Raza", doctor: "Dr. Rabia Arif", specialty: "Pediatrics", date: "2026-08-06", time: "03:30 PM", status: "cancelled" },
  { patient: "Bilal Hassan", doctor: "Dr. Ayesha Siddiqui", specialty: "Gynecology", date: "2026-08-06", time: "04:00 PM", status: "pending" },
]

const pendingDoctors = [
  { name: "Dr. Zara Ahmed", specialty: "Dermatologist", experience: "5 years", initials: "ZA", color: "bg-purple-100 text-purple-600" },
  { name: "Dr. Hassan Ali", specialty: "Eye Specialist", experience: "7 years", initials: "HA", color: "bg-cyan-100 text-cyan-600" },
  { name: "Dr. Nadia Butt", specialty: "Dentist", experience: "4 years", initials: "NB", color: "bg-pink-100 text-pink-600" },
]

const DashboardPage = () => {
  return (
    <div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-xl`}>
                {stat.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</h3>
            <p className="text-slate-500 text-sm mb-1">{stat.label}</p>
            <p className="text-blue-500 text-xs font-medium">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Appointments */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-slate-800 font-bold text-lg">Recent Appointments</h2>
            <button className="text-blue-500 text-xs hover:underline">View all</button>
          </div>
          <div className="flex flex-col gap-3">
            {recentAppointments.map((apt, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {apt.patient.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-slate-800 text-sm font-medium">{apt.patient}</p>
                    <p className="text-slate-400 text-xs">{apt.doctor} • {apt.specialty}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-slate-600 text-xs mb-1">{apt.date} {apt.time}</p>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    apt.status === 'confirmed' ? 'bg-green-100 text-green-600' :
                    apt.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-500'
                  }`}>
                    {apt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Doctor Approvals */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-slate-800 font-bold text-lg">Pending Approvals</h2>
            <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full font-medium">
              {pendingDoctors.length} new
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {pendingDoctors.map((doctor, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${doctor.color} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {doctor.initials}
                </div>
                <div className="flex-1">
                  <p className="text-slate-800 text-sm font-medium">{doctor.name}</p>
                  <p className="text-slate-400 text-xs">{doctor.specialty} • {doctor.experience}</p>
                </div>
                <div className="flex gap-2">
                  <button className="w-7 h-7 bg-green-100 text-green-600 rounded-lg text-xs hover:bg-green-500 hover:text-white transition-all">
                    ✓
                  </button>
                  <button className="w-7 h-7 bg-red-100 text-red-500 rounded-lg text-xs hover:bg-red-500 hover:text-white transition-all">
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 border border-blue-500 text-blue-500 py-2 rounded-xl text-sm font-medium hover:bg-blue-50 transition-all">
            View all pending
          </button>
        </div>

      </div>
    </div>
  )
}

export default DashboardPage