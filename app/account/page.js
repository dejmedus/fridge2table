'use client'

import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Account() {
    const { user } = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        if (user == null) router.push("/signup")
    }, [user])

    return (<>
        <h1>You are logged in as {user.email}</h1>
    </>);
}

export default Account;