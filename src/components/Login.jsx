import axios from 'axios';
import React, { useRef } from 'react'

const Login = () => {
    const email = useRef();
    const password = useRef();

    const handelsubmit = (e) => {
        e.preventDefault();
        const params = new FormData();
        params.set('email', email.current.value)
        params.set('password', password.current.value)

        axios
            .post("http://localhost/work/loginapi.php", params)
            .then(function (response) {
                console.log(response.data);
                localStorage.setItem("isLogin", 'yes');
                localStorage.setItem("name", response.data.user.name);

            })
    }

    const logout = () => {
        localStorage.clear();
    }
    return (
        <>


            <form onSubmit={handelsubmit}>
                <table border="1" cellPadding={10} cellSpacing={0}>
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
                    <tr>
                        <td colSpan={2}>
                            {
                                localStorage.getItem('isLogin') &&
                                <button type='button' onClick={logout}>Logout</button>
                            }
                            {
                                !localStorage.getItem('isLogin') &&
                                <button type="submit" name="submit" value={"Login"} >Login</button>
                            }
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default Login