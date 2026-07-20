import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";






import UserLayout from "../layouts/UserLayout";


import HomePage from "../pages/user/home.page";
import DoctorsPage from '../pages/user/doctors.page'
import DoctorDetailPage from '../pages/user/doctorDetail.page'



import LoginPage from '../pages/user/auth/loginForm.component'
import SignupPage from '../pages/user/auth/signupForm.component'





const Router = () => {


    const router = createBrowserRouter(
        [
            {
      path: "/",
      element: (
        <>
          <UserLayout />
        </>
      ),
      children: [
        { path: "", element: <HomePage /> },
        { path: "doctors", element: <DoctorsPage /> },
        { path: "doctors/:id", element: <DoctorDetailPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/signup", element: <SignupPage /> },
 
      ],
    },  
    // {
    //     path: "/admin",
    //   element: (
    //     <>
    //       <AdminLayout />
    //     </>
    //   ),
    //   children: [
    //  { path: "dashboard", element: <Dashboard /> },
    // { path: "doctors", element: <ManageDoctors /> },
    // { path: "appointments", element: <ManageAppointments /> },
    //   ],
    // },
    // {
    //   path: "/login",
    //   element: <Login />
    // },
 
    
    // {
    //   path: "*",
    //   element: <NotFound />
    // }
    
       ]
    );
    return <RouterProvider router={router} />;
}

export default Router