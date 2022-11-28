import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

export function AddTodo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(addTodo(text))
          setText('')
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className="p-1.5 bg-black text-white text-lg" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
