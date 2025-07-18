import { useState } from "react"

export default function Counter (){

    const countStyle = {
        padding : '10px',
        border : '2px solid yellow',
        margin: ' 10px',

    }


    const [count, setCount] = useState(0);

    const handleCount = ()=>{
        
        setCount(count+1);
    }



    return(

        <div style={countStyle}>

        <h3>exploring const useState</h3>

        <p> Total Like : {count} </p>

        <button  onClick={handleCount}>Like</button>

        </div>

        
    )
}