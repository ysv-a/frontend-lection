import { useUserContext } from './UserContext'

export function UserHello() {
  const user = useUserContext()
  return (
    <div className="border p-5 mt-10 bg-stone-800 text-white">
      Hello USER {user ? user.name : ''}
    </div>
  )
}
