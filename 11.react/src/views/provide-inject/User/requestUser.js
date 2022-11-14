export async function getUserRequest(url) {
  const res = await fetch(url)
  const json = await res.json()
  return json
}
