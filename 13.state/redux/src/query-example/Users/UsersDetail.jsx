import { useMutation, useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router-dom'
import { deleteUser, fetchUsers } from '../../api/usersApi'
import { queryClient } from '../../AppQuery'
import { useUsers } from '../useUsers'

export function UsersDetailQuery() {
  const {
    isRefetching,
    isLoading,
    error,
    data: users,
  } = useQuery(['users'], fetchUsers)

  const { mutateAsync } = useMutation((id) => deleteUser(id))

  function remove(id) {
    mutateAsync(id).then(() => {
      // queryClient.invalidateQueries(['users'])
      const users = queryClient.getQueryData(['users'])

      queryClient.setQueryData(
        ['users'],
        users.filter((user) => user.id != id),
      )
    })
  }

  if (isLoading) return 'Loading...'
  if (isRefetching) return 'Refetching...'
  if (error) return 'An error has occurred: ' + error.message

  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border p-2">{user.company.name}</td>
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2">{user.phone}</td>
            <td className="border p-2">
              <span>
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}
              </span>
            </td>
            <td>
              <div className="flex gap-3">
                <button onClick={() => remove(user.id)}>
                  <svg
                    className="text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <button>
                  <NavLink to={`/users/${user.id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                  </NavLink>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
