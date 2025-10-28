import { useContext } from "react"
import UserContext from "../Context/UserContext"

const Profile = () => {
    const {user} = useContext(UserContext);

  return (
    <>
        <h1>Profile</h1>
        <h2>Name: {user?.username}</h2>
        <h3>Password: {user?.password}</h3>
    </>
  )
}

export default Profile