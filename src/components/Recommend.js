import React,{useState} from 'react'
import Destination1 from "../assets/Destination1.jpg"
import Destination2 from "../assets/Destination2.png"
import Destination3 from "../assets/Destination3.png"
import Destination4 from "../assets/Destination4.jpg"
import Destination5 from "../assets/Destination5.jpg"
import Destination6 from "../assets/Destination6.jpg"
import './Recommend.css'

const Recommend = () => {
  const data=[
    {
      image:Destination1,
      title:"Tokyo",
      subTitle:"Tokyo is a very beautiful place",
      cost:"38,800",
      duration:"Approx 2 night trip"
    },
    {
      image:Destination2,
      title:"Kerala",
      subTitle:"Kerala is famous for his beauty",
      cost:"15,000"
    },
    {
      image:Destination3,
      title:"paris",
      subTitle:"Paris,France's capital, is a major European city and a",
      cost:"45,500",
      duration:"Approx 1 night trip",
    },
    {
      image:Destination4,
      title:"Greece",
      subTitle:"Greece is a very romantic place",
      cost:"40,000",
      duration:"Approx 2 night trip",
    },
    {
      image:Destination5,
      title:"Shimla",
      subTitle:"Shmila is in India which is very beautiful",
      cost:"10,000",
      duration:"Approx 2 hours",
    },
    {
      image:Destination6,
      title:"London",
      subTitle:"London is a very beautiful place",
      cost:"30,000",
      duration:"1 night trip",
    },
  ];

  const packages=[
    "The Wekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long term Slow travel",
  ];

  const [active,setActive] = useState(1);
  return (
    <section id="recommend">
      <div className="title">
        <h2>Recommended Destination</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg,index)=>{
            return (
              <li
              className={active === index+1 ? "active": ""}
              onClick={()=>setActive(index+1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination)=>{
          return(
            <div className="destination">
              <img src={destination.image} alt=""/>
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <h4>{destination.cost}</h4>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Recommend
