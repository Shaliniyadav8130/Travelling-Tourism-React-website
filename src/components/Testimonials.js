import React from 'react'
import AvatarImg from "../assets/Shalini.jpg";
import "./Testimonials.css"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={AvatarImg} alt="" />
            <div className="details">
              <h4>Shalini Yadav</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={AvatarImg} alt="" />
            <div className="details">
              <h4>Shalini yadav</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src={AvatarImg} alt="" />
            <div className="details">
              <h4>Shalini Yadav</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Testimonials
