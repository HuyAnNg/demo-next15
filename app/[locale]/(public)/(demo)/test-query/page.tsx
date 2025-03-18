'use client'

import { useQuery } from '@tanstack/react-query'

const Page = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['jsonPlaceholder'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      return response.json()
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  console.log('data', data)

  return <div>Success</div>
}

export default Page
