import {useState} from "react"

function Counter () {
   const [count, setCount] = useState(10)
   const handleIncrement=()=> {
      setCount(count+1)
   }
   const handleDecrement = () => {
      setCount(count-1)
   }
   const handleReset=()=>{
      setCount(count-count)
   }
    return (
       <div>
             <button onClick={handleIncrement}>+</button>
             {count}
             <button onClick={handleDecrement}>-</button><br/>
             <button onClick={handleReset}>RESET</button>
       </div>
    )
}

export default Counter;

