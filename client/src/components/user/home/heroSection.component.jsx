









const HeroSection = () => {
  return (
    <section className="bg-[#EFF6FF] py-16 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">

        {/* Left Side */}
        <div className="flex-1">
          <p className="text-blue-500 text-sm font-medium mb-3">
            Trusted by 10,000+ patients
          </p>
          <h1 className="text-5xl font-bold text-slate-800 leading-tight mb-4">
            Find Trusted <br />
            Doctors & <span className="text-blue-500">Book</span> <br />
            Instantly
          </h1>
          <p className="text-slate-500 text-base mb-8 max-w-md leading-relaxed">
            Connect with verified specialists, schedule appointments
            in seconds, and manage your entire healthcare journey —
            all in one seamless platform.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mb-10">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600">
              Book Appointment
            </button>
            <button className="border border-slate-300 text-slate-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-50">
              Find Doctors
            </button>
          </div>

          {/* Trusted Users */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-white"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">20k+ Happy Patients</p>
              <div className="flex text-yellow-400 text-xs">★★★★★</div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center relative">

          {/* Rating Badge */}
          <div className="absolute top-4 right-4 bg-white rounded-xl shadow-md px-4 py-2 flex items-center gap-2 z-10">
            <span className="text-yellow-400 text-lg">★</span>
            <div>
              <p className="text-sm font-bold text-slate-800">4.9</p>
              <p className="text-xs text-slate-400">Rating</p>
            </div>
          </div>

          {/* Available Badge */}
          <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-md px-4 py-2 z-10">
            <p className="text-xs text-green-500 font-medium">● Available Today</p>
          </div>

          {/* Doctor Image */}
          <img
            src="/images/hero-doctor.png"
            alt="Doctor"
            className="w-full max-w-lg object-cover rounded-3xl"
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection