import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
     CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: "email", type: "text", placeholder: "Enter your email address" },
            password: {  label: "password", type: "password" }
          },
          async authorize(credentials, req) {
            const user:any = {}
               console.log(credentials);
               console.log(req.query);
            // If no error and we have user data, return it
            if (user) {
              return user
            }
            // Return null if user data could not be retrieved
            return null
          }
        })
  ],
  callbacks: {
     async session({ session, token, user }:{session:any, token:any, user:any}) {
       // Send properties to the client, like an access_token and user id from a provider.
     console.log(session);
       return session
     }
     },
     pages: {
          signIn: "/login",
          signOut: "/logout",
          error: "/signup"
     },
     session: {
          strategy: "jwt"
     }

})