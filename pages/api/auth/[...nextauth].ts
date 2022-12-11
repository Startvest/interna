import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import {CustomSession} from "../../_app";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
     CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "email", type: "text", placeholder: "Enter your email address" },
            password: {  label: "password", type: "password" }
          },
          async authorize(credentials, req) {
            const user:any = {
              email: credentials?.email,
              password: credentials?.password
            }
              //  console.log(req.query);
            // If no error and we have user data, return it
            if (user) {
              console.log(user);
              return user
            }
            // Return null if user data could not be retrieved
            return null
          }
        })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = 1;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        console.log(token);
        // session.role = token.role;
      }
      console.log(session);
      return session;
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