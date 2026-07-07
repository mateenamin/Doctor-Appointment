
import {Outlet}  from 'react-router-dom'
import Navbar from '../components/common/Navbar.component';
import Footer from '../components/common/footer.component';

const UserLayout = ()=> {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserLayout