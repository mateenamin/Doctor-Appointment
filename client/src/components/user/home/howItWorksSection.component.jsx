const steps = [
  {
    step: "01",
    title: "Search Doctor",
    description: "Find doctors by specialization, name, or location easily.",
    icon: "🔍",
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: "02",
    title: "Choose Date & Time",
    description: "Pick a date and time slot that works best for you.",
    icon: "📅",
    color: "bg-green-100 text-green-600",
  },
  {
    step: "03",
    title: "Confirm Appointment",
    description: "Get instant confirmation on your email and phone.",
    icon: "✅",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    step: "04",
    title: "Visit or Consult",
    description: "Visit the doctor in clinic or consult online from home.",
    icon: "🏥",
    color: "bg-red-100 text-red-600",
  },
]

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-medium mb-2">
            How it works
          </p>
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Book care in four simple steps
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Designed to be effortless. From search to consultation
            in under 2 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="relative">

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-blue-100 z-0"></div>
              )}

              <div className="bg-[#EFF6FF] rounded-2xl p-6 text-center relative z-10 hover:shadow-md transition-all">

                {/* Step Number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.step}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4 mt-3`}>
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-slate-800 font-bold text-base mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorksSection