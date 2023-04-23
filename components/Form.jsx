"use client"
import { useState } from "react"

const Form = ({ recipes, ingredients, setIngredients, setTopRecipes }) => {
    const [addIngredient, setAddIngredient] = useState("");

    function handleSearch(e) {
        e.preventDefault();

        let topRecipes = [];
        let currentLowest = 0

        for (let index in recipes) {
            let ingredientList = recipes[index].ingredients.toLowerCase();

            let count = 0;
            for (let i = 0; i < ingredients.length; i++) {
                let regex = new RegExp(ingredients[i].toLowerCase(), 'g');

                if (ingredientList.match(regex)) {
                    count++;
                }
            }

            // if recipe contains at least as many ingredients as currentLowest
            if (count >= currentLowest) {
                // try to return at least 5
                if (topRecipes.length < 5) {
                    topRecipes.push([count, recipes[index]])
                }
                // if higher count is found, replace lowest count recipe
                else {
                    if (count > topRecipes[0][0]) {
                        topRecipes[0] = [count, recipes[index]]
                    }
                }
                // sort recipes and set new currentLowest
                topRecipes.sort((a, b) => a[0] - b[0]);
                currentLowest = topRecipes[0][0];
            }
        }

        setTopRecipes(topRecipes);
        setIngredients([])
    }

    return (
        <form
            onSubmit={handleSearch}
            className="flex flex-col items-center justify-center w-full gap-6 px-4 py-12 mt-8 sm:max-w-2xl sm:py-6 sm:px-16 text-neutral-100 bg-lime-900 sm:rounded-2xl"
        >
            <label htmlFor="ingredient" className="font-bold">What ingredients do you have on hand?</label>
            <div className="relative flex items-center">
                <input
                    onChange={(e) => {
                        setAddIngredient(e.target.value)
                    }}
                    value={addIngredient}
                    type="text"
                    id="ingredient"
                    placeholder="Ingredients"
                    className="w-96 rounded-md text-neutral-950 border-neutral-200 py-2.5 pl-2 mr-1 shadow-sm sm:text-sm"
                />

                <button
                    onClick={() => {
                        if (!ingredients.includes(addIngredient)) {
                            setIngredients(cur => [...cur, addIngredient.toLowerCase()]);
                        }
                        setAddIngredient("");
                    }}
                    type="button"
                    className="p-3 rounded-full bg-lime-600 hover:bg-lime-700 disabled:hover:bg-lime-800 disabled:bg-lime-800 disabled:text-neutral-400"
                    disabled={!addIngredient || addIngredient.trim() == ''}
                >
                    <span className="sr-only">Add Ingredient</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex flex-wrap items-start w-full max-w-lg gap-1">
                {ingredients != null && ingredients.map(ingredient => {
                    return <Ingredient ingredient={ingredient} ingredients={ingredients} setIngredients={setIngredients} />
                })}
            </div>
            <button
                className="block rounded-md bg-lime-700 px-8 py-2.5 text-sm font-medium text-white transition hover:bg-lime-800 disabled:hover:bg-lime-800 disabled:bg-lime-800 disabled:text-neutral-400"
                type="submit"
                disabled={ingredients.length == 0}
            >
                Get Recipes
            </button>
        </form>
    )
}

export default Form

const Ingredient = ({ ingredient, ingredients, setIngredients }) => {
    return (
        <div name={ingredient} className="relative flex items-center px-2 border border-dashed rounded-lg border-neutral-300 w-fit">
            <span className="pl-1 pr-2">{ingredient}</span>
            <button
                type="button"
                className="text-white rounded-full bg-lime-600 hover:bg-lime-700"
                onClick={() => {
                    setIngredients(ingredients.filter(a => a != ingredient))
                }}
            >
                <span className="sr-only">Remove</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 rotate-45"
                >
                    <path
                        d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                    />
                </svg>
            </button>
        </div>
    )
}