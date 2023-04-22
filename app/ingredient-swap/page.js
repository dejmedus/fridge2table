

export default function IngredientSwap() {
    return (
        <>
            <h2 className="mt-6 text-2xl font-medium text-lime-800">Ingredient Swap</h2>
            <h3 className="w-3/5 mt-2 mb-6 text-lg text-center text-neutral-800">Thinking about adding more plants to your favorite recipes?</h3>
            <table className="text-sm divide-y-2 divide-neutral-200">
                <thead>
                    <tr>
                        <th className="px-4 py-2 pr-12 font-medium text-neutral-900 whitespace-nowrap">
                            Ingredient
                        </th>
                        <th className="px-4 py-2 font-medium text-neutral-900 whitespace-nowrap">
                            Plant-based alternatives
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                    <Row ingredient="Milk" swaps="Soy milk, almond milk, oat milk, coconut milk, cashew milk" />
                    <Row ingredient="Butter" swaps="Olive oil, avocado oil, vegan butter, select margarines" />
                    <Row ingredient="Cheese" swaps="Nutritional yeast, tofu, vegan cheese" />
                    <Row ingredient="Eggs" swaps="Applesauce, mashed bananas, flax or chia seeds, tofu" />
                    <Row ingredient="Meat" swaps="Tofu, tempeh, seitan, jackfruit, beans, nuts, lentils" />
                    <Row ingredient="Fish" swaps="Seaweed, vegan fish" />
                    <Row ingredient="Honey" swaps="Maple syrup, agave nectar, date syrup" />
                    <Row ingredient="Yogurt" swaps="Soy yogurt, coconut yogurt, almond yogurt" />
                    <Row ingredient="Cream" swaps="Coconut cream, cashew cream, silken tofu" />
                    <Row ingredient="Sour cream" swaps="Cashew sour cream, tofu sour cream, coconut cream" />
                    <Row ingredient="Mayonnaise" swaps="Vegan mayo, tahini, hummus" />
                </tbody>
            </table>
        </>
    )
}

const Row = ({ ingredient, swaps }) => {
    return (<tr>
        <td className="px-4 py-2 pr-24 font-medium text-neutral-900 whitespace-nowrap">
            {ingredient}
        </td>
        <td className="px-4 py-2 text-neutral-700 whitespace-nowrap">{swaps}</td>
    </tr>)
}