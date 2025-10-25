import { useContext, createContext, useState, React } from 'react'

const AuthContext = createContext()
export const useAuth = () => { return useContext(AuthContext) }
export const Provider = ({children}) => {

    const [login, setLogin] = useState(false)
    const value = { login, setLogin }
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>

    )
}
