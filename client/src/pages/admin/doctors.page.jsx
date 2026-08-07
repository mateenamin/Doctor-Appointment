import { useState } from 'react'

const doctorsList = [
  { id: 1, name: "Dr. Ali Ahmed", specialty: "Cardiologist", experience: "8 years", fee: "Rs. 2,000", rating: 4.9, status: "approved", initials: "AA", color: "bg-blue-100 text-blue-600" },
  { id: 2, name: "Dr. Sara Fatima", specialty: "Neurologist", experience: "6 years", fee: "Rs. 2,500", rating: 4.8, status: "approved", initials: "SF", color: "bg-green-100 text-green-600" },
  { id: 3, name: "Dr. M. Khan", specialty: "Orthopedic", experience: "10 years", fee: "Rs. 3,000", rating: 4.7, status: "approved", initials: "MK", color: "bg-yellow-100 text-yellow-600" },
  { id: 4, name: "Dr. Zara Ahmed", specialty: "Dermatologist", experience: "5 years", fee: "Rs. 1,800", rating: 0, status: "pending", initials: "ZA", color: "bg-purple-100 text-purple-600" },
  { id: 5, name: "Dr. Hassan Ali", specialty: "Eye Specialist", experience: "7 years", fee: "Rs. 1,200", rating: 0, status: "pending", initials: "HA", color: "bg-cyan-100 text-cyan-600" },
  { id: 6, name: "Dr. Nadia Butt", specialty: "Dentist", experience: "4 years", fee: "Rs. 1,000", rating: 0, status: "pending", initials: "NB", color: "bg-pink-100 text-pink-600" },
]

const AdminDoctorsPage = () => {
  const [filter, setFilter] = useState('all')
  const [doctors, setDoctors] = useState(doctorsList)

  const filtered = filter === 'all' ? doctors : doctors.filter(d => d.status === filter)

  const handleApprove = (id) => {
    setDoctors(doctors.map(d => d.id === id ? { ...d, status: 'approved' } : d))
  }

  const handleReject = (id) => {
    setDoctors(doctors.filter(d => d.id !== id))
  }

  return (
    <div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Doctors</h1>
          <p className="text-slate-400 text-sm">Manage all doctors on platform</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {['all', 'approved', 'pending'].map((tab) => (
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
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Doctor</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Specialty</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Experience</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Fee</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Status</th>
              <th className="text-left px-6 py-4 text-slate-600 text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((doctor) => (
              <tr key={doctor.id} className="border-t border-slate-50 hover:bg-slate-50 transition-all">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${doctor.color} flex items-center justify-center text-xs font-bold`}>
                      {doctor.initials}
                    </div>
                    <span className="text-slate-800 font-medium text-sm">{doctor.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500 text-sm">{doctor.specialty}</td>
                <td className="px-6 py-4 text-slate-500 text-sm">{doctor.experience}</td>
                <td className="px-6 py-4 text-slate-700 text-sm font-medium">{doctor.fee}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    doctor.status === 'approved'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {doctor.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {doctor.status === 'pending' ? (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(doctor.id)}
                        className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-green-600 transition-all"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(doctor.id)}
                        className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-red-600 transition-all"
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleReject(doctor.id)}
                      className="bg-red-100 text-red-500 text-xs px-3 py-1.5 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                    >
                      Remove
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminDoctorsPage