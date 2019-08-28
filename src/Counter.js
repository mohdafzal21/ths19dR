import React from 'react';

const Counter = (props)=>{
    console.log("Counter app", props)
    return (
    <div>
   <h1>Count : {props.count} </h1>
   <button onClick={props.increment}>Inc</button>
    <button onClick={props.decrement}>Dec</button>
    </div>
)}

export default Counter 

