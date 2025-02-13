import React, { useEffect, useState } from "react";

const ApiCall = (max) => {
    const [data,setData] = useState([]);
    const arr = ["max","ishu","janu","mahi","raj", "chitti"]
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts" )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  
  return (<>
           <p>Po ra rey {max.name}</p>
           
           <div>{data.map(item => <li key={item.id}>{item.title}---{item.userId}</li>)}
           </div>
           <div>{arr[3]}</div>
           <div>{arr.map((list,index) => <li key={index}>{list}</li>)}</div>
        
           </>
              
         );
   
   
};

export default ApiCall;
