import React from "react";
import { useState } from "react";

export default function login() {
    const [data,setData] = useState ({
        username: '',
        password: '',
        session: false,
    })

    function handleInputChange (){
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type =event.target.type

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value,
            }
        })

    }
    return (
        <>
        <input name='username' value={data.username} onChange={handleInputChange}></input>
        <input name='password' type="password" value={data.password} onChange={handleInputChange}></input>
        <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange}></input>
        <input></input>
        </>
    )
}