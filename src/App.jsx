import { useState, useEffect } from "react";
import { StarshipCard } from "./components/StarshipCard";
import { getAllStarships } from "./services/sw-api";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getAllStarships();
        setStarships(data.results); // SWAPI returns results in an object with a 'results' array
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };
    fetchStarships();
  }, []);

  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>
      <div className="starship-grid">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
}

export default App;