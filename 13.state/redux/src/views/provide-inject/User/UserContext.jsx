import { createContext, useContext, useState, useEffect } from 'react'
import { getUserRequest } from './requestUser'
import { useFetch } from './useFetch'

const UserContext = createContext()

export function useUserContext() {
  const user = useContext(UserContext)
  if (!user) {
    throw new Error(`useUser must be used within a UserContext provider`)
  }
  return user
}

function useUser(userId) {
  const [user, setUser] = useState({})
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => setUser(user))
  }, [userId])

  //   useEffect(() => {
  //     getUserRequest(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
  //       (user) => {
  //         setUser(user)
  //       },
  //     )
  //   }, [userId])

  //   const { response: user } = useFetch(
  //     `https://jsonplaceholder.typicode.com/users/${userId}`,
  //   )
  return user
}

export function UserProvider({ userId, children }) {
  const user = useUser(userId)

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}
