const features = [
  {
    icon: "✅",
    title: "Verified Doctors",
    description: "Every doctor is thoroughly verified and board certified before joining our platform.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: "🔒",
    title: "Secure Records",
    description: "Your medical history and personal data is fully encrypted and 100% secure.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: "⚡",
    title: "Instant Booking",
    description: "Book your appointment in under 2 minutes. Get instant confirmation.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: "💬",
    title: "Online Consultation",
    description: "Consult with top doctors from the comfort of your home anytime.",
    color: "bg-red-100 text-red-600",
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 bg-[#EFF6FF]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-medium mb-2">
            Why choose us
          </p>
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Healthcare designed around you
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            A modern platform built for trust, speed, and peace of mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-md transition-all"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-slate-800 font-bold text-base mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturesSection