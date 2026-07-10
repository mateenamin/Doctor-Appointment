const doctors = [
  {
    name: "Dr. Ali Ahmed",
    specialty: "Cardiologist",
    experience: "8 years",
    fee: "Rs. 2,000",
    rating: 4.9,
    reviews: 120,
    available: true,
    initials: "AA",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Dr. Sara Fatima",
    specialty: "Neurologist",
    experience: "6 years",
    fee: "Rs. 2,500",
    rating: 4.8,
    reviews: 98,
    available: true,
    initials: "SF",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Dr. M. Khan",
    specialty: "Orthopedic Surgeon",
    experience: "10 years",
    fee: "Rs. 3,000",
    rating: 4.7,
    reviews: 85,
    available: false,
    initials: "MK",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Dr. Rabia Arif",
    specialty: "Pediatrician",
    experience: "5 years",
    fee: "Rs. 1,500",
    rating: 4.9,
    reviews: 200,
    available: true,
    initials: "RA",
    color: "bg-red-100 text-red-600",
  },
]

const TopDoctorsSection = () => {
  return (
    <section className="py-16 px-6 bg-[#EFF6FF]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-medium mb-2">
            Top Doctors
          </p>
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Meet our top-rated specialists
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Board certified doctors trusted by thousands of patients.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {/* Doctor Avatar */}
              <div className="bg-[#EFF6FF] h-48 flex items-center justify-center relative">
                <div className={`w-24 h-24 rounded-full ${doctor.color} flex items-center justify-center text-2xl font-bold`}>
                  {doctor.initials}
                </div>

                {/* Available Badge */}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${doctor.available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                  {doctor.available ? '● Available' : '● Busy'}
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-4">
                <h3 className="text-slate-800 font-bold text-base mb-1">
                  {doctor.name}
                </h3>
                <p className="text-blue-500 text-xs mb-2">
                  {doctor.specialty}
                </p>

                {/* Rating + Experience */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-slate-600 text-xs font-medium">
                      {doctor.rating}
                    </span>
                    <span className="text-slate-400 text-xs">
                      ({doctor.reviews})
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs">
                    {doctor.experience}
                  </span>
                </div>

                {/* Fee */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-slate-400 text-xs">Fee</span>
                  <span className="text-slate-800 text-sm font-bold">
                    {doctor.fee}
                  </span>
                </div>

                {/* Book Button */}
                <button className="w-full bg-blue-500 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-600 transition-all">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <button className="border border-blue-500 text-blue-500 px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-50 transition-all">
            View all doctors
          </button>
        </div>

      </div>
    </section>
  )
}

export default TopDoctorsSection

