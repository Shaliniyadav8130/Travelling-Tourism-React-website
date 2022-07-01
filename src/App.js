import logo from './logo.svg';
import React, { useEffect } from "react";
import './App.css';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Recommend from './components/Recommend';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import scrollreveal from "scrollreveal";

function App() {
  useEffect(() =>{
    const sr = scrollreveal({
      origin:"top",
      distance:"80px",
      duration:2000,
      reset:true,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Home/>
    <Services/>
    <Recommend/>
    <Testimonials/>
    <Footer/>

    </>
  );
}

export default App;
