import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
const Contact2 = () =>{
    return(
        <>
        <div class="main-92">
        <div class="container-92">
            <div class="img-inner-92">
                <div class="child-92">
                    <div class="column-title-92"> <strong>the cappa luxury hotel <br/></strong>
                    <div className="img-text-92">
                        <p>
                        Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan <br/>
                      ligula.Orci varius natoque penatibus et magnis dis parturient monte nascete <br/>
                        ridiculus mus nellentesque habitant morbine.</p>
                        </div>
                 </div><br/>
                    <ul class="column-list-92">
                        <div class="icon-92">
                            <i class= "fa-map-marker">
                            <LuPhoneCall />
                            </i>
                        <li ><span>Reservation</span> <br/><strong>855 100 4444</strong></li> <br/>
                        </div>
                       <div class="icon-93">
                        <i class="phone-icon">
                        <TfiEmail />
                        </i>
                        <li><span>Email info</span> <br/> <strong>info@luxuryhotel.com</strong></li> <br/>
                        </div>
                        <div class="icon-94">
                            <i class="mail-icon">
                            <GrLocation />
                            </i>
                        <li><span>address</span> <br/> <strong>1616 Broadway NY,New York 10001 United <br/> States of America </strong></li>
                        </div>
                    </ul>
                </div>
            
            </div>
            </div>
                </div>
        </>
    )
}

export default Contact2;