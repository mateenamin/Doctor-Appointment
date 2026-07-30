const AboutHero = () => {
  return (
    <section className="bg-[#EFF6FF] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
        <p className="text-blue-500 text-sm font-medium mb-3">
          About Us
        </p>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          We're on a mission to make <br />
          <span className="text-blue-500">healthcare accessible</span> for everyone
        </h1>

        {/* Subheading */}
        <p className="text-slate-500 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
          DocBook was founded with a simple belief — every person deserves
          quick, easy access to quality healthcare. We connect patients
          with verified doctors across Pakistan, making appointments
          effortless and care more personal.
        </p>

        {/* Stats Row */}
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {[
            { number: "2020", label: "Founded" },
            { number: "150+", label: "Verified Doctors" },
            { number: "20k+", label: "Happy Patients" },
            { number: "50+", label: "Cities Covered" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-blue-500 mb-1">
                {stat.number}
              </p>
              <p className="text-slate-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AboutHero