import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Spa1 = () =>{
    return(
        <>
        <OwlCarousel className='owl-theme' loop margin={0} items={1}  dots autoPlay autoplayTimeout={1000} >
    <div class='item-1'>
        <h4>
            <img src="assests/image/1-8.jpg"/>
        </h4>
    </div>
    <div class='item-1'>
        <h4><img src="assests/image/1-9.jpg"/></h4>
    </div>
    <div class='item-1'>
        <h4><img src="assests/image/1-10.jpg"/></h4>
    </div>
    </OwlCarousel>
        </>
    )
}

export default Spa1;