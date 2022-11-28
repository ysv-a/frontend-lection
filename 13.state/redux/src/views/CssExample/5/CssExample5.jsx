import classNames from 'classnames'
import { useState } from 'react'

export function CssExample5() {
  const [active, setActive] = useState(false)
  return (
    <>
      <button onClick={() => setActive(!active)}>Click</button>
      <CssExampleBlock active={active} />
    </>
  )
}

function CssExampleBlock({ active }) {
  const cardClass = classNames({
    card2: true,
    'card2--active': active,
  })

  return (
    <div className={cardClass}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
        magnam totam necessitatibus soluta in. Voluptatem enim blanditiis sit
        mollitia molestias illo a! Dolores hic explicabo dignissimos reiciendis,
        voluptatibus sit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
        magnam totam necessitatibus soluta in. Voluptatem enim blanditiis sit
        mollitia molestias illo a! Dolores hic explicabo dignissimos reiciendis,
        voluptatibus sit.
      </p>
    </div>
  )
}
