import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';  
const Demo = () =>{
    return(
        <>
        <OwlCarousel className='owl-theme' loop margin={10} items={3} autoplay  autoplayTimeout={3000} dots>
            <div class='item'>
        <h4><img src="assests/image/1-5.jpg"/></h4>
    </div>
    <div class='item'>
        <h4><img src="assests/image/2-5.jpg"/>
        </h4>
    </div>
    <div class='item'>
        <h4><img src="assests/image/3-6.jpg"/>
        </h4>
    </div>
    <div class='item'>
        <h4><img src="assests/image/4-2.jpg"/>
        </h4>
    </div>
    <div class='item'>
        <h4><img src="assests/image/6-2.jpg"/>
        </h4>
    </div>
    <div class='item'>
        <h4><img src="assests/image/5-2.jpg"/>
        </h4>
    </div>
    </OwlCarousel>
    </>
    )
}

export default Demo;