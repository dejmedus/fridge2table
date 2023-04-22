'use client'

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Cookbook() {
    const { user } = useAuthContext()
    const router = useRouter()


    if (user) {
        return (<>
            <h1>You are logged in as {user.email}</h1>

        </>);
    }
    else {
        router.push("/signin")
    }

}

export default Cookbook;