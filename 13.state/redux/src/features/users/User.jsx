import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedUser, getUserAsync, updateUserAsync } from './userSlice'

export function User() {
  let { userId } = useParams()
  const dispatch = useDispatch()

  const user = useSelector(selectedUser)

  const [userForm, setUserForm] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  })

  useEffect(() => {
    if (user?.id != userId) {
      dispatch(getUserAsync(userId))
    }
  }, [])

  useEffect(() => {
    if (user) {
      setUserForm(user)
    }
  }, [user])

  function update() {
    dispatch(updateUserAsync({ id: userId, data: userForm }))
  }

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
