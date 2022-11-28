export function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json(),
  )
}

export function fetchUser(id) {
  return fetch('https://jsonplaceholder.typicode.com/users/' + id).then(
    (response) => response.json(),
  )
}

export function updateUser(data) {
  return fetch('https://jsonplaceholder.typicode.com/users/' + data.id, {
    method: 'PUT',
    body: JSON.stringify(data.data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json())
}

export function deleteUser(id) {
  return fetch('https://jsonplaceholder.typicode.com/users/' + id, {
    method: 'DELETE',
  }).then((response) => {
    if (response.ok) {
      return Promise.resolve()
    }
    return Promise.reject()
  })
}
