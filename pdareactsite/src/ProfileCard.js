function ProfileCard({title, handle, color}){
    return <div style={
        { 
            backgroundColor: {color},
            color: "white"
        }}>
        <div> Title is { title }  </div>
        <div>Handle is  {handle}</div>
        </div>
}

export default ProfileCard;