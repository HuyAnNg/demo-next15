import NextAuth, { CredentialsSignin } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { getUserByEmailAndPassword } from './lib/auth/api'

class InvalidLoginError extends CredentialsSignin {
  constructor(code: string) {
    super()
    this.code = code
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null

          user = await getUserByEmailAndPassword(
            credentials.email as string,
            credentials.password as string,
          )

          return user
        } catch (error) {
          throw new InvalidLoginError('500')
        }
      },
    }),
  ],
})
