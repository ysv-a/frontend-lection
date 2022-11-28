import { memo, useCallback, useState } from 'react'

/*
на каждый рендер компонента List, создается новый callback onItemClick
который потом передается всем дочерним компонентам
*/

function List({ items }) {
  const onItemClick = useCallback((item) => {
    console.log(' >>> click item id' + item.id)
  }, [])

  const [, setTrigger] = useState()

  const rerender = () => {
    setTrigger({})
  }

  console.log('render list')

  return (
    <>
      <p className="mb-5">
        <button className="p-3 bg-zinc-600 text-white" onClick={rerender}>
          RERENDER
        </button>
      </p>
      {items.map((item) => (
        <Item item={item} key={item.id} onClick={onItemClick} />
      ))}
    </>
  )
}

const Item = memo(({ item, onClick }) => {
  console.log(` >> render ${item.name}`)

  return (
    <div className="text-xl font-semibold" onClick={() => onClick(item)}>
      {item.name}
    </div>
  )
})

// function Item({ item, onClick }) {
//   console.log(` >> render ${item.name}`)

//   return <div onClick={() => onClick(item)}>{item.name}</div>
// }

const items = [
  { id: 1, name: 'First' },
  { id: 2, name: 'Second' },
  { id: 3, name: 'Third' },
]

export function CollbackMemoExample() {
  return <List items={items} />
}

function ExampleUse() {
  //   создается заново на каждый рендер
  // const obExample = {a: '1', b: '2'}
  // const arrayExample = [0, 1, 2, 3, 4]
  // onClick одна и таже ссылка на функцию коллбека, будет сохранятся между рендерами
  const [title, setTitle] = useState('title')
  //   создается каждый рендер заново и передается в useCallback
  const callback = () => {
    console.log(title)
  }
  // на каждый рендер создается новый массив зависимостей и дальше useCallback решает
  // какую ссылку на функцию отдать, если что то изменилось, то будет новая ссылка,
  // если  title не изменился, то мемоизированное значение ссылки на callback
  const onClick = useCallback(callback, [title])
  // [title] создается каждый рендер заново

  return <div onClick={onClick}>Hello</div>
}
