import React,{ useState, useContext} from 'react'
import UserContext from '../Context/userContext'


function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // useContext is a consumer Hook 
    const {setUser} = useContext(UserContext) 

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h1>Login</h1>
        <input type="text"

        value={username}
        onChange={(event) => setUsername(event.target.value)}
        
        placeholder='UserName'/>

        <br/>

        <input type="text" 
        value={password} 
        onChange={(event) => setPassword(event.target.value)}

        placeholder='Password'/>

        {<br/>}
        <br/>


        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login