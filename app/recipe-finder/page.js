'use client'

import { useAuthContext } from "@/context/AuthContext";
import { useEffect, useState } from 'react'
import Form from '@/components/Form'
import getData from "@/db/getData";
import { RecipeCard } from "@/components/RecipeCard";

export default function RecipeFinder() {
    const { user } = useAuthContext();
    const [recipes, setRecipes] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [topRecipes, setTopRecipes] = useState([]);
    const [cookbook, setCookbook] = useState([]);

    useEffect(() => {
        async function getRecipeData() {
            const res = await fetch('/api/recipeData');

            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }

            const recipeData = await res.json();
            setRecipes(recipeData);
        }
        async function getCookbook() {
            const { result, error } = await getData('users', user.uid)

            if (error) {
                return console.log(error)
            } else {
                const userData = result.data()

                setCookbook(userData.cookbook)
            }
        }

        getRecipeData();
        if (user) {
            getCookbook();
        }
    }, [])

    return (<>
        <Form recipes={recipes} ingredients={ingredients} setIngredients={setIngredients} setTopRecipes={setTopRecipes} />

        {topRecipes !== null ?
            topRecipes.map(topRecipe => {
                const { id, href, title, ingredients, instructions } = topRecipe[1];
                let inCookbook = false;

                if (user) {
                    inCookbook = cookbook.some(a => a.id === topRecipe[1].id);
                }


                return (
                    <RecipeCard recipe={topRecipe[1]} id={id} href={href} title={title} ingredients={ingredients} instructions={instructions} inCookbook={inCookbook} cookbook={cookbook} setCookbook={setCookbook} user={user} />
                )
            }) : null}
    </>);
}

