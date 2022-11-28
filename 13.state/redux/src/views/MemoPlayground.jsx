import { useState, useMemo, memo, useCallback } from 'react'

function factorialOf(n) {
  console.log('factorialOf(n) called!')
  return n <= 0 ? 1 : n * factorialOf(n - 1)
}

export function CalculateFactorial() {
  const [number, setNumber] = useState(0)
  const [inc, setInc] = useState(0)
  const factorial = useMemo(() => factorialOf(number), [number])
  const onChange = (event) => {
    setNumber(Number(event.target.value))
  }
  const onClick = () => setInc((i) => i + 1)

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button className="m-2 p-2 bg-neutral-800 text-white" onClick={onClick}>
        Re-render
      </button>
    </div>
  )
}

const sum = (n) => {
  console.log('sum call!')
  return n + n
}

const GreenLabel = memo(({ type = 1 }) => {
  const [isGreen, setIsGreen] = useState(true)
  console.log('GreenLabel render!')
  return (
    <h1
      onClick={() => setIsGreen(!isGreen)}
      style={{ color: isGreen ? 'green' : 'red' }}
    >
      Example - {type}
    </h1>
  )
})

export const MemoComponentExample = () => {
  const [num, setNum] = useState(1)
  const [type, setType] = useState(1)

  //   const sum = () => {
  //     return num + num
  //   }

  const result = useMemo(() => sum(num), [num])
  //   const result = useCallback(sum, [num])

  return (
    <div>
      <GreenLabel type={type} />
      <h2>Sum {result}</h2>
      <button
        className="m-2 p-3 bg-neutral-800 text-white"
        onClick={() => setNum(num + 1)}
      >
        ➕
      </button>
      <button
        className="m-2 p-3 bg-neutral-800 text-white"
        onClick={() => setType(type + 1)}
      >
        Change Type
      </button>
    </div>
  )
}

// export const MemoComponentExample = () => {
//   const [num, setNum] = useState(1)

//   const [isGreen, setIsGreen] = useState(true)
//   const result = sum(num)

//   return (
//     <div>
//       <h1
//         onClick={() => setIsGreen(!isGreen)}
//         style={{ color: isGreen ? 'green' : 'red' }}
//       >
//         Example
//       </h1>
//       <h2>Sum {result}</h2>
//       <button
//         className="m-2 p-3 bg-neutral-800 text-white"
//         onClick={() => setNum(num + 1)}
//       >
//         ➕
//       </button>
//     </div>
//   )
// }
