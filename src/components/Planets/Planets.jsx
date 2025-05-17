import { useEffect } from 'react';
import './Planets.css';

const Planets = ({ setPlanet , planetsData }) => {
    useEffect(() => {
        // Add animation delay to each planet
        const planets = document.querySelectorAll('.planet');
        planets.forEach((planet, index) => {
            planet.style.animationDelay = `${index * 0.5}s`;
        });
    }, []);

    const handlePlanetClick = (planet) => {
        try{
            if (setPlanet) setPlanet(planet.id);
        }
        catch(err){
            console.log(err)
        }
    };

    return (
        <div className="planets-container">
            <div className="planets">
                {planetsData.map((planet, index) => (
                    <div 
                        key={planet.id} 
                        className="planet-wrapper"
                        onClick={() => handlePlanetClick(planet)}
                        style={{
                            '--planet-index': index,
                            '--total-planets': planetsData.length
                        }}
                    >
                        <div 
                            className={`planet ${planet.id}`}
                            style={{
                                '--planet-size': `${planet.size * 15}px`,
                                '--planet-color': planet.color,
                            }}
                        >
                            {planet.hasRings && <div className="rings"></div>}
                            <span className="planet-name">{planet.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Planets;