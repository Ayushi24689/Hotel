import axios from "axios"

const fetchdata = () => {
    return async (dispatch) => {
        dispatch({
            type: "Fetch_Start"
        })
        try {
            var response = await axios.get("http://localhost/work/getapi.php")
            dispatch({
                type: "Fetch_success",
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: "Fetch_err",
                payload: error
            })
        }
    }
}

export {fetchdata} 