'use client'

import { useQuery } from '@tanstack/react-query'
import { getPosts } from './action'

const Page = () => {
  const { isLoading, isError, error } = useQuery({
    queryKey: ['jsonPlaceholder'],
    queryFn: getPosts,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    console.log('error', error)
    return <div>Error</div>
  }

  return <div>Success</div>
}

export default Page
