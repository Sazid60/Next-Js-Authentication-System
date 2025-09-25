import { authOptions } from "@/helpers/authOptions"
import NextAuth from "next-auth"

const handler = NextAuth(
    // function will be done here. 
    authOptions
)

export { handler as GET, handler as POST }