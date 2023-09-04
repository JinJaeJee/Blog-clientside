import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="password" />
        <button className="loginbutt">Login</button>
        <button className="guestbutt">Guest Login</button>
        <Link to="/register">
          <button className="buttregister">Register</button>
        </Link>
        <p> This is an error!!</p>
      </form>
    </div>
  )
}

export default Login