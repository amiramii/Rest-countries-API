import { useParams } from "react-router-dom";
import { useEffect,useRef,useState } from "react";
import type { Country } from "../Home/Home";
import { Link } from "react-router-dom";
import Header from "../Header";
import { FaLongArrowAltLeft } from "react-icons/fa";
function CountryPage(){
    const [country,setCountry]=useState<Country | null>(null);
    const countries=useRef<Country[]>([])
    const {name}=useParams();
    useEffect(()=>{
        fetch("/data.json")
        .then((response)=>{return (response.json())})
        .then((data)=>{
          const match=data.find((item:Country)=>item.name === name);
          setCountry(match || null);
          countries.current=data;
        })
        .catch((error)=>{
          throw new error("error fetching the data");
        })
      },[name])
    if(!country){
        return(
            <div>
                <p>Country not found</p>
                <Link to={"/"}><p>Go back to Home page</p></Link>
            </div>
        )
    }
    function searchBorders(country:Country ){
        if((!country.borders)){
            return(
                <>
                <p className="font-medium">This country has no broder countries !</p>
                </>
            )
        }
        const bordersCountries=countries.current.filter((item:Country)=> country?.borders.includes(item.alpha3Code))
        return(
            <>
             {
                bordersCountries.map((item:Country)=>{
                    return(
                        <div key={item.name} className="bg-[var(--elements-bg)] shadow-[0_0_8px_0px_rgba(0,0,0,20%)] rounded-[0.3rem] w-full py-2 px-6 flex items-center justify-center text-sm text-center">
                            <Link to={`/Country/${item.name}`}>
                            {item.name}
                            </Link>
                        </div>
                    )
                })
            }
            </>
        )
    }
    return(
        <div className="min-h-dvh bg-[var(--bg-color)]">
            <Header/>
            <div className="p-15 flex flex-col gap-10">
                <Link to={"/"} className="text-[var(--text-color)] flex items-center gap-3 bg-[var(--elements-bg)] w-max py-2 px-5 rounded-[0.3rem] shadow-[0_0_8px_0px_rgba(0,0,0,20%)]">
                <FaLongArrowAltLeft />
                Back
                </Link>
                <section className="flex flex-col xl:flex-row w-full gap-20">
                    <img src={country.flags.png} alt={`${country.name} flag`} className="w-full xl:w-1/3 xl:h-96 shadow-[0_0_8px_0px_rgba(0,0,0,20%)]"/>
                    <div className="flex-1 xl:p-10 text-[var(--text-color)] flex flex-col gap-5">
                        <h1 className="font-bold text-2xl">{country.name}</h1>
                        <div className="flex flex-col gap-5 xl:flex-row xl:gap-10" >
                            <div className="flex flex-col leading-8">
                                <p><span className="font-semibold">Native Name:  </span><span className="text-[var(--input)]">{country.nativeName}</span></p>
                                <p><span className="font-semibold ">Population:  </span><span className="text-[var(--input)]">{country.population.toLocaleString()}</span></p>
                                <p><span className="font-semibold">Region:  </span><span className="text-[var(--input)]">{country.region}</span></p>
                                <p><span className="font-semibold">Sub Region:  </span><span className="text-[var(--input)]">{country.subregion}</span></p>
                                <p><span className="font-semibold">Capital:  </span><span className="text-[var(--input)]">{country.capital}</span></p>
                            </div>
                            <div>
                                <p><span className="font-semibold">Top Level Domain:  </span><span className="text-[var(--input)]">{country.topLevelDomain}</span></p>
                                    <p><span className="font-semibold">Currencies:  </span><span className="text-[var(--input)]">{country.currencies[0].name}</span></p>
                                    <p><span className="font-semibold">Languages:  </span><span className="text-[var(--input)]">{country.languages.map((item)=>{
                                        return(
                                            <span>{item.name} </span>
                                        )
                                    })}</span></p>
                            </div>
                        </div>
                    <div className="flex flex-col xl:flex-row gap-5">
                        <p>Border Countries:</p>
                        <div className="text-[var(--input)] grid gap-4 grid-cols-3 xl:w-1/2 ">
                            {searchBorders(country)}
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        </div>
        
    )
}
export default CountryPage;