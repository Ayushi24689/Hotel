import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from '../Action/fetchdata'

const Redux = () => {

  const { loading, data, error } = useSelector(state => state.fetch)

  const name = useRef()
  const email = useRef()
  const password = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchdata())
  }, [])

  const handlesubmit = (e) => {
    e.preventDefault()
    const params = new FormData();
    params.set('name', name.current.value)
    params.set('email', email.current.value)
    params.set('password', password.current.value)

    // dispatch(insertData(params))

  }
  if (loading) {
    <>
      <h1>Loading</h1>
    </>
  }
  if (error != null) {
    <>
      <h1>Error</h1>
    </>
  }
  return (
    <>

      <form onSubmit={handlesubmit}>
        <table>
          <tr>
            <td>name</td>
            <td><input type="text" name="name" id="" ref={name}/></td>
          </tr>
          <tr>
            <td>email</td>
            <td><input type="email" name="email" id="" ref={email}/></td>
          </tr>
          <tr>
            <td>password</td>
            <td><input type="password" name="password" id="" ref={password}/></td>
          </tr>
          <tr>
            <td><input type="submit" name='submit' /></td>
          </tr>
        </table>
      </form>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>PASSWORD</th>
        </tr>
        {
        data && data.map((i) => {
          return (
            <>
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.password}</td>
              </tr>
            </>
          )
        })
      }
      </table>
      
    </>
  )
}

export default Redux