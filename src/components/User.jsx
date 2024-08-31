import React, {useRef} from "react";

const User = () =>{
    const name =useRef();

    const handelclick = () =>{
        // console.log(name.current.value);
        // name.current.value="hello skywin"
        // name.current.focus();        
        name.current.style.display="none"
    }
    return(
         <>
         <input type="text" name="name" ref={name}/>
         <button onClick={handelclick}>click here!!!</button>
         </>
    )
}

export default User;
