import axios from "axios";
import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Form = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const image = useRef();
  
  
  const navigate =useNavigate()
  
  const handelclick = (e) => {
    e.preventDefault();

    const params= new FormData()

    params.set("name", name.current.value)
    params.set("email", email.current.value)
    params.set("password", password.current.value)
    params.set("image", image.current.files[0])
    console.log(params);
    axios
      .post("http://localhost/work/insertapi.php",params)
      .then(function (response) {
        console.log(response.data);

        if (response.data.status === 'yes') {
            navigate("/view")
        }
        else{
            alert("error")
        }
      });
  };

  return (
    <>
      <form onSubmit={handelclick}>
        <table border="1" cellPadding={10} cellSpacing={0}>
          <tr>
            <td>Name</td>
            <td>
              <input type="text" name="name" ref={name} />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input type="email" name="email" ref={email} />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type="password" name="password" ref={password} />
            </td>
          </tr>
          {/* <tr>
            <td>Hobby</td>
            <td>
              <input type="checkbox" name="hobby" value={'food'} />Food
              <input type="checkbox" name="hobby" value={'movie'} />Movie
              <input type="checkbox" name="hobby" value={'game'} />Game
              <input type="checkbox" name="hobby" value={'travel'} />Travel
            </td>
          </tr> */}
          <tr>
            <td>image</td>
            <td>
              <input type="file" name="image" id="" ref={image}/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input type="submit" name="submit" value={"submit"} />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default Form;
