import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"
// import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
// import {CustomSession} from "../../_app";
import {Session} from "next-auth";

interface ExtendedSession extends Session {
  role?: string;
}
export default NextAuth({
//   // Configure one or more authentication providers
  providers: [
     CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "email", type: "text", placeholder: "Enter your email address" },
            password: {  label: "password", type: "password" }
          },
          async authorize(credentials, req) {
            const {email, password} = credentials as {email: string, password: string}
            const user = {
              id: '1', 
              email
          }
            // If no error and we have user data, return it
            if (email) {
              return user;
            }
            // Return null if user data could not be retrieved
            return user;
          }
        })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      console.log(user);
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.roles = "user.roles";
        token.usercode =" user.usercode";
        token.email = user.email;
        token.name = user.name;

        if ("user.token") {
          token.accessToken = "user.token";
        }
      } 
      return token; 
    },
    async session({ session, token }:{session:ExtendedSession ,token:JWT}) {
      if (token) {
        console.log(token);
        // session.role = token.role;
      }

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




