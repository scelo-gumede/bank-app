'use server'
import { prisma } from "@/lib/prisma"
import { registerSchema, RegisterSchema, loginSchema, LoginSchema } from "@/types/user"
import bcrypt from "bcryptjs"
import { signIn, signOut } from "@/lib/auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

export const createUser = async (data: RegisterSchema) => {
    const result = registerSchema.safeParse(data)

    if (!result.success) {
        return {
            success: false,
            message: result.error.issues[0]?.message ?? "Invalid registration details",
        }
    }

    const existingUser = await prisma.user.findUnique({
        where: { email: result.data.email.toLowerCase() },
    })

    if (existingUser) {
        return {
            success: false,
            message: "An account with this email already exists",
        }
    }

    const hash = await bcrypt.hash(result.data.password, 10)

    try {
        await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    email: result.data.email.toLowerCase(),
                    password: hash,
                    userProfile: {
                        create: {
                            firstName: result.data.firstName,
                            lastName: result.data.lastName,
                        },
                    },
                    profile: {
                        create: {
                            firstName: result.data.firstName,
                            lastName: result.data.lastName,
                            phone: result.data.phone,
                        },
                    },
                    accounts: {
                        create: {
                            accountNumber: `SB-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
                            balance: result.data.openingBalance,
                            type: result.data.accountType,
                        },
                    },
                },
            })
            
            if (!user.id) {
                throw new Error("User could not be created")
            }
        })

        
    } catch (error) {
        console.error("User registration failed", error)
        return {
            success: false,
            message: "We could not create your account. Please try again.",
        }
    }
    redirect("/login")
    return {
        success: true,
        message: "Your account has been created successfully",
    }
}

export const login = async (data:LoginSchema)=>{


    try{
        await signIn("credentials",{
        email:data.email,
        password:data.password,
        redirectTo:"/dashboard"
    })
    }catch(err){
        if(err instanceof AuthError){

            if(err.type === 'CredentialsSignin'){
                return {
                success:false,
                message:"invalid email or password"
            }
            }
            return {
                success:false,
                message: "something went wrong while signing in"
            }
      
      
        }

        throw err
    }



}


export const logOut = async()=>{

    await signOut({
        redirectTo:"/"
    })


}