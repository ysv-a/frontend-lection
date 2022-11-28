import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersAsync, selectUsers } from './usersSlice'

export function Users() {
  const users = useSelector(selectUsers)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!users.length) {
      dispatch(getUsersAsync())
    }
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.username}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2">{user.phone}</td>
            <td className="border p-2">{user.website}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
