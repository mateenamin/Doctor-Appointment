import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";






import UserLayout from "../layouts/UserLayout";


import HomePage from "../pages/user/home.page";
import DoctorsPage from '../pages/user/doctors.page'





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