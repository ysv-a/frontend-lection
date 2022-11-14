import { Outlet } from 'react-router-dom'
import { Menu } from './components/Menu'

function App() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6 min-h-screen">
        <div className="col-span-2 border-r border-gray-700 p-5">
          <Menu />
        </div>
        <div className="col-span-4 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
