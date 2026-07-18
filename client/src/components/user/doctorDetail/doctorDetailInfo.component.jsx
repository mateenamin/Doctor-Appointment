const DoctorDetailInfo = () => {
  return (
    <div className="flex-1">

      {/* About */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
        <h2 className="text-slate-800 font-bold text-lg mb-4">About Doctor</h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Dr. Ali Ahmed is a highly experienced Cardiologist with over 8 years
          of clinical practice. He completed his MBBS from King Edward Medical
          University and his Fellowship in Cardiology from Lahore General Hospital.
          He specializes in diagnosis and treatment of heart diseases, hypertension,
          and cardiac rehabilitation. He is known for his patient-friendly approach
          and accurate diagnosis.
        </p>
      </div>

      {/* Education */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
        <h2 className="text-slate-800 font-bold text-lg mb-4">Education</h2>
        <div className="flex flex-col gap-4">
          {[
            { degree: "MBBS", institute: "King Edward Medical University, Lahore", year: "2012" },
            { degree: "FCPS (Cardiology)", institute: "College of Physicians & Surgeons Pakistan", year: "2016" },
            { degree: "Fellowship", institute: "Lahore General Hospital", year: "2018" },
          ].map((edu, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-500 flex-shrink-0">
                🎓
              </div>
              <div>
                <p className="text-slate-800 font-semibold text-sm">{edu.degree}</p>
                <p className="text-slate-500 text-xs">{edu.institute}</p>
                <p className="text-blue-500 text-xs mt-1">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specializations */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
        <h2 className="text-slate-800 font-bold text-lg mb-4">Specializations</h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Heart Disease',
            'Hypertension',
            'Cardiac Rehabilitation',
            'Echocardiography',
            'Arrhythmia',
            'Heart Failure',
            'Preventive Cardiology',
          ].map((spec, index) => (
            <span
              key={index}
              className="bg-[#EFF6FF] text-blue-500 text-xs font-medium px-4 py-2 rounded-full border border-blue-100"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 mb-6">
        <h2 className="text-slate-800 font-bold text-lg mb-4">Experience</h2>
        <div className="flex flex-col gap-4">
          {[
            { role: "Senior Cardiologist", hospital: "Lahore General Hospital", period: "2020 - Present" },
            { role: "Cardiologist", hospital: "Services Hospital, Lahore", period: "2018 - 2020" },
            { role: "Medical Officer", hospital: "Mayo Hospital, Lahore", period: "2016 - 2018" },
          ].map((exp, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                🏥
              </div>
              <div className="flex-1">
                <p className="text-slate-800 font-semibold text-sm">{exp.role}</p>
                <p className="text-slate-500 text-xs">{exp.hospital}</p>
              </div>
              <span className="text-blue-500 text-xs font-medium flex-shrink-0">
                {exp.period}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-slate-800 font-bold text-lg">Patient Reviews</h2>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-slate-800 font-bold">4.9</span>
            <span className="text-slate-400 text-sm">(120 reviews)</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { name: "Ahmed Khan", rating: 5, date: "July 2026", comment: "Dr. Ali Ahmed is an excellent doctor. Very thorough and professional. Highly recommended!" },
            { name: "Fatima Malik", rating: 5, date: "June 2026", comment: "Best cardiologist in Lahore! He explained everything clearly and made me feel comfortable." },
            { name: "Usman Butt", rating: 4, date: "June 2026", comment: "Great doctor, very knowledgeable. Wait time was a bit long but worth it." },
          ].map((review, index) => (
            <div key={index} className="border-b border-slate-100 pb-4 last:border-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm">{review.name}</p>
                    <p className="text-slate-400 text-xs">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 text-xs">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed pl-12">
                {review.comment}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default DoctorDetailInfo