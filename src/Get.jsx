import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Get = () =>{

    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/get')
  .then(function (response) {
    console.log(response.data.data);
    setdata(response.data.data)
  })
  .catch(function (error) {
    console.log(error);
  })
    },[])

    const name = useRef()
    const email = useRef()
    const password =useRef()

    const handleclick = (e) =>{
        e.preventDefault()

        const obj = {
            "name":name.current.value,
            "email":email.current.value,
            "password":password.current.value
        }

        axios.post('http://localhost:4000/add',obj)
  .then(function (response) {   
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
    }

    return(
        <>
        <form onSubmit={handleclick}>
                <table border={1}>
                    <tr>
                        <td>name</td>
                        <td><input type="name" name="name" ref={name}/></td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td><input type="email" name="email" ref={email}/></td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td><input type="password" name="password" ref={password}/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" name="submit"/></td>
                    </tr>
                      </table>
                     </form>

                    <table  border={1}>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>email</td>
                            <td>password</td>
                        </tr>
                    {
                        data.map((i) =>{
                            return(
                            <tr>
                            <td>{i._id}</td>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.password}</td>
                           </tr>
                    )
                    })
                }
                </table>
                    </>
    )
}
    export default Get;