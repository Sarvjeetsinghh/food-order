import { Link, useParams } from "react-router-dom";
import { ShimmerMenu } from "./Shimmer";
import { IMG_RESTAURANT_NOT_URL, IMG_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";
import RestaurantMenuProfile from "./RestaurantMenuProfile";
import RestaurantMenuOffer from "./RestaurantMenuOffer";
import RestaurantMenuInfo from "./RestaurantMenuInfo";
import { useSelector } from "react-redux";
import { handleScrollTop } from "../utils/helper";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const restaurant = useRestaurant(resId);

	const resCart = {
		name: restaurant?.restInfo?.card?.card?.info?.name,
		id: restaurant?.restInfo?.card?.card?.info?.id,
		areaName: restaurant?.restInfo?.card?.card?.info?.areaName,
		imgUrl:
			IMG_URL + restaurant?.restInfo?.card?.card?.info?.cloudinaryImageId,
		distance: restaurant?.restInfo?.card?.card?.info?.sla,
	};
	const resAddedToCart = useSelector((store) => store?.cart);

	if (restaurant?.length == 0) {
		return <ShimmerMenu />;
	}
	return !restaurant || !resCart.name ? (
		<div className="body-box res-not-page">
			<img src={IMG_RESTAURANT_NOT_URL} />
			<h3 className="">Restaurant Not Found.</h3>
			<p>Something went wrong.</p>
			<Link to="/">
				<button>GO BACK</button>
			</Link>
		</div>
	) : (
		<div id="res-menu" className="body-box">
			<RestaurantMenuProfile
				{...restaurant?.restInfo?.card?.card?.info}
			/>
			<div id="res-menu-off">
				{restaurant?.restOffer?.card?.card?.gridElements?.infoWithStyle?.offers.map(
					(offers, idx) => {
						return (
							<RestaurantMenuOffer
								key={"offers" + idx}
								{...offers?.info}
							/>
						);
					}
				)}
			</div>
			<div id="res-menu-cardbox">
				{restaurant?.restMenus?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
					(cardbox, idx) => {
						return cardbox?.card?.card?.itemCards ? (
							<RestaurantMenuInfo
								key={"cardbox" + idx}
								{...cardbox?.card?.card}
								resCart={resCart}
							/>
						) : null;
					}
				)}
			</div>
			{resAddedToCart?.restaurant && (
				<div className="view-cart">
					<h4>{resAddedToCart?.items?.length} item added</h4>
					<Link to="/cart" onClick={() => handleScrollTop()}>
						<h3>VIEW CART</h3>
					</Link>
				</div>
			)}
		</div>
	);
};
export default RestaurantMenu;


// import useRestaurentMenu from "../utils/useRestaurentMenu";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";


// const RestaurantMenu = () => {

//     // const [resInfo,setResInfo] = useState(null);

//     const {resId} = useParams();

//     const resInfo = useRestaurentMenu(resId);

// //Fetching data logic build here
//     // useEffect(() => {
//     //     fetchMenu()
//     // },[])


//     // const fetchMenu = async() => {
//     //     const data = await fetch(MENU_API+resId);
//     //     const json = await data.json();

//     //     console.log(json)
//     //     setResInfo(json.data);
//     // };

//     if(resInfo == null) return <Shimmer/>;

//     const {name} =
//      resInfo?.cards[2]?.card?.card?.info;

//     const {itemCards} =
//      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

//      console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

//      const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//         (c) =>
//              c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     )

//     console.log(categories);

//     return (
//         <div className="ml-10 pt-4 mb-4">
//             <div className="bg-gray-300 ml-96 mb-4 mt-4 w-1/2 rounded-md ">
//             <h1 className="ml-52 pt-4 font-bold font-sans">{name}</h1>
//             <p>{}</p>
//             <ul>
          
//               {itemCards?.map((item) => (
//                  <li className="ml-44 w-96 mt-4 p-4 mb-4 bg-gray-200 rounded-md shadow-md"
//                   key={item.card.info.id}>
//                     <div className="bg-green-300">
//                     <h3>{item.card.info.name}</h3>
//                     <p className="p-2">{"₹ "+ item.card.info.price /100}</p>
//                     <p className="p-2">{"★ "+ item.card.info.ratings.aggregatedRating.rating} stars</p>
//                     <p className="p-2">{item.card.info.description}</p>
//                     </div>
//                  </li>
//                  ))
                 
//                 }
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default RestaurantMenu;