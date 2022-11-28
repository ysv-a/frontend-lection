import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { UsersDetailQuery } from './query-example/Users/UsersDetail'
import { UserQuery } from './query-example/Users/User'
import { UsersQuery } from './query-example/Users/Users'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HeaderCounterQuery } from './query-example/HeaderCounterQuery'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const queryClient = new QueryClient()

function AppQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <HeaderCounterQuery />
        <div className="container mx-auto">
          <ul className="flex gap-5 p-5">
            <li>
              <NavLink to="/">Users</NavLink>
            </li>
            <li>
              <NavLink to="/users-extend">Users Extend</NavLink>
            </li>
          </ul>
        </div>
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<UsersQuery />} />
            <Route path="/users-extend" element={<UsersDetailQuery />} />
            <Route path="/users/:userId" element={<UserQuery />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}

export default AppQuery
