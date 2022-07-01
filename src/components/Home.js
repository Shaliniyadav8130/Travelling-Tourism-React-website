import React from 'react'
import './Home.css'
import home1 from '../assets/bg.png'

const Home = () => {
  return (
    <section id="home">
        <div className="background">
          <img src={home1} alt="image"/>
        </div>
        <div className="content">
          <div className="title">
            <h1>TRAVEL TO EXPLORE</h1>
            <p>Welome, to our website myTrip.<br/>
            We hope that you like our services
            </p>
          </div>
          <div className="search">
            <div className="container">
              <label htmlFor="Where you want to go"></label>
              <input type="text" placeholder="Search your location"/>
            </div>
            <div className="container">
              <label htmlFor="">Check-in</label>
              <input type="date"/>
            </div>
            <div className="container">
              <label htmlFor="">Check-out</label>
              <input type="date"/>
            </div>
            <button>Explore</button>
          </div>
        </div>
    </section>
  )
}

export default Home
