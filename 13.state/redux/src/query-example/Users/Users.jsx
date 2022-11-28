import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../../api/usersApi'
import { useUsers } from '../useUsers'

export function UsersQuery() {
  //   const { isRefetching, isLoading, error, users } = useUsers()
  const {
    isRefetching,
    isLoading,
    error,
    data: users,
  } = useQuery(['users'], fetchUsers)

  if (isLoading) return 'Loading...'
  if (isRefetching) return 'Refetching...'
  if (error) return 'An error has occurred: ' + error.message

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
