import { prisma } from "@/lib/prisma"


export const  getUser =async (id:string)=>{

    const user = await prisma.user.findUnique({
        where:{
            id:Number(id)
        },
        include:{
            accounts:true,
            profile:true
        }
    })

    return user
}