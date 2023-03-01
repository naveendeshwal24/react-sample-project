import React from 'react';
import vg  from "../images/2.jpg";

import {AiFillGoogleCircle,AiFillYoutube,AiFillAmazonCircle,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (<>
  <div className='home' id="home">
    <main>
    <h1>WE ARE HERE FOR YOU !</h1>
    <p>One solution to all of Your Problems</p>
    </main>
  </div> 
  
  <div className='home2'>
    <img src={vg} alt="Graphics" />
    <div>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Unde, accusamus magnam temporibus officiis facilis nemo quod maxime 
        quia tenetur asperiores quo voluptas inventore aut porro error voluptate, 
        voluptatum vel eum. 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Unde, accusamus magnam temporibus officiis facilis nemo quod maxime 
        quia tenetur asperiores</p>
    </div>    
  </div>

  <div className='home3' id="about">    
    <div>
     <h1>Who we are ?</h1>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Unde, accusamus magnam temporibus officiis facilis nemo quod maxime 
        quia tenetur asperiores quo voluptas inventore aut porro error voluptate, 
        voluptatum vel eum.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Unde, accusamus magnam temporibus officiis facilis nemo quod maxime 
        quia tenetur asperiores quo voluptas inventore aut porro error voluptate, 
        voluptatum vel eum. 
     </p>
    </div>    
  </div>
{/* implementing the social icons in home4 section  */}
  <div className='home4' id="brands">    
    <div>
     <h1>Brands</h1>
     <article>
        {/* adding animationdelay to all four social icons */}
        <div style={ {animationDelay:"0.1s"}}> 
            <AiFillGoogleCircle/>
            <p>Google</p>
        </div>
        <div style={ {animationDelay:"0.4s"}}> 
            <AiFillAmazonCircle/>
            <p>Amazon</p>
        </div>
        <div style={ {animationDelay:"0.2s"}}> 
            <AiFillInstagram/>
            <p>Instagram</p>
        </div>
        <div style={ {animationDelay:"0.5s"}}> 
            <AiFillYoutube/>
            <p>Youtube</p>
        </div>
     </article>
    </div>    
  </div>
 
  </>
  )   
  
}

export default Home
