import { useState } from "react"
import { createContainer } from "unstated-next"


export const useUserContext = () => {
    const [auth, setAuth] = useState(false)

    return {
        auth,
        setAuth,    
    }
}

export const UserContextContainer = createContainer(useUserContext)