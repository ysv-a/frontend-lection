function HeaderRow({ columns }) {
  const cells = []

  columns.forEach((element) => {
    cells.push(<th key={element.id}>{element.title}</th>)
  })

  return <tr>{cells}</tr>
}

function Row({ record, columns }) {
  const cells = []
  columns.forEach((element) => {
    cells.push(
      <td className="border p-1" key={element.id}>
        {element.render ? element.render(record) : record[element.id]}
      </td>,
    )
  })
  return <tr>{cells}</tr>
}

export function Table({ rows, columns }) {
  return (
    <table className="w-full">
      <thead>
        <HeaderRow columns={columns} />
      </thead>
      <tbody>
        {rows.map((row) => (
          <Row key={row.id} record={row} columns={columns} />
        ))}
      </tbody>
    </table>
  )
}
