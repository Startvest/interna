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
              email: email,
              name: 'John',
          }
            // If no error and we have user data, return it
            // if (email) {
            //   return user;
            // }
            // Return null if user data could not be retrieved
            return null;
          }
        })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      } 
      return token; 
    },
    async session({ session, token }:{session:ExtendedSession ,token:JWT}) {
      if (token) {
        console.log(token);
        session.user = {
          name: token.name,
          email: token.email
        };
        session.role = "user";
      }
      return session;
    },
    async signIn({ user }) {
      console.log(user);
      return false;
    },
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




