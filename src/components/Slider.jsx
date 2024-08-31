import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';    

const Slider = () =>{
    return(
        <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay  autoplayTimeout={3000} dots>
       <div class='item'>
        <h4><img src="assests/image/1-3.jpg"/>
        <p><span>THE ULTIMATE LUXURY EXPIRIENCE</span> <br/><br/> <br/><strong>ENJOY THE BEST <br/>
        MOMENTS OF LIFE  </strong> <br/> <br/> <br/> <a href="#">ROOMS & SUITES</a></p>
        </h4>
    </div>
    <div class='item'>
        <h4><img src="assests/image/2-4.jpg"/>
        <p><span>LUXURY HOTEL &  BEST RESORT </span> <br/><br/><br/><strong>ENJOY A LUXURY 
            <br/> EXPIRIENCE </strong> <br/> <br/> <br/>
             <a href="#">ROOMS & SUITES</a></p>
        </h4>
    </div>
    <div class='item'>
        <h4><img src="assests/image/1-4.jpg"/>
        <p><span>UNIQUE PLACE TO RELAX & ENJOY </span><br/><br/><br/><strong>
            THE PERFECT
             BASE <br/> FOR YOU  </strong> <br/> <br/> <br/><a href="#">ROOMS & SUITES</a></p>
        </h4>
    </div>
</OwlCarousel>
    )
}


export default Slider;