import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
export default function Profile() {
    const navigate = useNavigate()
   const {user} = useSelector(state => state.userData)
    React.useEffect(() => {
        const x = localStorage.getItem("login")
        if (!x) {
            navigate("/login")
        }

    }, [])
    return (
        <div className='container'>
                    <h1>{user.name}</h1>
        </div>
    )
}
