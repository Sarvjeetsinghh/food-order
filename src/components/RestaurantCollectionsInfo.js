import { Link, useParams } from "react-router-dom";
import { ShimmerCol } from "./Shimmer";
// import RestaurentCard from "./RestauraentCard";
// import RestaurantCard from "./RestaurantCard";
import RestaurentCard from "./RestaurentCard";
import useCollections from "../utils/useCollections";
import { handleScrollTop } from "../utils/helper";

const RestaurantCollectionsInfo = () => {
	const { resId } = useParams();
	const restaurant = useCollections(resId);
	return !restaurant ? (
		<ShimmerCol />
	) : (
		<div className="body-box-res body-box">
			<div className="main-header-box">
				<h2 className="main-card-title">
					{restaurant[0]?.card?.card?.title}
				</h2>
				<p
					className="main-card-title"
					style={{ marginTop: "-15px", marginBottom: "-10px" }}
				>
					{restaurant[0]?.card?.card?.description}
				</p>
				<h2 className="main-card-title">Restaurants to explore</h2>
				<div className="main-card">
					{restaurant?.map((restaurant) => {
						return restaurant?.card?.card?.info ? (
							<Link
								to={
									"/restaurant/" +
									restaurant?.card?.card?.info?.id
								}
								key={
									"infoCard" +
									restaurant?.card?.card?.info?.id
								}
								onClick={() => handleScrollTop()}
							>
								<RestaurentCard
									{...restaurant?.card?.card?.info}
								/>
							</Link>
						) : null;
					})}
				</div>
			</div>
		</div>
	);
};
export default RestaurantCollectionsInfo;