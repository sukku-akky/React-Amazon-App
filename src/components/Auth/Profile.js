import "./Profile.css"

const Profile=()=>{
    return <>
    <h1>Your User Profile</h1>
    <form>
        <label htmlFor="password">New Password</label>
        <input type="text" name="password" id="password"/>
        <button>Change Password</button>
    </form>
    </>

}

export default Profile;