
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <div className="px-4 pt-8 pb-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 text-neutral-100">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="p-8 bg-lime-800 md:p-12 lg:px-16 lg:py-24">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold md:text-3xl">
                Fight Climate Change Today.
              </h2>

              <p className="hidden text-neutral/90 sm:mt-4 sm:block">
                Reduce your eco-footprint by preventing food waste and adding more plant-based meals to your repertoire - the easy way! Simply input the ingredients in your fridge or pantry and choose from 1300+ delicious recipes.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="/recipe-finder"
                  className="inline-block px-12 py-3 text-sm font-medium transition rounded bg-neutral-800 hover:bg-pink-800 focus:outline-none focus:ring"
                >
                  Find a Recipe
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Bee on flowers"
              src="https://images.unsplash.com/photo-1681477915906-e0f9209e21b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80"
              className="object-cover w-full h-40 sm:h-56 md:h-full"
            />

            <img
              alt="Beet greens"
              src="https://images.unsplash.com/photo-1617884638394-d9eef1b0f40e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              className="object-cover w-full h-40 sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-1 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 text-neutral-100">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <Card color="neutral">
            <a href="https://www.mondaycampaigns.org/meatless-monday">
              <Image src="https://www.mondaycampaigns.org/wp-content/uploads/2022/03/meatless-monday-environmental-animation-saves.gif" alt="meatless mondays campaign" height={400} width={400} />
            </a>
          </Card>
          <Card color="black">
            <h3 className="text-lg font-semibold md:text-xl">
              "Plant-based foods – such as fruits and vegetables, whole grains, beans, peas, nuts, and lentils – generally use less energy, land, and water, and have lower greenhouse gas intensities than animal-based foods" <a className="underline text-lime-800 hover:text-lime-700" href="https://www.un.org/en/climatechange/science/climate-issues/food">- United Nations, Climate Action</a>
            </h3>
          </Card>
          <Card color="green">
            <h3 className="text-lg font-semibold md:text-xl">
              See the Impact
            </h3>

            <p className="mt-6 mb-8 text-lg text-neutral/90">
              Today, food production is responsible for nearly a third of all greenhouse gas emissions - but we can change that.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="/why-plant-based"
                className="inline-block px-12 py-3 text-sm font-medium transition border-2 rounded border-neutral-200 hover:bg-pink-800 hover:border-pink-800 focus:outline-none focus:ring"
              >
                Learn More
              </a>
            </div>
          </Card>
        </div>
      </div >
    </>
  )
}

const Card = ({ children, color }) => {
  const colors = {
    'green': 'bg-lime-800',
    'neutral': 'bg-neutral-200',
    'black': 'bg-neutral-800',
  }
  return (<div className={`${colors[color]} p-6 md:p-10 lg:px-12 lg:py-8`}>
    <div className="max-w-xl mx-auto text-center">
      {children}
    </div>
  </div>)
}