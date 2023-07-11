import React from 'react'

import { useContext, useState, createContext } from 'react'
import { json } from 'react-router'

const UserContext = createContext()


export default function UserProvider({ children }) {

  const storageUser = JSON.parse(localStorage.getItem('user'))


  const [user, setUser] = useState(storageUser || null)


  return (
    <div>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        {children}
      </UserContext.Provider>

    </div>
  )
}

export const useUserContext = () => useContext(UserContext)
