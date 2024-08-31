import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home1 = () => {
  const [data, SetData] = useState([]);
  useEffect(() => {
    fetchdata()
  }, []);
  const navigate =useNavigate()

  const fetchdata = () =>{
    axios.get("http://localhost/work/getapi.php").then(function (response) {
      SetData(response.data);
    });
  }


  const handledelete = (e) => {
    console.log(e.target.getAttribute('data-id'));

    var id = e.target.getAttribute('data-id');

    const params = new FormData()
    params.set("id", id)

    axios
      .post("http://localhost/work/deleteapi.php", params)
      .then(function (response) {
        console.log(response);
        if(response.data.status == 'yes'){
          fetchdata()
        }
      })


      }

      const handleupdate = (e) =>{
        var id = e.target.getAttribute('data-id')

        navigate("/update/"+id)
      }

  return (
      <>
        <table border={2} cellSpacing={0} cellPadding={10}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Hobby</th>
              <th>Image</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {data.map((i) => {
              return (
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.password}</td>
                  <td>{i.hobby}</td>
                  <td><img src={`http://localhost/work/assets/image/${i.image}`} alt="" width={100} height={100} /></td>
                  <td>
                    <button type="button" data-id={i.id} onClick={handledelete}>Delete</button>
                  </td>
                  <td>
                  <button type="button" data-id={i.id} onClick={handleupdate}>Update</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };

  export default Home1;
