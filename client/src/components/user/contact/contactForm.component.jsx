import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side — FAQ */}
          <div>
            <p className="text-blue-500 text-sm font-medium mb-2">FAQ</p>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Frequently asked questions
            </h2>

            <div className="flex flex-col gap-4">
              {[
                {
                  q: "How do I book an appointment?",
                  a: "Simply search for a doctor by specialization or name, view their profile, select a date and time slot, and confirm your booking. It takes less than 2 minutes!"
                },
                {
                  q: "Are all doctors verified?",
                  a: "Yes! Every doctor on DocBook goes through a thorough verification process. We check their medical degree, license, and experience before approving their profile."
                },
                {
                  q: "Can I cancel my appointment?",
                  a: "Yes, you can cancel your appointment for free up to 2 hours before the scheduled time. After that, a cancellation fee may apply."
                },
                {
                  q: "How do I become a doctor on DocBook?",
                  a: "Click on 'Sign Up' and select 'I am a Doctor'. Fill in your details and upload your credentials. Our team will verify and approve your profile within 24-48 hours."
                },
                {
                  q: "Is my data secure?",
                  a: "Absolutely! We use industry-standard encryption to protect all your personal and medical data. Your privacy is our top priority."
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#EFF6FF] rounded-xl p-5"
                >
                  <h3 className="text-slate-800 font-semibold text-sm mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side — Form */}
          <div>
            <p className="text-blue-500 text-sm font-medium mb-2">
              Send Message
            </p>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Get in touch with us
            </h2>

            {/* Success Message */}
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-600 text-sm px-4 py-3 rounded-xl mb-6">
                ✅ Message sent successfully! We'll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-700 text-sm font-medium block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Muhammad Ali"
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-all"
                  />
                </div>
                <div>
                  <label className="text-slate-700 text-sm font-medium block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ali@email.com"
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-slate-700 text-sm font-medium block mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-all text-slate-700"
                >
                  <option value="">Select subject</option>
                  <option>Appointment Issue</option>
                  <option>Doctor Verification</option>
                  <option>Technical Problem</option>
                  <option>Billing & Payment</option>
                  <option>General Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-slate-700 text-sm font-medium block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  required
                  rows={5}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white py-3 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send Message →'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactForm