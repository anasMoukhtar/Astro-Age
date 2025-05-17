import './App.css'
import { useState } from 'react'
import Planets from './components/Planets/Planets'
const App = ()=>{
const [planetsData , setPlanetsData] = useState([
        { id: 'mercury', name: 'Mercury', earthDays:88, color: '#B4B4B4', size: 0.38 },
        { id: 'venus', name: 'Venus', earthDays: 225, color: '#E6C229', size: 0.95 },
        { id: 'earth', name: 'Earth', earthDays: 365.25, color: '#6B93D6', size: 1 },
        { id: 'mars', name: 'Mars', earthDays: 687, color: '#E27B58', size: 0.53 },
        { id: 'jupiter', name: 'Jupiter', earthDays: 4333 , color: '#E3DCCB', size: 11.2 },
        { id: 'saturn', name: 'Saturn', earthDays: 10759, color: '#F5E4B2', size: 9.45, hasRings: true },
        { id: 'uranus', name: 'Uranus', earthDays: 30687, color: '#D1E7E7', size: 4.01 },
        { id: 'neptune', name: 'Neptune', earthDays: 60190, color: '#5B5DDF', size: 3.88 },
    ])
const [age , setAge] = useState(0)
const [ageAtPlanet , setAgeAtPlanet] = useState(null)
const [planet , setPlanet] = useState(null)
const ageCalculateor = (planet)=>{
  if(!age){
    alert("Please enter your age")
    return
  }
  if(!planet){
    alert("Please select a planet")
    return
  }
  planetsData.forEach((planetData , index)=>{
    if(planetData.id === planet){
      console.log("result : ",age * planetData.earthDays)
      console.log("planetData.earthDays : ",planetData.earthDays)
      const result = parseFloat((age*365.25)/ planetData.earthDays).toFixed(2)
      setAgeAtPlanet(result)
    }

  })
}

return (
  <div>
    <div className="get_age">
      <div style={{display:"flex" , gap:"1rem"}}>
      <input type="number" placeholder='enter you age eg..25' id="age" onChange={(e)=>setAge(Number(e.target.value))}/>
      <button className='calculatebtn' onClick={()=>ageCalculateor(planet)}>Calculate</button>
      </div>
      {ageAtPlanet && <p className='ageAtPlanet-text'>your age at {planet} is {ageAtPlanet} years</p>}
    </div>
    <label>Select a planet</label>
    <Planets setPlanet={setPlanet} planetsData = {planetsData}/>
  </div>
)
}
export default App