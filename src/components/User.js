const User = (props) => {
    return (
        <div className="user">
            <h2>{props.name}</h2>
            <h4>Location: {props.location}</h4>
            <h4>Contact: @sarvjeet</h4>
        </div>
    )
}

export default User;