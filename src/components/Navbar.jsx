import Logo from "../img/logo.jpg"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" className="logo"/>
        </div>
        <div className="links">
        <Link className="link" to="/?cat=monster">
          <h6>MONSTER</h6>
        </Link>
        <Link className="link" to="/?cat=equipment">
          <h6>EQUIPMENT</h6>
        </Link>
        <Link className="link" to="/?cat=fashion">
          <h6>FASHION</h6>
        </Link>
        <Link className="link" to="/?cat=dmgtest">
          <h6>DMG(TEST)</h6>
        </Link>
        <span>John</span>
        <span>LOGOUT</span>
        <span className="write">
          <Link className="link" to="/write"> POST </Link>
        </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar