import React from 'react'
import { Link,useNavigate } from 'react-router'

import { useAuth } from '../hooks/Provider'
export const Header = ({ children }) => {
    const navigate = useNavigate()
    const { login,setLogin } = useAuth()
    const signOut = () => {
        setLogin(false)
        navigate('/')        
    }
    return (
        <>
            {login === true ? (<header className="header">
                <nav>
                    <Link to="/dashboard" style={{padding: "3rem"}}>Dashboard</Link>
                    <br/>
                    <button onClick={signOut} style={{float:'right'}}>Sign Out</button>
                </nav>
            </header>
            ) : null}
            {children}

        </>
    )
}
