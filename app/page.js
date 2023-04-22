
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 text-neutral-100">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="bg-lime-800 p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-2xl font-bold md:text-3xl">
                Fight Climate Change Today.
              </h2>

              <p class="hidden text-neutral/90 sm:mt-4 sm:block">
                Reduce your eco-footprint by preventing food waste and adding more plant-based meals to your repertoire - the easy way! Simply input the ingredients in your fridge or pantry and choose from 1300+ delicious recipes.
              </p>

              <div class="mt-4 md:mt-8">
                <a
                  href="/recipe-finder"
                  class="inline-block rounded px-12 py-3 text-sm font-medium bg-neutral-800 transition hover:bg-pink-800 focus:outline-none focus:ring"
                >
                  Find a Recipe
                </a>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Bee on flowers"
              src="https://images.unsplash.com/photo-1681477915906-e0f9209e21b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80"
              class="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt="Beet greens"
              src="https://images.unsplash.com/photo-1617884638394-d9eef1b0f40e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              class="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>

      <a href="https://www.mondaycampaigns.org/meatless-monday">
        <Image src="https://www.mondaycampaigns.org/wp-content/uploads/2022/03/meatless-monday-environmental-animation-saves.gif" alt="meatless mondays campaign" height={400} width={400} />
      </a>
    </>
  )
}
