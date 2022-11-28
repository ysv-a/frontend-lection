import { useEffect, useState } from 'react'

const ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'

export function FetchDataInUseEffect() {
  const [postId, setPostId] = useState('1')
  const [postData, setPostData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(`${ENDPOINT}/${postId}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Status code ${response.status}`)
        }
        return response.json()
      })
      .then((json) => {
        setPostData(json)
        setError(null)
      })
      .catch((error) => {
        setPostData(null)
        setError(error)
      })
      .finally(() => setLoading(false))
  }, [postId])

  const handleInputChange = (event) => {
    setPostId(event.target.value)
  }

  return (
    <>
      <div>
        Post ID{' '}
        <input type="number" value={postId} onChange={handleInputChange} />
      </div>

      {loading ? (
        <div>LOADING ...</div>
      ) : error ? (
        <div style={{ color: 'red' }}>
          <strong>Error: </strong>
          {error.message}
        </div>
      ) : (
        <PropsTable title={`/posts/${postId}`} data={postData} />
      )}
    </>
  )
}

function Entry({ entry }) {
  const [prop, value] = entry
  return (
    <tr>
      <td className="border p-2">{prop}</td>
      <td className="border p-2">
        {typeof value === 'object' ? <PropsTable data={value} /> : value}
      </td>
    </tr>
  )
}

export function PropsTable({ title, data }) {
  if (!data) {
    return <></>
  }

  return (
    <table className="w-full">
      {title && (
        <thead>
          <tr>
            <th colSpan={2}>{title}</th>
          </tr>
        </thead>
      )}
      <tbody>
        {Object.entries(data).map((entry) => (
          <Entry key={entry[0]} entry={entry} />
        ))}
      </tbody>
    </table>
  )
}
