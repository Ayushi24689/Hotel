import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const About4 = () =>{
    return(
        <>
        <OwlCarousel className='owl-theme' loop margin={0} items={3}  dots autoPlay autoplayTimeout={1000} >
    <div class='item'>
        <div className="img-text-42">
            <p>
            <span> PROFESSIONALS </span><br/><strong>Meet The Team</strong>
            </p>
        </div>
        <div className="main-42">
        <img src="assests/image/4-1.jpg"/>
        </div>
    </div>
    <div class='item'>
    <div className="main-42">
        <img src="assests/image/4-3.jpg"/>
        </div>
    </div>
    <div class='item'>
    <div className="main-42">
        <img src="assests/image/4-4.jpg"/>
        </div>
    </div>
    <div class='item'>
    <div className="main-42">
        <img src="assests/image/4-5.jpg"/>
        </div>
    </div>
    <div class='item'>
    <div className="main-42">
        <img src="assests/image/4-6.jpg"/>
        </div>
    </div>
    <div class='item'>
    <div className="main-42">
        <img src="assests/image/4-7.jpg"/>
        </div>
    </div>
    </OwlCarousel>
        </>
    )
}

export default About4;