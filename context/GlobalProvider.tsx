import { createContext, useContext, useEffect, useState} from 'react'


type GlobalContext = {
    isLoading : boolean

}
const GlobalContext = createContext<GlobalContext>({
    isLoading : true,
})

export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({ children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return(
        <GlobalContext.Provider value={{
            isLoading,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider