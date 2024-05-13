import { useEffect } from "react"
import { createContainer } from "unstated-next"
import { useCookies } from 'react-cookie';

export const useUserContext = () => {
    const [cookies, setCookie] = useCookies(['auth']);

    const setAuth = (auth: boolean) => {
        setCookie('auth', auth)
    }

    const auth = cookies.auth

    useEffect(() => {
        console.log(cookies.auth)
    },[cookies.auth])

    return {
        auth,
        setAuth,    
    }
}

export const UserContextContainer = createContainer(useUserContext)