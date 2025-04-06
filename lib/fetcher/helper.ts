import { GetUrlOptions } from './type'

export const getUrl = ({
  baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT ?? '',
  path = '',
  params = {},
}: GetUrlOptions) => {
  if (!baseUrl) {
    throw new Error('Base URL is required')
  }

  const url = new URL(path, baseUrl)

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value))
  })

  return url.toString()
}
