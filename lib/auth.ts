import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import {prisma} from "@/lib/prisma"
import { loginSchema } from '@/types/user'

export const { handlers , signIn, signOut , auth}= NextAuth({
    providers:[Credentials({
        credentials:{
            email:{
                type:"email",
                label:"Email",
                placeholder:"johndoe@gmail.com"
            },
            password:{
                type:"password",
                label:"password",
                placeholder:"******"
            }
        },
        authorize:async (credentials)=>{
            let user = null

            
            const passTest = loginSchema.safeParse(credentials)

             if (!passTest.success) {
                return null;
                }

            const{password,email}= passTest.data

            const getUser = await prisma.user.findUnique({
                where:{
                    email,
                }
            })

            if(!getUser){
                return null
            }

            const match = await bcrypt.compare(password,getUser.password)

            if(!match){
                return null
            }

            user = getUser

            return {
                id: user.id.toString(),
                email: user.email,
                role: user.role,
            }
        },
        
    })],
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id = user.id
            }
            return token
        },

        async session({session,token}){
            session.user.id=token.id as string

            return session
        }
    }
})