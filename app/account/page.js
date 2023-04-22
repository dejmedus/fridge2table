'use client'

import { useAuthContext } from "@/context/AuthContext";
import signOutUser from "@/firebase/signout";
import { useRouter } from "next/navigation";

function Account() {
    const { user } = useAuthContext()
    const router = useRouter()

    async function logout() {
        const { result, error } = await signOutUser();

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/")
    }

    if (user) {
        return (<>
            <h1>You are logged in as {user.email}</h1>
            <button
                className="block rounded-md bg-lime-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-lime-700"
                onClick={logout}
            >
                Signout
            </button>
        </>);
    }
    else {
        router.push("/signin")
    }

}

export default Account;