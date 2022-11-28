import { useEffect, useState } from 'react'

const STORAGE_KEY = 'example-storage-key'

export function UseEffectBasics() {
  const [count, setCount] = useState(0)

  const increaseCount = () => setCount((prev) => prev + 1)

  useEffect(
    function updateDocTitle() {
      document.title = `Count: ${count}`
    },
    [count],
  )

  useEffect(function readFromStorage() {
    try {
      const stringValue = localStorage.getItem(STORAGE_KEY) ?? '0'
      setCount(parseInt(stringValue))
    } catch (error) {
      console.log('could not read from a local storage')
      console.error(error)
    }
  }, [])

  useEffect(
    function writeToStorage() {
      try {
        localStorage.setItem(STORAGE_KEY, count)
      } catch (error) {
        console.log('could not write to local storage')
        console.error(error)
      }
    },
    [count],
  )

  useEffect(() => {
    console.log(`running effect ${count}`)
    return () => {
      // cleanup function
      console.log(`cleaning up ${count}`)
    }
  }, [count])

  useEffect(() => {
    console.log('component did mount')
    return () => {
      console.log('component will unmount')
    }
  }, [])

  useEffect(() => {
    console.log('executed AFTER each render')
  }) // NOTE: deps list is missing

  console.log('this log will be printed on each render')

  return (
    <>
      <div style={{ marginTop: 24, marginBottom: 24 }}>
        Current count: {count}
      </div>

      <div style={{ width: 150 }}>
        <button className="p-5 bg-stone-600 text-white" onClick={increaseCount}>
          +1
        </button>
      </div>
    </>
  )
}
