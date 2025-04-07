'use client'

import fetcher from '@/lib/fetcher'

export const getPosts = async () => {
  const response = await fetcher({
    path: '/401',
    baseUrl: 'https://httpstat.us',
  })
  return response.json()
}
