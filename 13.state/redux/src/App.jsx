import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Counter } from './features/counter/Counter'
import { Users } from './features/users/Users'
import { User } from './features/users/User'
import { UsersExtend } from './features/users/UsersExtend'
import { HeaderCounter } from './features/HeaderCounter'
import { TodoPage } from './features/todo/TodoPage'

function App() {
  return (
    <BrowserRouter>
      <HeaderCounter />
      <div className="container mx-auto">
        <ul className="flex gap-5 p-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/users-extend">Users Extend</NavLink>
          </li>
        </ul>
      </div>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users-extend" element={<UsersExtend />} />
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
