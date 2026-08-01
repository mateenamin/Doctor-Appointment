const AboutStats = () => {
  return (
    <section className="py-16 px-6 bg-blue-500">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "150+",
              label: "Verified Doctors",
              icon: "👨‍⚕️",
              desc: "Board certified specialists"
            },
            {
              number: "20,000+",
              label: "Happy Patients",
              icon: "😊",
              desc: "Satisfied with our service"
            },
            {
              number: "50+",
              label: "Cities Covered",
              icon: "🌍",
              desc: "Across Pakistan"
            },
            {
              number: "99%",
              label: "Satisfaction Rate",
              icon: "⭐",
              desc: "Patient satisfaction score"
            },
          ].map((stat, index) => (
            <div key={index} className="text-center">

              {/* Icon */}
              <div className="text-4xl mb-3">{stat.icon}</div>

              {/* Number */}
              <h3 className="text-4xl font-bold text-white mb-1">
                {stat.number}
              </h3>

              {/* Label */}
              <p className="text-white font-medium text-sm mb-1">
                {stat.label}
              </p>

              {/* Desc */}
              <p className="text-blue-100 text-xs">
                {stat.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AboutStats