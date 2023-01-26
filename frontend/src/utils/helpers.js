export const isNotUrl = (url) => {
  const urlRegex = new RegExp(
    /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi
  )
  return !urlRegex.test(url)
}
