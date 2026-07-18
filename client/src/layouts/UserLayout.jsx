
import {Outlet ,useLocation}  from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/common/Navbar.component';
import Footer from '../components/common/footer.component';

const UserLayout = ()=> {

    const { pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default UserLayout