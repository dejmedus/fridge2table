'use client'

import Link from "next/link"
import Image from "next/image"
import { useAuthContext } from "@/context/AuthContext";
import fridge2table from "@/assets/fridge2table.png"
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const { user } = useAuthContext()
    const currentPath = usePathname();

    return (
        <header aria-label="Site Header" className="bg-white">
            <div
                className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto shadow-sm sm:px-6 lg:px-8"
            >
                <Link className="flex items-center gap-2 text-lime-950" href="/">
                    <span className="sr-only">Home</span>
                    <Image src={fridge2table} width={38} height={38} alt="Fridge2Table logo. Bowl with food." />
                    <h1 className="text-lg font-bold">Fridge2Table</h1>
                </Link>

                <div className="flex items-center justify-end flex-1 md:justify-between">
                    <nav aria-label="Site Nav" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <Navlink name="Recipe Finder" path="/recipe-finder" currentPath={currentPath} />
                            <Navlink name="Ingredient Swap" path="/ingredient-swap" currentPath={currentPath} />
                            <Navlink name="Why Plant-Based?" path="/why-plant-based" currentPath={currentPath} />
                            {user ? <span className="flex items-center gap-1 text-gray-500 hover:text-gray-500/75">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <Navlink name="Cookbook" path="/cookbook" currentPath={currentPath} />
                            </span> : null}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        {!user ?
                            <div className="sm:flex sm:gap-4">
                                <Link
                                    className="block rounded-md bg-lime-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-lime-700"
                                    href="/signin"
                                >
                                    Login
                                </Link>

                                <Link
                                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-lime-600 transition hover:text-lime-600/75 sm:block"
                                    href="/signup"
                                >
                                    Signup
                                </Link>
                            </div> :
                            <div className="sm:flex sm:gap-4">
                                <Link
                                    className="block rounded-md bg-lime-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-lime-700"
                                    href="/account"
                                >
                                    Account
                                </Link>
                            </div>}
                        <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Navbar


const Navlink = ({ path, name, currentPath }) => {
    return (<li>
        <Link className={`${currentPath == path ? "text-lime-800" : "text-gray-500"} transition hover:text-gray-500/75`} href={path}>
            {name}
        </Link>
    </li>)
}