import { CarCard, Hero } from "@components";
import data from '../data/cars.json';

export default function Home() {
  const allCars = data;  // přiřazení importovaných dat do proměnné allCars
  const isDataEmpty = allCars.length === 0;
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results. It looks like all the cars were destroyed in the desert battle.</h2>
          </div>
        )}
      </div>
    </main>
  )
}
