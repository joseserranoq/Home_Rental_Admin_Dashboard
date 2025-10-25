import { useContext, createContext, useState, React, useEffect } from 'react'

const AuthContext = createContext()
export const useAuth = () => { return useContext(AuthContext) }
export const Provider = ({children}) => {
    const [persist, setPersist] = useState(null)
    const savedPersist = localStorage.getItem('persist')
    const [login, setLogin] = useState(false)
    useEffect(() => {
        if (savedPersist) {
            setPersist(JSON.parse(savedPersist))
            setLogin(JSON.parse(savedPersist))
        }
    }, [])
    useEffect(() => {
        if (persist !== null) {
            localStorage.setItem('persist', JSON.stringify(persist))
        }
    }, [persist])
    const value = { login, setLogin }
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>

    )
}
