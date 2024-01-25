import { useState } from 'react'
import UserContext from './UserContext'

function UserProvider({ children }) {
    const [isShow, setIsShow] = useState(false)

    console.log(isShow)
    return (
        <UserContext.Provider value={{ isShow, setIsShow }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
