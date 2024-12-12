import React, { useState } from 'react'

const MyComponent = () => {
    const [foods,setFoods] = useState(["Apple","Carrot","Jack-fruit"])

    const handleAddFood =()=>{
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = '';

        setFoods([...foods,newFood])

    }
  return (
    <div>
        <h2>List of Fruits</h2>
        <ul>
            {foods.map((food , index)=> <li key={index}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder='enter food name' />
        <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}

export default MyComponent