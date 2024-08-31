import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Loginform = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/get")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirm_password = useRef();
  const product = useRef();
  const city = useRef();
  const price = useRef();
//   const number = useRef();

  const handleClick = (e) => {
    //without refresh page 
    e.preventDefault();

    const obj = {
      "name": name.current.value,
      "email": email.current.value,
      "password": password.current.value,
      "confirm_password":confirm_password.current.value,
      "product":product.current.value,
      "city":city.current.value,
      "price":price.current.value
    //   number: number.current.value, 
    };

    console.log("Payload:", obj);

    axios
      .post("http://localhost:4000/add", obj, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          console.log("Response headers:", error.response.headers);
        }
      });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <p><strong>Your Information</strong></p>
        <p>Subscribe to our newsletter to get exclusive discounts and new theme launches right in your inbox.</p>
      </div>
      <form className="subscription-form" onSubmit={handleClick}>
        <div className="form-group">
          <input type="text" name="name" placeholder="Enter your name*" ref={name} required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Enter your email address*" ref={email} required />
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder="Enter your password*" ref={password} required />
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder="Enter your confirm_password*" ref={confirm_password} required />
        </div>
        <div className="form-group">
          <input type="text" name="product" placeholder="Enter your product" ref={product} required />
        </div>
        <div className="form-group">
          <input type="text" name="city" placeholder="Enter your city" ref={city} required />
        </div>
        <div className="form-group">
          <input type="text" name="price" placeholder="price" ref={price} required />
        </div>
        {/* <div className="form-group">
          <input type="text" name="number" placeholder="Enter your telephone number*" ref={number} required />
        </div> */}
        <div className="form-group">
          <button type="submit">login</button>
        </div>
      </form>
    </div>
  );
}

export default Loginform;
