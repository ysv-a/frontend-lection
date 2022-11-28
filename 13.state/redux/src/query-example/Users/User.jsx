import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchUser, updateUser } from '../../api/usersApi'
import { queryClient } from '../../AppQuery'

export function UserQuery() {
  let { userId } = useParams()

  const [userForm, setUserForm] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  })

  const {
    isLoading,
    isRefetching,
    error,
    data: user,
  } = useQuery(['user', userId], () => fetchUser(userId), {
    refetchOnWindowFocus: false,
    initialData: () => {
      return queryClient.getQueryData(['users'])?.find((d) => d.id == userId)
    },
  })

  useEffect(() => {
    if (user) {
      setUserForm(user)
    }
  }, [user])

  const { mutateAsync } = useMutation(updateUser)

  function update() {
    mutateAsync({ id: userId, data: userForm }).then((data) => {
      const users = queryClient.getQueryData(['users'])
      const newUsers = users.map((user) => {
        if (user.id == data.id) {
          return data
        }
        return user
      })
      queryClient.setQueryData(['users'], newUsers)
    })
  }

  if (isLoading) return 'Loading...'
  if (isRefetching) return 'Refetching...'
  if (error) return 'An error has occurred: ' + error.message

  return user ? (
    <div className="flex flex-col gap-5 max-w-lg">
      <input
        onChange={(event) =>
          setUserForm({ ...userForm, name: event.target.value })
        }
        type="text"
        name="name"
        value={userForm.name}
        placeholder="name"
      />
      <input
        onChange={(event) =>
          setUserForm({ ...userForm, username: event.target.value })
        }
        type="text"
        name="username"
        value={userForm.username}
        placeholder="username"
      />
      <input
        onChange={(event) =>
          setUserForm({ ...userForm, email: event.target.value })
        }
        type="text"
        name="email"
        value={userForm.email}
        placeholder="email"
      />
      <input
        onChange={(event) =>
          setUserForm({ ...userForm, phone: event.target.value })
        }
        type="text"
        name="phone"
        value={userForm.phone}
        placeholder="phone"
      />
      <input
        onChange={(event) =>
          setUserForm({ ...userForm, website: event.target.value })
        }
        type="text"
        name="website"
        value={userForm.website}
        placeholder="website"
      />
      <button
        onClick={() => update()}
        type="button"
        className="p-2 bg-black text-white text-lg"
      >
        Send
      </button>
    </div>
  ) : (
    'Not User Found'
  )
}
