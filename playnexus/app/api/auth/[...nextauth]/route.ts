import { prisma1 } from "@/app/lib/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(params) {
      try {
        const { user } = params;

        console.log(params);
        const existingUser = await prisma1.user.findUnique({
          where: {
            email: user?.email || "",
          },
        });

        if (!existingUser) {
          console.log("Creating user...");
          await prisma1.user.create({
            data: {
              email: user?.email || "",
              provider: "Google",
            },
          });
        }

        
        return true;
      } catch (e) {
        console.error("Error during sign-in:", e);
        
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
