import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const Page = () => {
  const session = auth()

  if (!session) {
    redirect('/login')
  }

  redirect('/dashboard')
}

export default Page
