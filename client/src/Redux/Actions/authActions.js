import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../Types/authTypes"
import axios from 'axios'
import { alertError } from "./errorActions"

export const register =(newUser,navigate)=>async(dispatch)=>{
        try {
            const res = await axios.post('/api/auth/SignUp',newUser)
            dispatch({
                type : REGISTER,
                payload : res.data
            })
            navigate('/Profile')
        } catch (error) {
            error.response.data.errors.forEach(element => {
                dispatch(alertError(element.msg))
            });
            dispatch({
                type : FAIL,
                payload : error.response.data
            })
        }
}

export const login=(user,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignIn',user)
        dispatch({
            type : LOGIN,
            payload : res.data
        })
        navigate('/Profile')
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}

export const current=()=>async(dispatch)=>{
    const config = {
        headers : {
            Authorization : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/auth/GetUser',config)
        dispatch({
            type : CURRENT,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}

export const logout=()=>{
    return({
        type : LOGOUT
    })
}