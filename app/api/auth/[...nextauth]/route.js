import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import connectDB from "@/utils/database"
import User from "@/models/userModels"
import CredentialsProvider from "next-auth/providers/credentials";


connectDB();

export const authOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: '/signin'
    },

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.type === 'oauth') {
                const existingUser = await User.findOne({ email: profile.email });
                console.log("Existing User", existingUser)

                if (existingUser) {
                    // User exists, authenticate
                    // return existingUser;
                    return true;

                }
                // User does not exist, create a new user
                const newUser = new User({
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    provider: account.provider,
                    role: 'Focal', // Set the role field to the default value 'Focal'

                });

                await newUser.save();

                // Authenticate the newly created user
                return true;
            }

            return true;
        },


        async jwt({ token, trigger, session }) {
            if (trigger === 'update') {
                token.user.name = session.name;
                token.user.image = session.image;
            } else {
                const user = await getUserByEmail({ email: token.email })
                token.user = user;
                // console.log("Token else", user)
            }

            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            // console.log("Session ewan ", session)
            return session;

        },
    }

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

/* --------------------------------------------------------------- */

async function signInwithOauth({ account, profile }) {

    const user = await User.findOne({ email: profile.email })

    if (user) {
        // User exists, authenticate
        return true;
    }

    // User does not exist, create a new user
    const newUser = new User({
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        provider: account.provider,
    });

    await newUser.save();

    return true
}

async function getUserByEmail({ email }) {
    const user = await User.findOne({ email }).select('-password')

    if (!user) throw new Error('Email does not exist!')
    return { ...user._doc, _id: user._id.toString() }
}

