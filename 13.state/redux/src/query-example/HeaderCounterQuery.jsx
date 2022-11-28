import { useUsers } from './useUsers'

export function HeaderCounterQuery() {
  const { users } = useUsers()
  return (
    <div className="container mx-auto">
      <div className="p-5 bg-stone-700 text-white font-bold">
        {users?.length}
      </div>
    </div>
  )
}
