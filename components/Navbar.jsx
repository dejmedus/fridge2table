import Link from "next/link"
import Image from "next/image"
import fridge2table from "@/assets/fridge2table.png"

const Navbar = () => {
    return (
        <header aria-label="Site Header" className="bg-white">
            <div
                className="flex items-center h-16 max-w-screen-xl gap-8 px-4 mx-auto shadow-sm sm:px-6 lg:px-8"
            >
                <Link className="block" href="/">
                    <span className="sr-only">Home</span>
                    <Image src={fridge2table} width={48} height={48} alt="Fridge2Table logo. Bowl with food." />
                </Link>

                <div className="flex items-center justify-end flex-1 md:justify-between">
                    <nav aria-label="Site Nav" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <Navlink name="Ingredient Swap" path="/ingredient-swap" />
                            <Navlink name="Why?" path="/why" />
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="block rounded-md bg-lime-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-lime-700"
                                href="/"
                            >
                                Login
                            </a>

                            <a
                                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-lime-600 transition hover:text-lime-600/75 sm:block"
                                href="/"
                            >
                                Signup
                            </a>
                        </div>

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
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
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


const Navlink = (path, name) => {
    return (<li>
        <Link className="text-gray-500 transition hover:text-gray-500/75" href={path}>
            {name}
        </Link>
    </li>)
}