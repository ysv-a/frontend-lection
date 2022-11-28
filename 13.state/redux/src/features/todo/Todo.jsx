import { useDispatch } from 'react-redux'
import { toggleTodo } from './todoSlice'

export function Todo({ id, text, completed }) {
  const dispatch = useDispatch()
  return (
    <li
      onClick={() => dispatch(toggleTodo(id))}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </li>
  )
}
