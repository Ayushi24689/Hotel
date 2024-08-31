import React from "react";
const Contact = () => {
  const test = (event) => {
    event.preventDefault();
    alert("Form Submitted")
  };
  return (
    <>
      <h1>Contact Us</h1>

      <form onSubmit={test}>
        <table>
          <tr>
            <td>Name :</td>
            <td>
              <input type="text" name="name" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" value={"Submit"} />
            </td>
          </tr>
        </table>
      </form>
    </>
  );
};

export default Contact;
