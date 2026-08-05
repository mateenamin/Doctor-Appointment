const ContactHero = () => {
  return (
    <section className="bg-[#EFF6FF] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Tag */}
        <p className="text-blue-500 text-sm font-medium mb-3">
          Contact Us
        </p>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          We'd love to <span className="text-blue-500">hear from you</span>
        </h1>

        <p className="text-slate-500 text-sm max-w-md mx-auto mb-12 leading-relaxed">
          Have a question, feedback, or need help? Our team is here
          to assist you. Reach out and we'll get back to you within
          24 hours.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: "📧",
              title: "Email Us",
              value: "info@docbook.pk",
              desc: "We reply within 24 hours",
              color: "bg-blue-100",
            },
            {
              icon: "📞",
              title: "Call Us",
              value: "+92 300 1234567",
              desc: "Mon - Sat, 9am to 6pm",
              color: "bg-green-100",
            },
            {
              icon: "📍",
              title: "Visit Us",
              value: "Lahore, Pakistan",
              desc: "DHA Phase 5, Lahore",
              color: "bg-purple-100",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-all"
            >
              <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center text-2xl mx-auto mb-4`}>
                {item.icon}
              </div>
              <h3 className="text-slate-800 font-bold text-sm mb-1">
                {item.title}
              </h3>
              <p className="text-blue-500 font-medium text-sm mb-1">
                {item.value}
              </p>
              <p className="text-slate-400 text-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ContactHero