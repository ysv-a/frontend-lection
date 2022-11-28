import { useRef } from 'react'
import { FancyInput } from '../components/FancyInput'

export function ExampleForwardRef() {
  const ref = useRef()

  function focus() {
    console.log(ref)
    // ref.current?.focus()
  }

  return (
    <div>
      <button className="mr-20 p-5 bg-stone-700 text-white" onClick={focus}>
        FOCUS
      </button>
      <FancyInput ref={ref} />
    </div>
  )
}
