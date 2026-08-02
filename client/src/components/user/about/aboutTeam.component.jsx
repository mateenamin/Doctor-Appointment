const team = [
  {
    name: "Dr. Kamran Ahmed",
    role: "Founder & CEO",
    specialty: "Cardiologist",
    initials: "KA",
    color: "bg-blue-100 text-blue-600",
    bio: "15+ years of medical experience. Founded DocBook to make healthcare accessible for all Pakistanis.",
  },
  {
    name: "Sara Malik",
    role: "Co-Founder & CTO",
    specialty: "Tech Lead",
    initials: "SM",
    color: "bg-green-100 text-green-600",
    bio: "Software engineer with 10+ years experience. Building technology that connects doctors and patients.",
  },
  {
    name: "Dr. Ayesha Khan",
    role: "Chief Medical Officer",
    specialty: "Neurologist",
    initials: "AK",
    color: "bg-purple-100 text-purple-600",
    bio: "Ensures all doctors on platform meet the highest medical standards and patient care quality.",
  },
  {
    name: "Usman Tariq",
    role: "Head of Operations",
    specialty: "Operations",
    initials: "UT",
    color: "bg-orange-100 text-orange-600",
    bio: "Manages day-to-day operations ensuring smooth experience for both doctors and patients.",
  },
  {
    name: "Fatima Raza",
    role: "Head of Marketing",
    specialty: "Marketing",
    initials: "FR",
    color: "bg-pink-100 text-pink-600",
    bio: "Building DocBook's brand and helping more Pakistanis discover better healthcare solutions.",
  },
  {
    name: "Ali Hassan",
    role: "Lead Developer",
    specialty: "Engineering",
    initials: "AH",
    color: "bg-cyan-100 text-cyan-600",
    bio: "Full-stack developer building and maintaining DocBook's platform for millions of users.",
  },
]

const AboutTeam = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm font-medium mb-2">
            Our Team
          </p>
          <h2 className="text-3xl font-bold text-slate-800 mb-3">
            Meet the people behind DocBook
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            A passionate team of doctors, engineers, and healthcare
            professionals working together to transform healthcare in Pakistan.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#EFF6FF] rounded-2xl p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-4">

                {/* Avatar */}
                <div className={`w-14 h-14 rounded-xl ${member.color} flex items-center justify-center text-lg font-bold flex-shrink-0`}>
                  {member.initials}
                </div>

                {/* Name + Role */}
                <div>
                  <h3 className="text-slate-800 font-bold text-base">
                    {member.name}
                  </h3>
                  <p className="text-blue-500 text-xs font-medium">
                    {member.role}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {member.specialty}
                  </p>
                </div>

              </div>

              {/* Bio */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex gap-2 mt-4">
                {['in', 'tw', 'gh'].map((social, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-slate-400 text-xs cursor-pointer hover:bg-blue-500 hover:text-white transition-all"
                  >
                    {social}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-12 bg-[#EFF6FF] rounded-2xl p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            Want to join our team?
          </h3>
          <p className="text-slate-500 text-sm mb-6">
            We are always looking for passionate people to help us
            transform healthcare in Pakistan.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-all">
            View Open Positions
          </button>
        </div>

      </div>
    </section>
  )
}

export default AboutTeam