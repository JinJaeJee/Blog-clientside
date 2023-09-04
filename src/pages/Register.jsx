

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Display name" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="comfirm password" />
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <button className="Signup">Sing Up</button>
        <p>This email is already in use</p>
      </form>
    </div>
  )
}

export default Register