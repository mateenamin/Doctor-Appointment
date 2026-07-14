import { useNavigate } from 'react-router-dom'

const CtaSection = () => {
  const navigate = useNavigate()

  return (
    <section className="py-16 px-6 bg-[#EFF6FF]">
      <div className="max-w-7xl mx-auto">

        {/* CTA Card */}
        <div className="bg-blue-500 rounded-3xl px-10 py-16 text-center relative overflow-hidden">

          {/* Background Circles */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-blue-600 rounded-full opacity-30 translate-x-1/2 translate-y-1/2"></div>

          {/* Content */}
          <div className="relative z-10">
            <p className="text-blue-100 text-sm font-medium mb-3">
              Get started today
            </p>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Your Health Deserves <br />
              the Best Care.
            </h2>
            <p className="text-blue-100 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Join thousands of patients who trust DocBook for their
              healthcare needs. Book your first appointment today —
              it's fast, easy, and free.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button
                onClick={() => navigate('/doctors')}
                className="bg-white text-blue-500 px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-50 transition-all"
              >
                Book Appointment
              </button>
              <button
                onClick={() => navigate('/about')}
                className="border border-white text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-400 transition-all"
              >
                Learn More
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default CtaSection