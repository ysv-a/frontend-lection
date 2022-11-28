import { useSelector } from 'react-redux'
import { getUserCount } from './users/usersSlice'

export function HeaderCounter() {
  const count = useSelector(getUserCount)
  return (
    <div className="container mx-auto">
      <div className="p-5 bg-stone-700 text-white font-bold">{count}</div>
    </div>
  )
}
