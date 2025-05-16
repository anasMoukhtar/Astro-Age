import './App.css'
import { useState } from 'react'
import Planets from './components/Planets'
const App = ()=>{
const [age , setAge] = useState(0)
const [planet , setPlanet] = useState('Earth')
return (
  <div>
    <div className="get_age">
      <label htmlFor="age">Age</label>
      <input type="number" id="age" onChange={(e)=>setAge(e.target.value)}/>
    </div>
    <label>Select a planet</label>
    <Planets setPlanet={setPlanet}/>
    <div className="age">
      {age && <p>Your Age at {planet} is {age}</p>}
    </div>
  </div>
)
}
export default App