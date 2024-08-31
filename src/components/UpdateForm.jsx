import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {

    const name = useRef();
    const email = useRef();
    const password = useRef();
    const image = useRef();
    const { id } = useParams()
    const params = new FormData()
    params.set("id", id)

    useEffect(() => {
        axios.post('http://localhost/work/singleapi.php', params).then(function (response) {
            console.log(response.data.user);
            name.current.value = response.data.user.name
            email.current.value = response.data.user.email
            password.current.value = response.data.user.password
            image.current.files[0] = response.data.user.image
        })
    },[])
    const navigate = useNavigate()

    const handelclick = (e) => {
        e.preventDefault();

        const params = new FormData()

        params.set("name", name.current.value)
        params.set("email", email.current.value)
        params.set("password", password.current.value)
        params.set("image", image.current.files[0])
        params.set("id", id)
        console.log(params);
        axios
            .post("http://localhost/work/updateapi.php", params)
            .then(function (response) {
                console.log(response.data);

                if (response.data.status === 'yes') {
                    navigate("/")
                }
                else {
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
                            <input type="file" name="image" id="" ref={image} />

                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="submit" name="submit"  />
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default UpdateForm