import useRestaurentMenu from "../utils/useRestaurentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurentMenu = () => {

    // const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurentMenu(resId);

//Fetching data logic build here
    // useEffect(() => {
    //     fetchMenu()
    // },[])


    // const fetchMenu = async() => {
    //     const data = await fetch(MENU_API+resId);
    //     const json = await data.json();

    //     console.log(json)
    //     setResInfo(json.data);
    // };

    if(resInfo == null) return <Shimmer/>;

    const {name} =
     resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} =
     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu-container">
            <div className="menu-card">
            <h1>{name}</h1>
            <ul>
          
              {itemCards?.map((item) => (
                 <li className="menu"
                  key={item.card.info.id}>
                    <div>
                    <h3>{item.card.info.name}</h3>
                    <p>{"₹ "+ item.card.info.price /100}</p>
                    <p>{"★ "+ item.card.info.ratings.aggregatedRating.rating} stars</p>
                    <p>{item.card.info.description}</p>
                    </div>
                 </li>
                 ))
                 
                }
                </ul>
            </div>
        </div>
    )
}

export default RestaurentMenu;