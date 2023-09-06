import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from 'react-router-dom';
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
    <div className="content">
      <img 
        src="https://www.tech-hangout.com/wp-content/uploads/2023/03/JOHNWICK-4-COVER.jpg"
        alt="johnwicj"
      />
    <div className="user">
      <img
        src="https://cdnph.upi.com/svc/sv/upi/3031676574935/2023/1/41461ca17c3da5f75195dfb7e9c307f6/The-final-trailer-for-John-Wick-4-shows-assassin-in-global-peril.jpg"
        alt="john2"
      />
    <div className="info">
      <span>John</span>
      <p>Posted 2 day ago</p>
    </div>
    <div className="edit">
    <Link to={`/write?edit=2`}>
    <img
        src={Edit}
        alt="edit"
      />
    </Link>
      <img
        src={Delete}
        alt="delete"
      />
    </div>
    </div>
    <h1>hi world</h1>
    <p>1111</p>
    </div>
    <Menu/>

    </div>
  )
}

export default Single