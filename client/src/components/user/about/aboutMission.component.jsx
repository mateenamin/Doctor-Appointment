const AboutMission = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          {/* Mission */}
          <div className="bg-[#EFF6FF] rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl mb-5">
              🎯
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              Our Mission
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              To make quality healthcare accessible to every Pakistani by
              connecting patients with verified, experienced doctors through
              a simple, fast, and reliable platform. We believe no one
              should struggle to find the right doctor at the right time.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#EFF6FF] rounded-2xl p-8">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl mb-5">
              🔭
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              Our Vision
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              To become Pakistan's most trusted healthcare platform where
              every patient can find, book, and consult with the best
              doctors — anytime, anywhere. We envision a future where
              healthcare is just a tap away for everyone.
            </p>
          </div>

        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <p className="text-blue-500 text-sm font-medium mb-2">Our Values</p>
          <h2 className="text-3xl font-bold text-slate-800">
            What we stand for
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "💙",
              title: "Patient First",
              description: "Every decision we make puts the patient's health and experience at the center.",
              color: "bg-blue-100",
            },
            {
              icon: "✅",
              title: "Trust & Safety",
              description: "We verify every doctor thoroughly so patients always receive safe, quality care.",
              color: "bg-green-100",
            },
            {
              icon: "⚡",
              title: "Speed & Simplicity",
              description: "We make booking appointments fast and simple — no confusion, no waiting.",
              color: "bg-yellow-100",
            },
            {
              icon: "🌍",
              title: "Accessibility",
              description: "We are committed to making healthcare reachable for everyone across Pakistan.",
              color: "bg-red-100",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-all"
            >
              <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center text-2xl mx-auto mb-4`}>
                {value.icon}
              </div>
              <h3 className="text-slate-800 font-bold text-base mb-2">
                {value.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AboutMission