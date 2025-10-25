import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../hooks/Provider'
export const Header = ({ children }) => {
    const { login } = useAuth()
    const signOut = () => {
        // Lógica para cerrar sesión
    }
    return (
        <>
            {login === true ? (<header className="header">
                <nav>
                    <Link to="/dashboard">Dashboard</Link>


                </nav>
            </header>
            ) : null}
            {children}

        </>
    )
}
