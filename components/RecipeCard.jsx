import addData from "@/db/addData";

export const RecipeCard = ({ recipe, id, href, title, ingredients, instructions, inCookbook, cookbook, setCookbook, user }) => {

    async function handleCookbook() {
        let updatedCookbook = []

        if (inCookbook) {
            updatedCookbook = cookbook.filter(a => a.id !== recipe.id);
        }
        else {
            updatedCookbook = [...cookbook, recipe]
        }

        setCookbook(updatedCookbook);
        const data = {
            email: user.email,
            cookbook: updatedCookbook
        }

        const { dataResult, error } = await addData('users', user.uid, data)

        if (error) {
            return console.log(error)
        }
    }


    return (<div
        key={id}
        className="relative block p-4 mt-4 overflow-hidden bg-white border rounded-lg border-neutral-100 sm:p-6 lg:p-8"
    >
        <span
            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-lime-700 via-lime-800 to-lime-900"
        ></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
                <a href={href} className="text-lg font-bold hover:underline text-neutral-900 sm:text-xl">
                    {title}
                </a>
            </div>
            {user !== null ? <button onClick={handleCookbook} className='rounded-2xl hover:bg-neutral-200'>
                <span className="sr-only">Remove</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill={inCookbook ? 'currentColor' : 'white'} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </button> : null}
        </div>

        <div className="flex flex-col gap-1 mt-4">
            <p className="mt-1 font-medium text-neutral-600">Ingredients</p>
            <p className="max-w-[80ch] text-sm text-neutral-500">
                {ingredients}
            </p>
        </div>

        <div className="flex flex-col gap-1 mt-4">
            <p className="mt-1 font-medium text-neutral-600">Instructions</p>
            <p className="max-w-[80ch] text-sm text-neutral-500">
                {instructions}
            </p>
        </div>

    </div>
    )
}
