import { useSelector } from 'react-redux'
import { Todo } from './Todo'
import { selectTodoList } from './todoSlice'

export function TodoList() {
  const todos = useSelector(selectTodoList)
  return (
    <ul className="mt-10 space-y-2 text-lg">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
