import { Link } from "react-router-dom";
import type { Country } from "./Home";
function HeroCountry({country}:{country:Country}){
    
    return(
        <>
         <Link to={`/Country/${country.name}`} >
          <img src={country.flags.png} alt="" className="w-full  lg:h-1/2 object-center rounded-t-[0.5rem]"/>
          <div className=" p-2  text-[var(--text-color)] px-10 py-10 flex flex-col gap-4 justify-center ">
           <p className="font-bold text-xl md:text-2xl">{country.name}</p>
           <section className="mb-10 leading-7">
            <p><span className="font-semibold">Population:  </span><span className="text-[var(--input)]">{country.population.toLocaleString()}</span></p>
            <p><span className="font-semibold">Region:  </span><span className="text-[var(--input)]">{country.region}</span></p>
            <p ><span className="font-semibold">Capital:  </span><span className="text-[var(--input)]">{country.capital}</span></p>
           </section>
          </div>
         </Link>
        </>
    )
}
export default HeroCountry;