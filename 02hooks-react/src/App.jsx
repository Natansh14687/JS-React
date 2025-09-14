import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  const addValue = () => {
    console.log("value adding : ", Math.random());
    if(counter < 20){
      counter++;
      setCounter(counter);
    }
  }
  const removeValue = () => {
    console.log("value removing : ", Math.random());
    if(counter>0){
      counter--;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Natansh and React</h1>
      <div>Counter : {counter}</div><br />
      <button onClick={addValue}>Increase counter : {counter}</button><br /><br />
      <button onClick={removeValue}>Decrease counter : {counter}</button><br /><br />
      <footer>
        Counter : {counter}
      </footer>
    </>
  )
}

export default App
