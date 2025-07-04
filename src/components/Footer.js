import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
	// useContext --------------------------------
	const { user } = useContext(UserContext);
	return (
		<div className="footer">
			<div>
				<div className="footer-s">
					<div>
						<h3>Food Home</h3>
						<p>© 2024 sarvjeet</p>
						<p>Pvt. Ltd</p>
					</div>
					<div className="social">
						<h3>Social Links</h3>
						<div>
							<i></i>
							<p>
								<a
									href="https://www.linkedin.com/in/sarvjeet-singh-113a36267/"
									target="_blank"
								>
									LinkedIn
								</a>
							</p>
						</div>
						<div>
							<i></i>
							<p>
								<a
									href="https://github.com/Sarvjeetsinghh"
									target="_blank"
								>
									GitHub
								</a>
							</p>
						</div>
						<div>
							<i></i>
							<p>
								<a
									href="https://github.com/Sarvjeetsinghh"
									target="_blank"
								>
									Instagram
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="footer-s2">
					<h3>Company</h3>
					<p>Privacy Policy</p>
					<p>Terms & Conditions</p>
					<p>Help</p>
					<p>Contact Us</p>
					<p>About</p>
					<p>Careers</p>
				</div>
			</div>
			<div>
				{/* <h4>Created By ❤️ {user.name}</h4> */}
				<h4>Created By Sarvjeet</h4>
				{/* <h4>Email - {user.email}</h4> */}
				<h4>sarvjeet.osc@gmail.com</h4>
			</div>
		</div>
	);
};
export default Footer;




// // src/Footer.js
// import React from 'react';
// import { Link } from 'react-router-dom';


// const Footer = () => {
//   return (
//     <footer className="bg-gray-400 rounded-sm p-4">
//       <div className="flex flex-wrap ml-48 p-4">
//         <div className="mt-2 p-4">
//           <h2 className="mt-2 font-sans">CCS KHANA HUB</h2>
//           <p className="mt-2 font-sans"><b>@2025 SCRIET Technologies Pvt. Ltd </b></p>
//           <div>
            
//           </div>
//           <div className="mt-2">
//             <a href="https://www.facebook.com/profile.php?id=100028480991621" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook-f p-2"></i>
//             </a>
//             <a href="https://x.com/Sarvjeet_Singh2?t=voYg4S_nlbYcCPdP5skPUw&s=08" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-twitter p-2"></i>
//             </a>
//             <a href="https://www.instagram.com/sarvjeet_singh2/" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram p-2"></i>
//             </a>
//             <a href="https://www.linkedin.com/in/sarvjeet-singh-113a36267/" target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin-in p-2"></i>
//             </a>
//           </div>
//         </div>
//         <div className="ml-28">
//           <h3>Company</h3>
//           <ul>
//               <li className="font-sans"><Link to={"/about"}>About</Link></li>
//               <li className="font-sans"><Link to={"/careers"}>Careers</Link></li>
//               <li className="font-sans"><Link to={"/team"}>Team</Link></li>
//               <li className="font-sans"><Link to={"/ccskhana"}>CCSKHANA</Link></li>
//               <li className="font-sans"><Link to={"/instamart"}>CCSKHANA Instamart</Link></li>
//               <li className="font-sans"><Link to={"/genie"}>CCSKHANA Genie</Link></li>
//             </ul>
//         </div>
//         <div className="ml-28">
//           <h3>Contact US</h3>
//           <ul>
//               <li><Link to={"/help"}>Help & Support</Link></li>
//               <li><Link to={"/partner"}>Partner with us</Link></li>
//               <li><Link to={"/team"}>Ride with us</Link></li>
//             </ul>
//         </div>
//         <div className="ml-36">
//           <h3>We deliver to:</h3>
//           <ul>
//             <li><Link to="/ddu">DDU Hostel</Link></li>
//             <li><Link to="/apj">APJ Hostel</Link></li>
//             <li><Link to="/rk">RK Hostel</Link></li>
//             <li><Link to="/kp">KP Hostel</Link></li>
//             <li><Link to="/mp">MP Hostel</Link></li>
//             <li><Link to="/ground">Ground</Link></li>
//           </ul>
//         </div>
//       </div>
//       <div className="">
//         <p className="mt-4 ml-52">&copy; 2025 FoodDelivery. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
