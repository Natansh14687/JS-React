import { useState } from 'react'
import './App.css'
import Card from './assets/components/card'

function App() {
  const [count, setCount] = useState(0)
  const obj = {
    username : "Natansh",
    age : 21
  }
  const arr = [1,2,3,4];
  return (
    <>
      <h1 className='bg-green-500 rounded p-2 text-black mb-4'>Tailwind and React</h1>
      <Card username="Natansh" btnText="visit me" otherObj = {obj} />
      <Card username="Dushyant" btnText='click me' otherArray = {arr}/>
    </>
  )
}

export default App
