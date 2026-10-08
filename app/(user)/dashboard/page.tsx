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

    if(!user){
        redirect("/login")
    }

    const userData = {
  ...user,

  accounts: user?.accounts.map((account) => ({
    ...account,
    balance: account.balance.toString(),
  })),
};

console.log(userData)

  return <UserDashboard {...userData} />;
}
