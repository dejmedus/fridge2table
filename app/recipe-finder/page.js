'use client'

import { useAuthContext } from "@/context/AuthContext";
import Form from '@/components/Form'

function RecipeFinder() {
    const { user } = useAuthContext()

    return (<>
        <Form />
    </>);
}

export default RecipeFinder;