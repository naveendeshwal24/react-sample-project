import React from 'react'
//importing the carousel from node package
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../images/3.jpg";
import img2 from "../images/4.jpg";

const Services = () => {
  return (
    <div className='services'>
        <Carousel  
        infiniteloop 
        autoplay  
        interval={1000}>
           
            <div>
                <img src={img1} alt="Item1" />
                <p className="legend">Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="Item2" />
                <p className="legend" >Front-End </p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services
