const testimonials = [
  {
    name: "Olivia Martinez",
    location: "Lahore, Pakistan",
    review: "Finding a specialist used to be so stressful. DocBook made it incredibly easy. I booked an appointment with a cardiologist within minutes!",
    rating: 5,
    initials: "OM",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Ryan Cooper",
    location: "Karachi, Pakistan",
    review: "The verified doctors feature gives me so much confidence. I know I am always seeing a qualified professional. Highly recommend DocBook!",
    rating: 5,
    initials: "RC",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Priya Sharma",
    location: "Islamabad, Pakistan",
    review: "I love how easy it is to book and manage appointments. The reminders are super helpful and the doctors are amazing!",
    rating: 5,
    initials: "PS",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Alicia Kim",
    location: "Lahore, Pakistan",
    review: "DocBook has completely changed how I manage my family healthcare. Everything is in one place. Absolutely love this platform!",
    rating: 5,
    initials: "AK",
    color: "bg-red-100 text-red-600",
  },
]

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-medium mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Loved by patients everywhere
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Real stories from people who trust us with their care.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#EFF6FF] rounded-2xl p-6 hover:shadow-md transition-all"
            >
              {/* Stars */}
              <div className="flex text-yellow-400 text-sm mb-4">
                {"★".repeat(item.rating)}
              </div>

              {/* Review */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {item.initials}
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-sm">
                    {item.name}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {item.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection