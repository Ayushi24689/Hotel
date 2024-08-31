import React, { useRef, useState } from 'react'

const ReduxMap = () => {

    const name = useRef();
    const email = useRef();

    const json = [
        {
            name: "abc", email: "abc@gmail.com",
        },
        {
            name: "abc1", email: "abc1@gmail.com",
        },
        {
            name: "abc2", email: "abc2@gmail.com",
        }
    ]
    const [data, setdata] = useState(json);

    const handlechange = (e) => {
        e.preventDefault();

        const obj = { name: name.current.value, email: email.current.value }
        
        setdata(state => [...state,obj])
    }
    return (
        <>
            <table border={1} cellPadding={'10px'} cellSpacing={0}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {
                    data.map((i) => {
                        return (
                            <tr>
                                <td>{i.name}</td>
                                <td>{i.email}</td>
                            </tr>
                        )
                    })
                }
            </table>

            <form onSubmit={handlechange}>
                <table>
                    <tr>
                        <th>Name:</th>
                        <td><input type="text" name='name' ref={name} /></td>
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <td><input type="text" name='email' ref={email} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="submit" name='submit' value={'submit'} />
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default ReduxMap