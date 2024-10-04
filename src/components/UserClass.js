import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.name + "Child Constructor")

        //this is the duumy data before fetching the live API data
        this.state = {
            UserInfo: {
                name: "Dummy name",
                location: "default location",
                avatar_url: "https//:dummy-img.com",
            },
        }
    };

 async componentDidMount() {
        console.log(this.props.name + "child componentDid Mount")

        //Now,we can fetch the live api as shown-
     const data = await fetch("https://api.github.com/users/Sarvjeetsinghh");
      //here json data change formed
     const json = await data.json();


      //here update the dummy data from api data
      this.setState({
        UserInfo : json,
      })
      console.log(json)
   }

   componentDidUpdate() {
    console.log("componentDidUpdate called")
   }

   componentWillUnmount() {
    console.log("component will unmount")
   }

    render() {
        console.log(this.props.name + "child render")

        //destructuring the data
        const {name,location,avatar_url} = this.state.UserInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h4>Location: {location}</h4>
            </div>
        )
    }
}

export default UserClass;