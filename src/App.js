import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import RestaurantMenu from "./components/RestaurantMenu";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";

const Cart = lazy(() => import("./components/Cart"));

import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
const RestaurantCollectionsInfo = lazy(() =>
	import("./components/RestaurantCollectionsInfo")
);
import Shimmer from "./components/Shimmer";
import SearchBox from "./components/SearchBox";
import { Toaster } from "react-hot-toast";
import LocationContext from "./utils/LocationContext";
import CityContext from "./utils/CityContext";
import ContactPage from "./components/ContactPage";

const AppLayout = () => {
	const [user, setUser] = useState({
		name: "Akash deep",
		email: "ad3500476@gmail.com",
	});
	const [location, setLocation] = useState({
		latitude: 28.7040592, // Delhi
		longitude: 77.1024901,
	});
	const [city, setCity] = useState("DELHI");
	return (
		<Provider store={store}>
			<UserContext.Provider value={{ user: user, setUser: setUser }}>
				<LocationContext.Provider
					value={{ location: location, setLocation: setLocation }}
				>
					<CityContext.Provider
						value={{ city: city, setCity: setCity }}
					>
						<Toaster
							position="bottot-center"
							reverseOrder={false}
							gutter={30}
							containerClassName="toaster-container"
							toastOptions={{
								className: "toaster-toast",
								duration: 1500,
							}}
						/>
						<Header />
						<Outlet />
						<Footer />
					</CityContext.Provider>
				</LocationContext.Provider>
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/search",
				element: <SearchBox />,
			},
			{
				path: "/about",
				element: <About />,
				children: [
					{
						path: "profile",
						element: <Profile />,
					},
				],
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
			{
				path: "/cart",
				element: (
					<Suspense fallback={<Shimmer />}>
						<Cart />
					</Suspense>
				),
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />,
			},
			{
				path: "/collections/:resId",
				element: (
					<Suspense fallback={<Shimmer />}>
						<RestaurantCollectionsInfo />
					</Suspense>
				),
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);





// import React, { lazy, Suspense } from "react";
// import ReactDOM from "react-dom"
// import Header from "./components/Header";
// import Body from "./components/Body";
// //import About from "./components/About"; 
// import ContactForm from "./components/ContactPage";
// import ErrorPage from "./components/ErrorPage";
// import Footer from "./components/Footer";
// import Cart from "./components/Cart";
// import Careers from "./components/Careers";
// import Ccskhana from "./components/Ccskhana";
// import Team from "./components/Team";
// import Ccskhanainstamart from "./components/Ccskhanainstamart";
// import Genie from "./components/Genie";
// import DDU from "./components/DDU";
// import APJ from "./components/APJ";
// import KP from "./components/KP";
// import MP from "./components/MP";
// import KP from "./components/KP";
// import Ground from "./components/Ground";
// import RK from "./components/RK";
// import PartnerWithUs from "./components/PartnerWithUs";
// import HelpSupport from "./components/HelpSupport";
// import RestaurentMenu from "./components/RestaurentMenu";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// //===============================================================================================================

// //React Element
// // const heading = React.createElement(
// //     "h1",
// //     {id:"heading"},
// //     "Namaste React using Normal"
// // );

// // const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>

// //===============================================================================================================

// //Header here

// //RestaurentCard.js here

// //resList.js here

// //Body.js here

// const Grocery = lazy(() => import("./components/Grocery"));

// const About = lazy(() => import("./components/About"));

// const AppLayout = () => {
//   return (
//   <div className="app">
//       <Header />
      
//       <Outlet />
//       <Footer/>
//   </div>
//   )
// }

// const appRouter =createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout/>,
//     children:[
//       {
//         path:"/",
//         element:<Body />
//       },
//       {
//         path: "/about",
//         element:(
//         <Suspense fallback={<h1>Loading...</h1>}>
//           <About/>
//         </Suspense>
//         ),
//       },
//       {
//         path: "/contact",
//         element: <ContactForm/>
//       },
//       {
//         path: "/cart",
//         element: <Cart/>
//       },
//       {
//         path: "/careers",
//         element: <Careers/>
//       },
//       {
//         path: "/team",
//         element: <Team/>
//       },
//       {
//         path: "/ccskhana",
//         element: <Ccskhana/>
//       },
//       {
//         path: "/instamart",
//         element: <Ccskhanainstamart/>
//       },
//       {
//         path: "/genie",
//         element: <Genie/>
//       },
//       {
//         path: "/help",
//         element: <HelpSupport/>
//       },
//       {
//         path: "/ddu",
//         element: <DDU/>
//       },
//       {
//         path: "/apj",
//         element: <APJ/>
//       },
//       {
//         path: "/kp",
//         element: <KP/>
//       },
//       {
//         path: "/mp",
//         element: <MP/>
//       },
//       {
//         path: "/rk",
//         element: <RK/>
//       },
//       {
//         path: "/ground",
//         element: <Ground/>
//       },
//       {
//         path: "/partner",
//         element: <PartnerWithUs/>
//       },
//       {
//         path: "/grocery",
//         element: (
//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Grocery/>
//           </Suspense>
//           )
//       },
//       {
//         path: "/restaurents/:resId",
//         element: <RestaurentMenu/>
//       },
      
//     ],
//     errorElement:<ErrorPage/>,
//   },
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<RouterProvider router={appRouter}/>);