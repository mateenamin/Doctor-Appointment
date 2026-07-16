import { useNavigate } from 'react-router-dom'

const doctors = [
  {
    id: 1,
    name: "Dr. Ali Ahmed",
    specialty: "Cardiologist",
    experience: "8 years",
    fee: "Rs. 2,000",
    rating: 4.9,
    reviews: 120,
    available: true,
    initials: "AA",
    color: "bg-blue-100 text-blue-600",
    location: "Lahore",
    patients: 1200,
  },
  {
    id: 2,
    name: "Dr. Sara Fatima",
    specialty: "Neurologist",
    experience: "6 years",
    fee: "Rs. 2,500",
    rating: 4.8,
    reviews: 98,
    available: true,
    initials: "SF",
    color: "bg-green-100 text-green-600",
    location: "Karachi",
    patients: 980,
  },
  {
    id: 3,
    name: "Dr. M. Khan",
    specialty: "Orthopedic Surgeon",
    experience: "10 years",
    fee: "Rs. 3,000",
    rating: 4.7,
    reviews: 85,
    available: false,
    initials: "MK",
    color: "bg-yellow-100 text-yellow-600",
    location: "Islamabad",
    patients: 850,
  },
  {
    id: 4,
    name: "Dr. Rabia Arif",
    specialty: "Pediatrician",
    experience: "5 years",
    fee: "Rs. 1,500",
    rating: 4.9,
    reviews: 200,
    available: true,
    initials: "RA",
    color: "bg-red-100 text-red-600",
    location: "Lahore",
    patients: 2000,
  },
  {
    id: 5,
    name: "Dr. Usman Malik",
    specialty: "Dermatologist",
    experience: "7 years",
    fee: "Rs. 1,800",
    rating: 4.6,
    reviews: 75,
    available: true,
    initials: "UM",
    color: "bg-purple-100 text-purple-600",
    location: "Lahore",
    patients: 750,
  },
  {
    id: 6,
    name: "Dr. Ayesha Siddiqui",
    specialty: "Gynecologist",
    experience: "9 years",
    fee: "Rs. 2,200",
    rating: 4.8,
    reviews: 160,
    available: true,
    initials: "AS",
    color: "bg-pink-100 text-pink-600",
    location: "Karachi",
    patients: 1600,
  },
  {
    id: 7,
    name: "Dr. Bilal Hassan",
    specialty: "Eye Specialist",
    experience: "4 years",
    fee: "Rs. 1,200",
    rating: 4.5,
    reviews: 60,
    available: false,
    initials: "BH",
    color: "bg-cyan-100 text-cyan-600",
    location: "Islamabad",
    patients: 600,
  },
  {
    id: 8,
    name: "Dr. Nadia Tariq",
    specialty: "Dentist",
    experience: "6 years",
    fee: "Rs. 1,000",
    rating: 4.7,
    reviews: 110,
    available: true,
    initials: "NT",
    color: "bg-orange-100 text-orange-600",
    location: "Lahore",
    patients: 1100,
  },
  {
    id: 9,
    name: "Dr. Kamran Butt",
    specialty: "Cardiologist",
    experience: "12 years",
    fee: "Rs. 3,500",
    rating: 4.9,
    reviews: 250,
    available: true,
    initials: "KB",
    color: "bg-blue-100 text-blue-600",
    location: "Lahore",
    patients: 2500,
  },
]

const DoctorsGrid = () => {
  const navigate = useNavigate()

  return (
    <div className="flex-1">

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-slate-600 text-sm">
          Showing <span className="font-bold text-slate-800">{doctors.length}</span> doctors
        </p>
        <select className="text-sm border border-slate-200 rounded-xl px-4 py-2 text-slate-600 outline-none">
          <option>Sort by: Recommended</option>
          <option>Sort by: Rating</option>
          <option>Sort by: Fee (Low to High)</option>
          <option>Sort by: Fee (High to Low)</option>
          <option>Sort by: Experience</option>
        </select>
      </div>

      {/* Doctors List */}
      <div className="flex flex-col gap-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-center gap-6 hover:shadow-md transition-all"
          >
            {/* Avatar */}
            <div className={`w-20 h-20 rounded-2xl ${doctor.color} flex items-center justify-center text-xl font-bold flex-shrink-0`}>
              {doctor.initials}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-slate-800 font-bold text-base">
                  {doctor.name}
                </h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  doctor.available
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-500'
                }`}>
                  {doctor.available ? '● Available' : '● Busy'}
                </span>
              </div>

              <p className="text-blue-500 text-sm mb-2">
                {doctor.specialty}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  🎓 {doctor.experience} experience
                </span>
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  👥 {doctor.patients}+ patients
                </span>
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  📍 {doctor.location}
                </span>
                <span className="text-yellow-400 text-xs flex items-center gap-1">
                  ★ {doctor.rating}
                  <span className="text-slate-400">({doctor.reviews} reviews)</span>
                </span>
              </div>
            </div>

            {/* Fee + Button */}
            <div className="flex flex-col items-end gap-3 flex-shrink-0">
              <div className="text-right">
                <p className="text-slate-400 text-xs mb-1">Consultation fee</p>
                <p className="text-slate-800 font-bold text-lg">{doctor.fee}</p>
              </div>
              <button
                onClick={() => navigate(`/doctors/${doctor.id}`)}
                className="bg-blue-500 text-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-blue-600 transition-all"
              >
                Book Appointment
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default DoctorsGrid