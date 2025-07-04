import { IMG_URL } from "../constant";
const RestaurantCard = (restaurantList) => {
	const {
		name,
		cuisines,
		cloudinaryImageId,
		avgRating,
		sla,
		areaName,
		aggregatedDiscountInfoV3,
	} = restaurantList;

	return (
		<div className="card">
			<div className="img-box">
				<img className="img" src={IMG_URL + cloudinaryImageId} />
				<div className="card-offer">
					<h3 className="card-head">
						{aggregatedDiscountInfoV3?.header}{" "}
						{aggregatedDiscountInfoV3?.subHeader}
					</h3>
				</div>
			</div>
			<h3 className="card-head">{name}</h3>
			<h4>
				{avgRating ? (
					<>
						<span>
							<i className="fa-solid fa-star"></i>
						</span>
						{avgRating} •
					</>
				) : null}{" "}
				{sla?.slaString}
			</h4>
			<p className="card-head">{cuisines?.join(", ")}</p>
			<p>{areaName}</p>
			<h4>
				{/* Props drilling */}
				{/* {user.name} || {user.email} */}
			</h4>
			<h4>
				{/* useContext  */}
				{/* {user.name} || {user.email} */}
			</h4>
		</div>
	);
};
export default RestaurantCard;


// import { CDN_URL } from "../utils/constants";

// // After the destructuring the code
// const RestaurentCard = (props) => {
//     const {resData} = props;
      
//     const {cloudinaryImageId,aggregatedDiscountInfoV3: { header = "" } = {},sla:{slaString},name,cuisines,avgRating,costForTwo} = resData?.info;
//     return ( 
//     <div className="m-2 ml-14 bg-gray-100 hover:bg-gray-200 items-centerborder-solid p-1 hover:border-2 border-gray-300 " >
//         <img className="w-64 p-2 hover:p-0 h-48" alt="res-img" src={
//             CDN_URL +
//         resData.info.cloudinaryImageId
//         }
        
//         />
//         <p className="font-bold text-3xl">{header}</p>
        

//         <h4 className="pt-2 w-56 font-bold">{name}</h4>
//         <p className="pt-1 w-52">{cuisines.join(", ")}</p>
//         <p className="bg-green-300 rounded-sm pl-2 pr-2 w-12 mt-2 text-sm">{avgRating}★</p>
//         {/* <button className="bg-green-300 rounded-sm pl-2 pr-2">{avgRating}★</button> */}
//         <p className="">{costForTwo}</p>
//         <p className="pl-1">{slaString}</p>
//     </div>
//     )
// };

// export const withPromotedLabel = (RestaurentCard) => {
//     return (props) => {
//        return (
//         <div>
//              <label className="">Promoted</label>
//              <RestaurentCard {...props}/>
//         </div>
//        );
//     };
// }

// export default RestaurentCard;