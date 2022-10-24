export const getPosts = async () => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts`)
    return await response.json()
}

export const getUserById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return await response.json()
}
