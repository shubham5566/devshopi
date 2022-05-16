import React from 'react'
import { useNavigate } from "react-router-dom"
export default function Protected({ element }) {
    const navigate = useNavigate()
    const x = localStorage.getItem("login")
    React.useEffect(() => {
        !x && navigate("/login")
    }, [])
    if (!x) {
        return "You are not Logged In"
    }

    return element
}
