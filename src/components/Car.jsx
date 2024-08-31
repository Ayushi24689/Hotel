import React from "react";

const Car = (props) =>{
    return(
        <>
             <div className="child">
                <div className="child-inner">
                    <img src={props.image} alt="123"/>
                    <div className="content">
                        <p>{props.name}</p>
                    </div>
                </div>
             </div>
        </>
    )
}

export default Car;