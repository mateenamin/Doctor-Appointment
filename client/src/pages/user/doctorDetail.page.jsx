import DoctorDetailHero from "../../components/user/doctorDetail/doctorDetailHero.component"
import DoctorDetailInfo from "../../components/user/doctorDetail/doctorDetailInfo.component"
import BookingSection from "../../components/user/doctorDetail/bookingSection.component"

const DoctorDetailPage = () => {
  return (
    <main>
      <DoctorDetailHero />
      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-8">
        <DoctorDetailInfo />
        <BookingSection />
      </div>
    </main>
  )
}

export default DoctorDetailPage