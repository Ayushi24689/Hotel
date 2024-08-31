// import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { fetchdata } from "../Action/fetchdata";
import { reducer } from "../Reducer/Reducer";



const root = ()=>{ 
    combineReducers({
        fetch : reducer
    });
};

// const insertData = (params) => {
//     return async (dispatch) => {
//         dispatch({
//             type: "Fetch_Start"
//         })
//         try {
//             var response = await axios.post("http://localhost/jensi/insertapi.php",params)
//             dispatch({
//                 type: "Insert_success",
//                 payload: response.data
//             })
//         } catch (error) {
//             dispatch({
//                 type: "Fetch_err",
//                 payload: error
//             })
//         }
//     }
// }

const store = createStore(root, applyMiddleware(thunk))

export {store,fetchdata}