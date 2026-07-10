const specializations = [
  { name: "Cardiology", icon: "🫀", doctors: 24 },
  { name: "Neurology", icon: "🧠", doctors: 18 },
  { name: "Orthopedics", icon: "🦴", doctors: 31 },
  { name: "Eye Care", icon: "👁️", doctors: 15 },
  { name: "Dentistry", icon: "🦷", doctors: 22 },
  { name: "Pediatrics", icon: "👶", doctors: 19 },
  { name: "Dermatology", icon: "🩺", doctors: 12 },
  { name: "Gynecology", icon: "🏥", doctors: 16 },
]

const SpecializationsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-medium mb-2">Speciality</p>
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Care across every medical specialty
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            From routine checkups to specialist care — find the right
            expert for every need.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="bg-[#EFF6FF] rounded-2xl p-6 text-center cursor-pointer hover:bg-blue-100 transition-all hover:shadow-md"
            >
              <div className="text-4xl mb-3">{spec.icon}</div>
              <h3 className="text-slate-800 font-semibold text-sm mb-1">
                {spec.name}
              </h3>
              <p className="text-slate-400 text-xs">
                {spec.doctors} doctors
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="border border-blue-500 text-blue-500 px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-50 transition-all">
            View all specializations
          </button>
        </div>

      </div>
    </section>
  )
}

export default SpecializationsSection