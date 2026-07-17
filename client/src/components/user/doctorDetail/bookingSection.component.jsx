import { useNavigate, useParams } from 'react-router-dom'

const doctorData = {
  1: { name: "Dr. Ali Ahmed", specialty: "Cardiologist", experience: "8 years", fee: "Rs. 2,000", rating: 4.9, reviews: 120, available: true, initials: "AA", color: "bg-blue-100 text-blue-600", location: "Lahore", patients: 1200 },
  2: { name: "Dr. Sara Fatima", specialty: "Neurologist", experience: "6 years", fee: "Rs. 2,500", rating: 4.8, reviews: 98, available: true, initials: "SF", color: "bg-green-100 text-green-600", location: "Karachi", patients: 980 },
  3: { name: "Dr. M. Khan", specialty: "Orthopedic Surgeon", experience: "10 years", fee: "Rs. 3,000", rating: 4.7, reviews: 85, available: false, initials: "MK", color: "bg-yellow-100 text-yellow-600", location: "Islamabad", patients: 850 },
  4: { name: "Dr. Rabia Arif", specialty: "Pediatrician", experience: "5 years", fee: "Rs. 1,500", rating: 4.9, reviews: 200, available: true, initials: "RA", color: "bg-red-100 text-red-600", location: "Lahore", patients: 2000 },
}

const bookingSection = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const doctor = doctorData[id]

  if (!doctor) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Doctor not found!</p>
        <button
          onClick={() => navigate('/doctors')}
          className="mt-4 text-blue-500 text-sm"
        >
          ← Back to Doctors
        </button>
      </div>
    )
  }

  return (
    <section className="bg-[#EFF6FF] py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate('/doctors')}
          className="flex items-center gap-2 text-slate-500 text-sm hover:text-blue-500 mb-6 transition-all"
        >
          ← Back to Doctors
        </button>

        <div className="flex items-center gap-8">

          {/* Avatar */}
          <div className={`w-28 h-28 rounded-2xl ${doctor.color} flex items-center justify-center text-3xl font-bold flex-shrink-0`}>
            {doctor.initials}
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-slate-800">
                {doctor.name}
              </h1>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                doctor.available
                  ? 'bg-green-100 text-green-600'
                  : 'bg-red-100 text-red-500'
              }`}>
                {doctor.available ? '● Available' : '● Busy'}
              </span>
            </div>

            <p className="text-blue-500 font-medium mb-4">
              {doctor.specialty}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★</span>
                <span className="text-slate-700 font-medium text-sm">{doctor.rating}</span>
                <span className="text-slate-400 text-xs">({doctor.reviews} reviews)</span>
              </div>
              <div className="w-px h-4 bg-slate-200"></div>
              <span className="text-slate-500 text-sm">🎓 {doctor.experience}</span>
              <div className="w-px h-4 bg-slate-200"></div>
              <span className="text-slate-500 text-sm">👥 {doctor.patients}+ patients</span>
              <div className="w-px h-4 bg-slate-200"></div>
              <span className="text-slate-500 text-sm">📍 {doctor.location}</span>
            </div>
          </div>

          {/* Fee */}
          <div className="text-right flex-shrink-0">
            <p className="text-slate-400 text-xs mb-1">Consultation fee</p>
            <p className="text-3xl font-bold text-slate-800">{doctor.fee}</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default bookingSection