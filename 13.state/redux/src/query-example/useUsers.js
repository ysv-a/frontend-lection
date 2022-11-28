import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../api/usersApi'
export function useUsers() {
  const {
    isLoading,
    error,
    isRefetching,
    refetch,
    data: users,
  } = useQuery(['users'], fetchUsers, {
    refetchOnWindowFocus: false,
    staleTime: 10000,
  })

  return {
    users,
    isLoading,
    error,
    isRefetching,
    refetch,
  }
}
