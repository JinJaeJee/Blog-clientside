import Discord from "../img/discordlogo.jpg"
import Youtube from "../img/youtubelogo.png"
import Facebook from "../img/facebooklogo.png"
import "./home.css"


const Home = () => {

  const logoicons = [
    {
      id:1,
      title:"Discord",
      img:Discord,
    },
    {
      id:2,
      title:"Youtube",
      img:Youtube
    },
    {
      id:3,
      title:"Facebook",
      img:Facebook
    }
  ]
  return (
    <div className="home">
      <div className="logologic">
        {logoicons.map((icon) =>(
          <div className="logolist" key={icon.id}>
            <div className="img">
              <img 
                src={icon.img}
                alt={icon.title}
              />
            </div>
              <p>{icon.title}</p>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Home