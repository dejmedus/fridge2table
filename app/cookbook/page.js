'use client'

import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import getData from "@/db/getData";
import { useState, useEffect } from "react";
import { RecipeCard } from "@/components/RecipeCard";

export default function Cookbook() {
    const { user } = useAuthContext()
    const router = useRouter()
    const [cookbook, setCookbook] = useState([]);
    const [page, setPage] = useState(0)
    const [pageTotal, setPageTotal] = useState(0)

    useEffect(() => {
        async function getCookbook() {
            const { result, error } = await getData('users', user.uid)

            if (error) {
                return console.log(error)
            } else {
                const userData = result.data()

                setCookbook(userData.cookbook)
                setPageTotal(Math.round(userData.cookbook.length / 5))
            }
        }
        if (user) {
            getCookbook();
        }
    }, [])

    if (user) {
        return (<>
            <h2 id="topOfPage" className="mt-6 text-2xl font-medium text-lime-800">Cookbook</h2>

            {(cookbook !== null && cookbook.length > 0) ? cookbook.map((recipe, index) => {
                const { id, href, title, ingredients, instructions } = recipe;
                const pageRange = [page * 5, (page * 5) + 5]
                console.log(index, pageRange)
                let inCookbook = false;
                if (user) {
                    inCookbook = cookbook.some(a => a.id === recipe.id);
                }

                if (index >= pageRange[0] && index < pageRange[1]) {
                    return <RecipeCard recipe={recipe} id={id} href={href} title={title} ingredients={ingredients} instructions={instructions} inCookbook={inCookbook} cookbook={cookbook} setCookbook={setCookbook} user={user} />
                }
                else {
                    return null
                }
            }) : <div className="grid gap-4 px-12 py-8 my-8 text-center border-2 border-dashed border-neutral-200">
                <p className="text-lg">Add recipes to your cookbook.</p>
                <Link className="underline hover:text-lime-900 text-lime-800" href="/recipe-finder">Find Recipes</Link>
            </div>}
            {pageTotal > 0 ? <Pagination currentPage={page} pageMax={pageTotal} setPage={setPage} router={router} /> : null}

        </>);
    }
    else {
        router.push("/signin")
    }
}

const Pagination = ({ pageMax, currentPage, setPage, router }) => {
    return (<div class="inline-flex items-center justify-center gap-3 mt-8">
        <button
            onClick={() => {
                setPage(cur => cur > 0 ? cur - 1 : cur);
                router.push("/cookbook/#topOfPage");
            }}
            class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 rtl:rotate-180 bg-neutral-50 hover:bg-neutral-200"
        >
            <span class="sr-only">Next Page</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>

        <p class="text-lg font-medium">
            {currentPage}
            <span class="mx-0.25">/</span>
            {pageMax}
        </p>

        <button
            onClick={() => {
                setPage(cur => cur < pageMax ? cur + 1 : cur);
                router.push("/cookbook/#topOfPage");
            }}
            class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 rtl:rotate-180 bg-neutral-50 hover:bg-neutral-200"
        >
            <span class="sr-only">Next Page</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
    </div>
    )
}