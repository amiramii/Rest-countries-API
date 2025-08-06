import { Link } from "react-router-dom";
import HeroCountry from "./HeroCountry";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import Header from "../Header";
import clsx from "clsx";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
const regions=["All","Africa","America","Asia","Europe","Oceania"]
function Home({countries}:{countries:Array<Country>}){
  const [region,setRegion]=useState("");
  const [search,setSearch]=useState("");
  function filteredCountries() {
    const cleanedValue = search.trim().toLowerCase();
    return countries.filter((country: Country) => {
      const matchesSearch = country.name.toLowerCase().includes(cleanedValue);
      const matchesRegion =
        region === "" || region==="All" ||
        (region === "America" && country.region === "Americas") ||
        (region !== "America" && country.region === region);
      return matchesSearch && matchesRegion;
    });
  }
    return(
        <div className="bg-[var(--bg-color)] min-h-dvh flex flex-col ">
          <Header/>
          <div className="flex flex-col p-15 ">
          <section >
            <form action="/" className="flex flex-col lg:flex-row gap-10 justify-between">
             <div className="bg-[var(--elements-bg)]  flex items-center w-full shadow-sm rounded-[0.3rem] focus:outline-black focus:outline-1 lg:w-1/4" tabIndex={0} >
              <div className="text-[var(--input)] px-5 py-2">
              <IoSearch />
              </div>
              <input 
              type="text" 
              placeholder="Search for a country..."
              name="search"
              className="h-12 flex-1 outline-none placeholder:text-[var(--input)]  text-[var(--text-color)]"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              />
             </div>
             <Listbox value={region} onChange={setRegion}>
              <ListboxButton className={clsx(
            'relative block w-max rounded-md bg-white/5 py-3 pr-15 pl-5 text-left text-sm/6 text-[var(--text-color)] text-nowrap shadow-sm cursor-pointer',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}>
                {region ? region : "Filter by Region"}
                <ChevronDownIcon
                  className="group pointer-events-none absolute top-4 right-2.5 size-4 fill-[var(--text-color)]"
                  aria-hidden="true"
                />
                </ListboxButton>
              <ListboxOptions anchor="bottom"  transition
              className={clsx(
                'w-(--button-width) rounded-[0.3rem] bg-[var(--elements-bg)] p-4 [--anchor-gap:--spacing(1)] focus:outline-none',
                'transition duration-100 ease-in data-leave:data-closed:opacity-0'
              )}>
                {regions.map((region)=>{
                  return(
                      <ListboxOption key={region} value={region} className="data-focus:bg-[var(--elements-bg)] text-[var(--text-color)] cursor-pointer">
                        {region}
                      </ListboxOption>
                  )
                })}
              </ListboxOptions>

             </Listbox>
            </form>
          </section>
          <section className="mt-10">
             
            <ul className="flex flex-col gap-15 sm:grid xl:grid-cols-4 sm:place-content-center md:grid-cols-3 sm:grid-cols-2">
                  {
                  filteredCountries().map((country:Country)=>{
                       return(
                         <li key={country.name} className="w-full shadow-[0_0_8px_0px_rgba(0,0,0,20%)] rounded-[0.5rem]">
                             <Link to={`/Country/${country.name}`}>
                               <HeroCountry country={country}/>
                             </Link>
                         </li>
                     )})
                  }
            </ul>
            
          </section>
          </div>
        </div>
    )
}
export default Home;
export interface Country {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    subregion: string;
    region: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    flags: {
      svg: string;
      png: string;
    };
    currencies: {
      code: string;
      name: string;
      symbol: string;
    }[];
    languages: {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    }[];
    translations: {
      br: string;
      pt: string;
      nl: string;
      hr: string;
      fa: string;
      de: string;
      es: string;
      fr: string;
      ja: string;
      it: string;
      hu: string;
    };
    flag: string;
    regionalBlocs: {
      acronym: string;
      name: string;
    }[];
    cioc: string;
    independent: boolean;
  }