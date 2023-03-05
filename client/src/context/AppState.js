import React, { useState } from 'react'
import AppContext from "./AppContext";
import { useNavigate } from "react-router-dom";

const AppState = (props) => {
    const Employerinitialstate = []
    const Studentinitialstate = []
    const initialerrorstate = ''

    const navigate = useNavigate()


    const [Employer, setEmployer] = useState(Employerinitialstate);
    const [error, seterror] = useState(initialerrorstate);
    const FetchEmployerDetails = async () => {
        const token = localStorage.getItem('token')
        const response = await fetch(`/employer/fetchdetails`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        })
        const data = await response.json()
        if (data.success === true) {
            seterror('')
            setEmployer(data.response)
            console.log(data.response)
            return true
        } else if (data.success === false) {
            if (data.err) {
                navigate('/')
                return false
            }
            seterror(data.err)
            return false
        }
    }


    return (<AppContext.Provider value={{ Employer, FetchEmployerDetails }}>
        {props.children}
    </AppContext.Provider>)
}

export default AppState