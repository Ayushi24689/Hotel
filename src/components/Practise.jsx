import React, { useEffect, useState } from "react";
import axios from 'axios';


const Practise = () => {
    const [data, setdata] = useState([])
    const [formData,setFormData] = useState({name:'',email:'',password:''})
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                console.log(response);
                setdata(response.data)
            })
            .catch(function (error) {
                console.log(error); 
                
            })
    },[])
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formData, id: data.length + 1 };
        setdata([...data, newData]);
        setFormData({ name: '', email: '', password: '' });
    };
    return (
        <>
            <table>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                </tr>
                {
                    data.map(
                        (i) => {
                            return (
                                <tr>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.password}</td>
                                </tr>
                            )
                        }
                    )
                }
           </table>
            <form onSubmit={handleSubmit}>
                <table border="1">
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" name="name" value={formData.name} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td><input type="email" name="email" value={formData.email} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td><input type="password" name="password" value={formData.password} onChange={handleInputChange} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><input type="submit" value="Submit" /></td>
                        </tr>
                </table>
            </form>
        </>
    )
}


export default Practise;