
import React from 'react'
import PrivateRoute from './components/PrivateRoute';

import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/layout/Applayout';
import HomeSection from './components/Pages/HomeSection';
import Courcesmain from './components/Pages/courcespages/coucespages';
import Instructurepages from './components/Pages/Instructure/instructurepages';
import   { ErrorPages }  from './components/Errorpage';

import QuoteForm from './components/Pages/Get a quates/Inquerypage';
import TrainingInfo from './components/Pages/infotraning';
// import Newstpagescources from './components/Pages/Newestcources/Newstpagescources';
import Newstpagescources1 from './components/Pages/Newestcources/Newstpagescources';
import EventDetails from './components/Pages/courcespages/Googlemaplocation';
import Allcourcespages from './components/Pages/Allcources/Allcourcespages';
import PartnershipSlider from './components/patneershipcompany';
import CounterStats from './components/Counter';
import Devopsengenerpages from './components/Pages/Allcources/moreinfocourcespages/DevOps Engineer/Devopsengenerpages';
import Contactpage from './components/Pages/Contact/Contactpage';
import Servicespages from './components/Pages/Services/servicespages';
import Websolutionhomepages from './components/Pages/Services/multipagesservices/websolutionhomepages';
import Quatasepage from './components/Pages/Get a quates/quatasepage';
import Aboutpage from './components/Aboutpage/aboutpage';
import SignUp from './components/Registrationpage';
import Login from './components/Loginpage';
import YouTubePlaylist from './components/Dashboardpage';
import DashboardAdmin from './components/AdminDashbord';

function App() {
  const appRouter = createBrowserRouter(
    [

      {

        path: "/",
        element: <AppLayout />,
        errorElement:<ErrorPages/>,
        children: [
          {
            path: "/",
            element: (<>
            <HomeSection/>
            <CounterStats/>
          <Newstpagescources1/>
       
            <Courcesmain/>
            <TrainingInfo/>
            <Instructurepages/>
            <PartnershipSlider/>
            <EventDetails/>
            
            
            </>)
          },
          {
            path: "/Get-a-Quote",
            element:<Quatasepage/>
          },
          {
            path: "/Cources-pages",
            element: <Allcourcespages/>
          },
          {
            path: "/Cources-pages/5",
            element: <Devopsengenerpages/>
          },{
            path:"/contact",
            element:<Contactpage/>
          },
          {
            path: "/services",
            element: <Servicespages/>
          }
          ,{
            path: "/services/website-solutions",
            element:<Websolutionhomepages/>
          },
          {
            path: "/about",
            element: <Aboutpage/>
          },
          {
            path: "/register",
            element: <SignUp/>
          },
           {
            path: "/login",
            element: <Login/>
          }
          ,
          {
  path: "/dashboard",
  element: (
    <PrivateRoute>
      <YouTubePlaylist/>
    </PrivateRoute>
  )
}

          
            
          
        
        ]
        
      },
      {
path: "/DashboardAdmin",
            element: <DashboardAdmin/>
      }
    
    ]
  );
    

  return (
    
<>
<main>
   
   <RouterProvider router={appRouter} />
  
 </main>



</>
  )
}

export default App;
