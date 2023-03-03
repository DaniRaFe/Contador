//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'

import {useState} from "react";
function App() {
  //let counter = 0;
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h3>Counter</h3>
      <hr />
      <h1> {counter} </h1>
      <button 
      onClick={() => {
        setCounter(counter +1);
        console.log(counter)}}
      type="button" 
      className="btn btn-primary"
      >+1</button>

<button 
      onClick={() => {
        setCounter(counter -1);
        console.log(counter)}}
      type="button" 
      className="btn btn-primary"
      >-1</button>

<button 
      onClick={() => {
        setCounter(counter-counter);
        console.log(counter)}}
      type="button" 
      className="btn btn-primary"
      >Borrar</button>
    </div>
  )
}

export default App
