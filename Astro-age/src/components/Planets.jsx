import './Planets.css'
const Planets = ({setPlanet})=>{
    const Planets = [
        {name: 'Mercury', yeartoEarth: 0.24},
        {name: 'Venus', yeartoEarth: 0.62},
        {name: 'Earth', yeartoEarth: 1},
        {name: 'Mars', yeartoEarth: 1.88},
        {name: 'Jupiter', yeartoEarth: 11.86},
        {name: 'Saturn', yeartoEarth: 29.44},
        {name: 'Uranus', yeartoEarth: 84.01},
        {name: 'Neptune', yeartoEarth: 164.79},
    ]
    const calculateAge = (year , month , day)=>{
        const date = new Date(year,month,day)
        const currentDate = new Date()
        const Age = currentDate - date
        console.log(Age)
    }
    calculateAge(2007,6,1)
return (
    <div>
        
        <div className="orbits" hidden>
            <div className="orbit"></div>
            <div className="orbit"></div>
            <div className="orbit"></div>
            <div className="orbit"></div>
            <div className="orbit"></div>
            <div className="orbit"></div>
            <div className="orbit"></div>
            <div className="orbit"></div>
        </div>
        <div className="planets">
        {Planets.map((planet)=>{
            return (
                <div key={planet.name} onClick={()=>setPlanet(planet.name)} className={planet.name.toLowerCase()}>
                    
                </div>
            )
        })}
        </div>
        <div className='sphere'>
            <div className="face up"></div>
            <div className="face down"></div>
            <div className="face left"></div>
            <div className="face right"></div>
            <div className="face front"></div>
            <div className="face back"></div>
        </div>
    </div>
)
}
export default Planets