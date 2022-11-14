import classNames from 'classnames/bind'
import { useState } from 'react'
import classes from './card.module.css'

export function CssExample2() {
  const [active, setActive] = useState(false)
  return (
    <>
      <button onClick={() => setActive(!active)}>Click</button>
      <CssExampleBlock active={active} />
    </>
  )
}

function CssExampleBlock({ active }) {
  const cx = classNames.bind(classes)

  const className = cx({
    card: true,
    'card--active': active,
  })

  return (
    <div className={className}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
        magnam totam necessitatibus soluta in. Voluptatem enim blanditiis sit
        mollitia molestias illo a! Dolores hic explicabo dignissimos reiciendis,
        voluptatibus sit.
      </p>
    </div>
  )
}
