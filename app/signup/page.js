"use client";

import { useState } from "react";
import Link from "next/link"
import signUp from "@/firebase/signup";
import { useRouter } from "next/navigation";


function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const router = useRouter();

    const handleForm = async (event) => {
        event.preventDefault();

        const { result, error } = await signUp(email, password);

        if (error) {
            return console.log(error);
        }

        // else successful
        console.log(result);
        return router.push("/recipe-finder");
    };

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
                        Welcome to Fridge2Table
                    </h2>

                    <p className="mt-4 leading-relaxed text-neutral-500">
                        Sustainable eating made easy. Simply input the ingredients you have on hand, and receive delicious plant-based recipe options.
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

                        <div className="col-span-6 sm:col-span-3">
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

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                for="passwordConf"
                                className="block text-sm font-medium text-neutral-700"
                            >
                                Password Confirmation
                            </label>

                            <input
                                onChange={(e) => setPasswordConf(e.target.value)}
                                required
                                type="password"
                                name="passwordConf"
                                id="passwordConf"
                                placeholder="confrim password"
                                className={`w-full p-2 mt-1 text-sm bg-white rounded-md shadow-sm border-neutral-200 text-neutral-700 ${password && passwordConf && password !== passwordConf ? "outline-1 outline-red-700 border border-red-700" : ""}`}
                            />
                        </div>

                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                                type="submit"
                                className="inline-block px-12 py-3 text-sm font-medium transition border rounded-md shrink-0 text-neutral-100 border-lime-600 bg-lime-600 hover:bg-transparent hover:text-lime-600 focus:outline-none focus:ring active:text-lime-500 disabled:hover:bg-lime-700 disabled:bg-lime-700 disabled:border-lime-700 disabled:text-neutral-200"
                                disabled={!password || !email || !passwordConf || password !== passwordConf}
                            >
                                Create an account
                            </button>

                            <p className="flex gap-2 mt-4 text-sm text-neutral-500 sm:mt-0">
                                Already have an account?
                                <Link href="/signin" className="underline text-neutral-700 hover:text-lime-700">Sign in</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Signup;
