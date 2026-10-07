import UserDashboard from "@/components/userDashboard";
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/queries";
import { redirect } from "next/navigation";


export default async function UserDashboardPage() {
    const session = await auth()

    if(!session?.user?.id){
        redirect("/login")
    
    }

    const user = await getUser(session.user.id)

    console.log(user?.profile)

  return <UserDashboard {...user} />;
}
