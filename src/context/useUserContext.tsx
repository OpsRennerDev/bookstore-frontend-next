'use client'

import { createContext, useContext, useMemo, useState } from "react"

type User = {
  id: string
  email: string
  username: string
}

type UserContextType ={
  user: User | null
  login: (data: User) => void
  logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({children}: Readonly<{children: React.ReactNode}>){
  const [user, setUser] = useState<User | null>(null)

  const login = (data: User) => setUser(data)
  const logout = () => setUser(null)

  const obj = useMemo(() => ({user, login, logout}), [])

  return (
    <UserContext.Provider value={obj}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext)

  if (!context) throw new Error("useUser must be used within a UserProvider")

  return context
}