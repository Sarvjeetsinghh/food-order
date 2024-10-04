import { CDN_URL } from "../utils/constants";

//After the destructuring the code
const RestaurentCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    return ( 
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img className="res-logo" alt="res-img" src={
            CDN_URL +
        resData.info.cloudinaryImageId
        }
        >
        </img>
        <h4>{name}</h4>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} stars</p>
        <p>{costForTwo}</p>
    </div>
    )
}

export default RestaurentCard;