
import { Suspense } from 'react';
import './App.css'
import Countries from './Components/countries/Countries';

function App() {


  const countriesPromise = async ()=>{

  const api = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,subregion,currencies,languages,timezones,area")
  return api.json();
  }


  return (
    <>
    <Suspense fallback={"Data is Loading"}>

      <Countries countriesPromise={countriesPromise()}></Countries>

    </Suspense>

    </>
  )
}

export default App
