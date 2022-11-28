import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getUsersAsync, removeUserAsync, selectUsers } from './usersSlice'

export function UsersExtend() {
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
                <button onClick={() => dispatch(removeUserAsync(user.id))}>
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
