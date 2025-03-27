import { sleep } from '@/lib/utils'
import axios from 'axios'

export async function getPost(postId: number) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    )
    return response.data
  } catch (error) {
    console.error('Error fetching post:', error)
    throw error
  }
}

export async function getUser(userId: number) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    )
    return response.data
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}

export async function getUserForStreaming(userId: number) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    )

    await sleep(3000) // Check the loading.tsx file

    return response.data
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}
