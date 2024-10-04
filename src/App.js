import React from "react";
import ReactDOM from "react-dom"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"; 
import ContactForm from "./components/ContactPage";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Careers from "./components/Careers";
import Ccskhana from "./components/Ccskhana";
import Team from "./components/Team";
import Ccskhanainstamart from "./components/Ccskhanainstamart";
import Genie from "./components/Genie";
import DDU from "./components/DDU";
import APJ from "./components/APJ";
import KP from "./components/KP";
import MP from "./components/MP";
import KP from "./components/KP";
import Ground from "./components/Ground";
import RK from "./components/RK";
import PartnerWithUs from "./components/PartnerWithUs";
import HelpSupport from "./components/HelpSupport";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ImPodcast } from "react-icons/im";


//===============================================================================================================

//React Element
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React using Normal"
// );

// const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>

//===============================================================================================================

//Header here

//RestaurentCard.js here

//resList.js here

//Body.js here

const AppLayout = () => {
  return (
  <div className="app">
      <Header />
      
      <Outlet />
      <Footer/>
  </div>
  )
}

const appRouter =createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <ContactForm/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/careers",
        element: <Careers/>
      },
      {
        path: "/team",
        element: <Team/>
      },
      {
        path: "/ccskhana",
        element: <Ccskhana/>
      },
      {
        path: "/instamart",
        element: <Ccskhanainstamart/>
      },
      {
        path: "/genie",
        element: <Genie/>
      },
      {
        path: "/help",
        element: <HelpSupport/>
      },
      {
        path: "/ddu",
        element: <DDU/>
      },
      {
        path: "/apj",
        element: <APJ/>
      },
      {
        path: "/kp",
        element: <KP/>
      },
      {
        path: "/mp",
        element: <MP/>
      },
      {
        path: "/rk",
        element: <RK/>
      },
      {
        path: "/ground",
        element: <Ground/>
      },
      {
        path: "/partner",
        element: <PartnerWithUs/>
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurentMenu/>
      },
      
    ],
    errorElement:<ErrorPage/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);