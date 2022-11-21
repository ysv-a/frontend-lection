export function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((r) =>
    r.json(),
  )
}

export function getPostComments(id) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  ).then((r) => r.json())
}
