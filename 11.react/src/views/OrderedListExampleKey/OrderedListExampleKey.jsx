import { useState } from 'react'
import OrderedList from './OrderedList'

const DATA = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

export default function OrderedListExampleKey() {
  const [data, setData] = useState(DATA)

  const onItemClick = (item) => {
    setData((array) => array.filter((value) => value !== item))
  }

  return (
    <>
      <OrderedList data={data} onItemClick={onItemClick} />
    </>
  )
}
