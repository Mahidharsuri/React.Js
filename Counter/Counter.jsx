import React,{useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }
    const decrement = ()=>{
        setCount(count-1);
    }
    const reset = ()=>{
        setCount(0);
    }
  return (
    <div>
        <center>
            <u> <h1> Counter</h1> </u>
         
        <h1 className='counter'>{count}</h1>
        <button className='counter-button' onClick={increment}>Inciment</button>
        <button className='counter-button' onClick={reset}>Reset</button>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        </center>
        
    </div>
  )
}

export default Counter