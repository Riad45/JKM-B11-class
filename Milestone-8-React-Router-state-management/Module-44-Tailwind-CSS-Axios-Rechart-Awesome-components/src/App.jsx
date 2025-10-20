
import { Suspense } from 'react'
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import CustomNav from './CustomNav/CustomNav'
import CustomPricing from './Component/CustomPricing/CustomPricing'
import MyChart from './Component/ReCharts/MyChart'


  const pricingPromise = fetch('pricingOptionsData.json')
  .then(res=>res.json())

function App() {
  


  return (
    <>

   <header>
     <CustomNav></CustomNav>
   </header>

   <main>
 <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>

 <CustomPricing pricingPromise={pricingPromise} > </CustomPricing>

 </Suspense>

 <MyChart></MyChart>

   </main>

   <footer>

   </footer>

    

    </>
  )
}

export default App;
