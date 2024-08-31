import axios from "axios"
import { useEffect, useRef, useState } from "react"


const Const = () =>{

    const name = useRef()
    const image = useRef()
    const handleclick = (e) =>{
        e.preventDefault()

        console.log(image.current.files[0]);

        const params = new FormData()
        params.append("name",name.current.value)
        params.append("image",image.current.files[0])

        axios.post('http://localhost:4000/add-img',params)
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    const [data,setdata] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/get')
        .then(function(response){
            console.log(response.data.data);
            setdata(response.data.data)
        })
        .catch(function(error){
            console.log(error);
        })
    },[])

    return(
        <>
          {
            data.map((i)=>{
                return(
                    <>
                    <img src={`http://localhost:4000/image/${i.image}`} alt=""/>
                    </>
                )
            })
          }

          <form onSubmit={handleclick}>
            <table border={1}>
                <tr>
                    <td>name:</td>
                    <td><input type="text" name="name" ref={name}/></td>
                </tr>
                <tr>
                    <td>image:</td>
                    <td><input type="file" name="image" ref={image}/></td>
                </tr>
                <tr>
                    <td><input type="submit" name="submit"/></td>
                </tr>
            </table>
          </form>
        </>
    )
}

export default Const;