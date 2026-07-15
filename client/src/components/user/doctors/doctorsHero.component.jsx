const DoctorsHero = () => {
  return (
    <section className="bg-[#EFF6FF] py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
        <p className="text-blue-500 text-sm font-medium mb-3">
          Our Doctors
        </p>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Find Your <span className="text-blue-500">Perfect Doctor</span>
        </h1>

        {/* Subheading */}
        <p className="text-slate-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Browse from 150+ verified specialists. Filter by
          specialization, availability, and fee to find the
          right doctor for you.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 max-w-2xl mx-auto flex items-center gap-3">

          {/* Doctor Name */}
          <div className="flex items-center gap-2 flex-1 px-3">
            <span className="text-slate-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search doctor name..."
              className="outline-none text-sm text-slate-700 w-full placeholder:text-slate-400"
            />
          </div>

          <div className="w-px h-8 bg-slate-200"></div>

          {/* Specialization */}
          <div className="flex items-center gap-2 flex-1 px-3">
            <span className="text-slate-400 text-lg">🏥</span>
            <input
              type="text"
              placeholder="Specialization..."
              className="outline-none text-sm text-slate-700 w-full placeholder:text-slate-400"
            />
          </div>

          <div className="w-px h-8 bg-slate-200"></div>

          {/* Location */}
          <div className="flex items-center gap-2 flex-1 px-3">
            <span className="text-slate-400 text-lg">📍</span>
            <input
              type="text"
              placeholder="Location..."
              className="outline-none text-sm text-slate-700 w-full placeholder:text-slate-400"
            />
          </div>

          {/* Search Button */}
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-600 transition-all flex-shrink-0">
            Search
          </button>

        </div>

        {/* Quick Filters */}
        <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
          {['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dentistry'].map((tag, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                index === 0
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-500'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DoctorsHero