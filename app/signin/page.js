'use client'

import Link from 'next/link'
import signIn from "@/firebase/signin";
import { useState } from "react";
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/recipe-finder")
    }
    return (
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside
                className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
            >
                <img
                    alt="Hand holding carrots"
                    src="https://images.unsplash.com/photo-1627798133922-270bb80af5ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    className="absolute inset-0 object-cover w-full h-full"
                />
            </aside>

            <main
                aria-label="Main"
                className="flex items-center justify-center px-8 pb-6 sm:px-12 lg:col-span-7 lg:px-16 lg:pb-8 xl:col-span-6"
            >
                <div className="max-w-xl lg:max-w-3xl">
                    <h2
                        className="text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl"
                    >
                        Welcome Back!
                    </h2>

                    <p className="mt-4 leading-relaxed text-neutral-500">
                        Thank you for contributing to a greener world! Preventing food waste and reducing meat consumption will help lower the impact of food production.
                    </p>

                    <form onSubmit={handleForm} className="grid grid-cols-6 gap-6 mt-4">
                        <div className="col-span-6">
                            <label for="Email" className="block text-sm font-medium text-neutral-700">
                                Email
                            </label>

                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@mail.com"
                                className="w-full p-2 mt-1 text-sm bg-white rounded-md shadow-sm border-neutral-200 text-neutral-700"
                            />
                        </div>

                        <div className="col-span-6">
                            <label
                                for="Password"
                                className="block text-sm font-medium text-neutral-700"
                            >
                                Password
                            </label>

                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                className="w-full p-2 mt-1 text-sm bg-white rounded-md shadow-sm border-neutral-200 text-neutral-700"
                            />
                        </div>


                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                                type="submit"
                                className="inline-block px-12 py-3 text-sm font-medium transition border rounded-md shrink-0 text-neutral-100 border-lime-600 bg-lime-600 hover:bg-transparent hover:text-lime-600 focus:outline-none focus:ring active:text-lime-500 disabled:hover:bg-lime-700 disabled:bg-lime-700 disabled:border-lime-700 disabled:text-neutral-200"
                                disabled={!password || !email}
                            >
                                Sign in
                            </button>

                            <p className="flex gap-2 mt-4 text-sm text-neutral-500 sm:mt-0">
                                Need an account?
                                <Link href="/signup" className="underline text-neutral-700 hover:text-lime-700">Sign up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Page;