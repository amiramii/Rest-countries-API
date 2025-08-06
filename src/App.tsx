import './App.css'
import { useEffect,useState } from 'react'
import Home from "./components/Home/Home"
function App() {
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
    fetch("/data.json")
    .then((response)=>{return (response.json())})
    .then((data)=>{
      setCountries(data)
    })
    .catch((error)=>{
      throw new error("error fetching the data");
    })
  },[])
  return (
    <Home
    countries={countries}
   />
  )
}

export default App
