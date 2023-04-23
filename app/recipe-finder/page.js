'use client'

// import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from 'react'
import Form from '@/components/Form'

export default function RecipeFinder() {
    // const { user } = useAuthContext();
    const [recipes, setRecipes] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [topRecipes, setTopRecipes] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch('/api/recipeData');

            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }

            const recipeData = await res.json();
            setRecipes(recipeData);
        }
        getData();
    }, [])

    return (<>
        <Form recipes={recipes} ingredients={ingredients} setIngredients={setIngredients} setTopRecipes={setTopRecipes} />

        {topRecipes !== null ?
            topRecipes.map(topRecipe => {
                const { id, href, title, ingredients, instructions } = topRecipe[1];
                return (
                    <RecipeCard id={id} href={href} title={title} ingredients={ingredients} instructions={instructions} />
                )
            }) : null}
    </>);
}

const RecipeCard = ({ id, href, title, ingredients, instructions }) => {
    return (<div
        key={id}
        className="relative block p-4 mt-4 overflow-hidden bg-white border rounded-lg border-neutral-100 sm:p-6 lg:p-8"
    >
        <span
            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-lime-700 via-lime-800 to-lime-900"
        ></span>

        <div className="sm:flex sm:gap-4">
            <div>
                <a href={href} className="text-lg font-bold hover:underline text-neutral-900 sm:text-xl">
                    {title}
                </a>
            </div>
        </div>

        <div className="flex flex-col gap-1 mt-4">
            <p className="mt-1 text-xs font-medium text-neutral-600">Ingredients</p>
            <p className="max-w-[80ch] text-sm text-neutral-500">
                {ingredients}
            </p>
        </div>

        <div className="flex flex-col gap-1 mt-4">
            <p className="mt-1 text-xs font-medium text-neutral-600">Instructions</p>
            <p className="max-w-[80ch] text-sm text-neutral-500">
                {instructions}
            </p>
        </div>

    </div>
    )
}