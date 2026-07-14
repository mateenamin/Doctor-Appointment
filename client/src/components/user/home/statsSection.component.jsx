const stats = [
  {
    number: "150+",
    label: "Expert Doctors",
    icon: "👨‍⚕️",
  },
  {
    number: "20,000+",
    label: "Happy Patients",
    icon: "😊",
  },
  {
    number: "50+",
    label: "Partner Hospitals",
    icon: "🏥",
  },
  {
    number: "99%",
    label: "Satisfaction Rate",
    icon: "⭐",
  },
]

const StatsSection = () => {
  return (
    <section className="py-14 px-6 bg-blue-500">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              {/* Icon */}
              <div className="text-3xl mb-3">{stat.icon}</div>

              {/* Number */}
              <h3 className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </h3>

              {/* Label */}
              <p className="text-blue-100 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default StatsSection