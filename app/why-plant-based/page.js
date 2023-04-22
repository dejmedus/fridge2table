
export default function WhyPlantBased() {
    return (
        <>
            <h2 className="mt-6 text-2xl font-medium text-lime-800">Why Plant-Based?</h2>
            <h3 className="mt-2 mb-6 text-lg font">Reduced meat consumption slows climate change. Here's how:</h3>
            <div className="w-3/5 space-y-4">
                <FAQ
                    title="The Impact of Agriculture"
                    body="Food production has a big impact on our earth and its land, water, and species diversity. Livestock production is the biggest human contributor to species decline and has led to over 60 percent decline in species populations since 1970. [1] Today, 96% of non-human mammals on earth are farmed livestock and 71% of birds are farmed poultry. [2]"
                    citations={[[1, "Biodiversity and Species Loss", "https://www.mondaycampaigns.org/meatless-monday/research/environment"], [2, "Environmental Impacts of Food Production", "https://ourworldindata.org/environmental-impacts-of-food"]]}
                />
                <FAQ
                    title="Land Use"
                    body="Half of all habitable land is set aside for agriculture. Nearly 80% of that is used for animal agriculture (meat and dairy). However, animal foods account for only 18% of calorie intake and 37% of protein intake - plants provide the bulk of protein and calories globally. Eating more plant-based meals means more efficient land use."
                    citations={[['All', "Environmental Impacts of Food Production", "https://ourworldindata.org/environmental-impacts-of-food"]]}
                />

                <FAQ
                    title="Greenhouse Gas Emissions"
                    body="Food production is responsible for nearly a third of all greenhouse gas emissions. Plant-based foods have a smaller ecological footprint than animal-based foods. The top offender, beef, is estimated to cause 99kg of greenhouse gas emissions per kilogram. Whereas peas, sometimes used to make veggie burgers, cause 0.98kg per kilogram of food."
                    citations={[['All', "Environmental Impacts of Food Production", "https://ourworldindata.org/environmental-impacts-of-food"]]}
                />
                <FAQ
                    title="Eat Local?"
                    body="Unfortunately, evidence shows that eating locally has little effect on the ecological impact of food. The transportation of food accounts for only 5% of food's greenhouse gas emissions. [1] The vast majority of emissions come from the production process. [2] Livestock production creates more greenhouse gases than the entire transportation sector – all the cars, trucks, planes, and trains in the world – combined [3]"
                    citations={[[1, "Environmental Impacts of Food Production", "https://ourworldindata.org/environmental-impacts-of-food"], [2, "Food and Climate Change", "https://www.un.org/en/climatechange/science/climate-issues/food"], [3, "Meatless Monday", "https://www.mondaycampaigns.org/meatless-monday/research/environment"]]}
                />

            </div>
        </>
    )
}

const FAQ = ({ title, body, citations }) => {
    return (<details
        className="group border-l-4 border-lime-500 bg-neutral-50 p-4 [&_summary::-webkit-details-marker]:hidden"
    >
        <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-lg font-medium text-neutral-900">
                {title}
            </h2>

            <span
                className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-neutral-900 sm:p-3"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clip-rule="evenodd"
                    />
                </svg>
            </span>
        </summary>

        <p className="mt-4 leading-relaxed text-neutral-700">
            {body}
        </p>

        {citations
            ? <ul>
                {citations.map(citation => {
                    const [index, name, path] = citation;
                    return (
                        <li>
                            {index}:{" "}
                            <a href={path} className="leading-relaxed underline hover:text-lime-700 text-neutral-700">
                                {name}
                            </a>
                        </li>
                    )
                })}
            </ul>
            : null}

    </details>)
}