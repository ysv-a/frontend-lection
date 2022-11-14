import classes from './card.module.css'

export function CssExample11() {
  return (
    <>
      <CssExampleBlock />
    </>
  )
}

function CssExampleBlock() {
  return (
    <div className={classes.card}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
        magnam totam necessitatibus soluta in. Voluptatem enim blanditiis sit
        mollitia molestias illo a! Dolores hic explicabo dignissimos reiciendis,
        voluptatibus sit.
      </p>
    </div>
  )
}
