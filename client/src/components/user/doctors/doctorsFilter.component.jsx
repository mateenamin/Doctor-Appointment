import { useState } from 'react'

const specializations = [
  "All",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dentistry",
  "Dermatology",
  "Gynecology",
  "Eye Care",
]

const DoctorsFilter = () => {
  const [selectedSpec, setSelectedSpec] = useState("All")
  const [selectedAvailability, setSelectedAvailability] = useState("All")
  const [selectedFee, setSelectedFee] = useState("All")

  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-slate-800 font-bold text-base">Filters</h3>
          <button className="text-blue-500 text-xs hover:underline">
            Clear all
          </button>
        </div>

        {/* Specialization */}
        <div className="mb-6">
          <h4 className="text-slate-700 font-semibold text-sm mb-3">
            Specialization
          </h4>
          <div className="flex flex-col gap-2">
            {specializations.map((spec, index) => (
              <button
                key={index}
                onClick={() => setSelectedSpec(spec)}
                className={`text-left px-3 py-2 rounded-xl text-sm transition-all ${
                  selectedSpec === spec
                    ? 'bg-blue-500 text-white font-medium'
                    : 'text-slate-600 hover:bg-[#EFF6FF] hover:text-blue-500'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-slate-100 mb-6"></div>

        {/* Availability */}
        <div className="mb-6">
          <h4 className="text-slate-700 font-semibold text-sm mb-3">
            Availability
          </h4>
          <div className="flex flex-col gap-2">
            {['All', 'Available Today', 'Available This Week'].map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedAvailability(item)}
                className={`text-left px-3 py-2 rounded-xl text-sm transition-all ${
                  selectedAvailability === item
                    ? 'bg-blue-500 text-white font-medium'
                    : 'text-slate-600 hover:bg-[#EFF6FF] hover:text-blue-500'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-slate-100 mb-6"></div>

        {/* Fee Range */}
        <div className="mb-6">
          <h4 className="text-slate-700 font-semibold text-sm mb-3">
            Fee Range
          </h4>
          <div className="flex flex-col gap-2">
            {[
              'All',
              'Under Rs. 1,000',
              'Rs. 1,000 - 2,000',
              'Rs. 2,000 - 3,000',
              'Above Rs. 3,000',
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedFee(item)}
                className={`text-left px-3 py-2 rounded-xl text-sm transition-all ${
                  selectedFee === item
                    ? 'bg-blue-500 text-white font-medium'
                    : 'text-slate-600 hover:bg-[#EFF6FF] hover:text-blue-500'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-slate-100 mb-6"></div>

        {/* Rating */}
        <div>
          <h4 className="text-slate-700 font-semibold text-sm mb-3">
            Minimum Rating
          </h4>
          <div className="flex flex-col gap-2">
            {['Any', '4.0+', '4.5+', '4.8+'].map((item, index) => (
              <button
                key={index}
                className="text-left px-3 py-2 rounded-xl text-sm text-slate-600 hover:bg-[#EFF6FF] hover:text-blue-500 transition-all flex items-center gap-2"
              >
                <span className="text-yellow-400">★</span>
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default DoctorsFilter