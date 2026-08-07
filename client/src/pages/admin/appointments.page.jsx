import { useState } from 'react'

const appointmentsList = [
  { id: 1, patient: "Ahmed Khan", doctor: "Dr. Ali Ahmed", specialty: "Cardiology", date: "2026-08-06", time: "10:00 AM", status: "confirmed" },
  { id: 2, patient: "Sara Malik", doctor: "Dr. Sara Fatima", specialty: "Neurology", date: "2026-08-06", time: "11:30 AM", status: "pending" },
  { id: 3, patient: "Usman Butt", doctor: "Dr. M. Khan", specialty: "Orthopedics", date: "2026-08-06", time: "02:00 PM", status: "confirmed" },
  { id: 4, patient: "Fatima Raza", doctor: "Dr. Rabia Arif", specialty: "Pediatrics", date: "2026-08-06", time: "03:30 PM", status: "cancelled" },
  { id: 5, patient: "Bilal Hassan", doctor: "Dr. Ayesha Siddiqui", specialty: "Gynecology", date: "2026-08-07", time: "09:00 AM", status: "pending" },
  { id: 6, patient: "Nadia Tariq", doctor: "Dr. Usman Malik", specialty: "Dermatology", date: "2026-08-07", time: "10:30 AM", status: "confirmed" },
]

const AdminAppointmentsPage = () => {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? appointmentsList
    : appointmentsList.filter(a => a.status === filter)

  return (
    <div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Appointments</h1>
        <p className="text-slate-400 text-sm">Manage all appointments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total", value: appointmentsList.length, color: "bg-blue-100 text-blue-600" },
          { label: "Confirmed", value: appointmentsList.filter(a => a.status === 'confirmed').length, color: "bg-green-100 text-green-600" },
          { label: "Pending", value: appointmentsList.filter(a => a.status === 'pending').length, color: "bg-yellow-100 text-yellow-600" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-slate-100 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center font-bold text-lg`}>
              {stat.value}
            </div>
            <p className="text-slate-600 text-sm">{stat.label} Appointments</p>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-6">
        {['all', 'confirmed', 'pending', 'cancelled'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
              filter === tab
                ? 'bg-blue-500 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#EFF6FF]">
            <tr>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Patient</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Doctor</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Specialty</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Date & Time</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((apt) => (
              <tr key={apt.id} className="border-t border-slate-50 hover:bg-slate-50 transition-all">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {apt.patient.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-slate-800 font-medium text-sm">{apt.patient}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 text-sm">{apt.doctor}</td>
                <td className="px-6 py-4 text-slate-500 text-sm">{apt.specialty}</td>
                <td className="px-6 py-4 text-slate-500 text-sm">{apt.date} {apt.time}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    apt.status === 'confirmed' ? 'bg-green-100 text-green-600' :
                    apt.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-500'
                  }`}>
                    {apt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminAppointmentsPage