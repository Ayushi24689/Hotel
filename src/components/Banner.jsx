import React from "react";
import { FaPlaneArrival,FaCarRear ,FaWifi } from "react-icons/fa6";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineFreeBreakfast } from "react-icons/md";

const Banner = () =>{
    return(
        <div className="main-5">
            <div className="container-5">
                <div className="img-inner-5">
                <div className="img-text-6">
                        <div class="column-title"></div> 
                    <ul class="column-list-3">
                    <div class="icon-1">
                            <FaPlaneArrival />
                        <li>
                        <strong>Pick & Drop</strong><br/> <span>We'll
                        pick up from airport while you comfy on <br/>
                        your ride,us nellentesque habitant.</span>
                            </li>
                        </div>
                        <div class="icon-1">
                        <LiaSwimmingPoolSolid />
                        <li>
                        <strong>Swimming Pool</strong><br/> <span>Swimming
                            pool tincidunt nise ace park norttito <br/>
                            sit space,mus nellentesque habitant.
                        </span>
                            </li>
                        </div>
                        <div class="icon-1">
                        <FaCarRear />
                        <li>
                        <strong>Parking Space</strong><br/> <span>Fusce 
                            tincidunt nis ace park norttito sit amet <br/>
                            space, mus nellentesque habitant.    
                        </span>
                            </li>
                        </div> 
                        <div class="icon-1">
                        <FaWifi />
                        <li>
                        <strong>Fibre Internet</strong><br/> <span>Wifi 
                            tincidunt nis ace park norttito sit amet <br/>
                            space, mus nellentesque habitant.    
                        </span>
                            </li>
                        </div>
                        <div class="icon-1">
                        <LuBedDouble />
                        <li>
                        <strong>Room Service</strong> <br/> <span>Room
                            tincidunt nis ace park norttito sit amet <br/>
                            space, mus nellentesque habitant.    
                        </span>
                            </li>
                        </div> <br/>
                        <div class="icon-1">
                        <MdOutlineFreeBreakfast />  
                        <li>
                        <strong>Breakfast</strong> <br/> <span>Eat 
                            tincidunt nis ace park norttito sit amet <br/>
                            space, mus nellentesque habitant.    
                        </span>
                            </li>
                        </div>
                        </ul>
                        </div>
                    </div>
                    </div>
            </div>
    )
}


export default Banner;  