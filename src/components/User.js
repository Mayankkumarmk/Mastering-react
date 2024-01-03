const User = (props) => {

    const {data} = props
    const {name, avatar_url, bio, blog} = data
    
    return(

        <div className="user-card">
            <img src={avatar_url} />
            <h2>
                Name: {name}
            </h2>
            <h3>
                Bio: {bio}
            </h3>
            <h4>Contact: <a href = {blog}>@linkedin</a></h4>
            
        </div>
    )
}
export default User;