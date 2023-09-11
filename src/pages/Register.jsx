import { useState } from "react"
import axios from "axios"

const Register = () => {
  const [inputs, setInput] = useState({
    username:"",
    email:"",
    password:"",
    // cpassword:"",
    // fname:"",
    // lname:"",
  })

  const handleChange = e => {
    setInput(prev=>({
      ...prev, 
      [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
     const res = await axios.post("/auth/register", inputs) 
     console.log("Request Data:", inputs);
     console.log("Response Data:", res.data);
    } catch(err){
      console.error("Error:", err);
    } 
  }

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
      <input type="text" placeholder="Display name" name="username" onChange={handleChange}/>
      <input type="text" placeholder="E-mail" name="email" onChange={handleChange}/>
        <input type="password" placeholder="password" name="password" onChange={handleChange}/>
        {/* <input type="password" placeholder="comfirm password" name="cpassword" onChange={handleChange}/>
        <input type="text" placeholder="First name" name="fname" onChange={handleChange}/>
        <input type="text" placeholder="Last name" name="lname" onChange={handleChange}/> */}
        <button onClick={handleSubmit} className="Signup">Sing Up</button>
        <p>This email is already in use</p>
      </form>
    </div>
  )
}

export default Register