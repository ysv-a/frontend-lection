import { useState } from 'react'

import { Card } from './card.styles'

export function CssExample6() {
  const [active, setActive] = useState(false)
  return (
    <>
      <button onClick={() => setActive(!active)}>Click</button>
      <CssExampleBlock active={active} />
    </>
  )
}

function CssExampleBlock({ active }) {
  return (
    <Card active={active}>
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
    </Card>
  )
}
