import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Restaurent2 = () =>{
    return(
        <>
          <div className="main-32">
               <div className="img-text-33">
                <p>
            <span> LUXURY HOTEL</span> <br/>  <strong>Restaurent Menu</strong>
            </p>
            </div>
          <OwlCarousel className='owl-theme child-32'loop margin={0} items={4}  dots  >
    <div class='item'>
       <div className="img-text-32">
          Wine 
       </div>
    </div>
    <div class='item'>
    <div className="img-text-32">
         Breakfast
       </div>
    </div>
    <div class='item'>
    <div className="img-text-32">
          Dessert
       </div>
    </div>
    <div class='item'>
    <div className="img-text-32">
        Starters
       </div>
    </div>
    <div class='item'>
    <div className="img-text-32">
       Main
       </div>
    </div>
    <div class='item'>
    <div className="img-text-32">
        Salads 
       </div>
    </div>
    </OwlCarousel>
          </div>
        </>
    )
}


export default Restaurent2;