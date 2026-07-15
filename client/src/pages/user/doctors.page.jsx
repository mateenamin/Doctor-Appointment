import DoctorsHero from "../../components/user/doctors/doctorsHero.component"
import DoctorsFilter from "../../components/user/doctors/doctorsFilter.component"
import DoctorsGrid from "../../components/user/doctors/doctorsGrid.component"

const DoctorsPage = () => {
  return (
    <main>
      <DoctorsHero />
      <div className="max-w-7xl mx-auto px-6 py-10 flex gap-8">
        <DoctorsFilter />
        <DoctorsGrid />
      </div>
    </main>
  )
}

export default DoctorsPage