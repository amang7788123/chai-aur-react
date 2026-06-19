import { useState } from 'react' //here we have imported usestate as hook in the react.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// why do we need hooks, we need hooks taaki jo hmne backend me changes kiye h wo inn hooks ki madad se hamaare frontend k saath integrate ho ske.
//Hooks are React features that allow functional components to use state, lifecycle behavior, side effects, and other React capabilities without needing class components. They were introduced to reduce boilerplate, improve code reuse, and simplify stateful component logic.
function App() {

  const [counter, setCounter]  = useState(15) //here counter can be another name and setcounter is just a naming convention for our ease.

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <> //this opening and closing tags are library rules to use so make sure to use it in the return function only in react, with
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue} //ye onlcick yaha pr react DOM ka ek attribute h jiski madad se hum manipulation ya fer modifiation kr skte h.
      >remove value {counter}</button>
      <p>footer: {counter}</p> // ye jo counter hai braces ke andar uska purpose h counter variable ko print krna bss,
    </>
  )
}

export default App
