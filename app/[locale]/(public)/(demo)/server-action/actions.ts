'use server'

export async function createUser(prevState: any, formData: FormData) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const json = await res.json()

  console.log('prevState', prevState)
  console.log('formData', formData)

  if (!res.ok) {
    return { message: 'Please enter a valid email' }
  }

  return json
}
