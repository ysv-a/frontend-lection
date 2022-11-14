import { forwardRef, useImperativeHandle, useRef } from 'react'

export const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    },
  }))
  return (
    <input className="border border-gray-900 h-10" {...props} ref={inputRef} />
  )
})
