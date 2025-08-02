
import { Suspense} from 'react';
import './App.css'
import Bottles from './components/Bottles/Bottles';

const bottlesPromise = fetch("../public/bottles.json")
.then(respone=> respone.json());


function App() {


  return (
    <>
    <h2>My awsome Bottles</h2>

    <Suspense fallback={"Bottle data is loading.........."}>
      <Bottles
       bottlesPromise={bottlesPromise}>
      </Bottles>
    </Suspense>

    </>
  )
}

export default App
