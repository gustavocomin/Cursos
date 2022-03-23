import   React, { useContext, useState } from 'react';
import { StarWarsContext }               from '../App';
import   Container                       from '../components/container';
import { List }                          from './Main/styles.js';
import { Link, useHistory }              from 'react-router-dom';

const PlanetsList = () => {

    const {planets ={} }              = useContext(StarWarsContext)
    let    history                    = useHistory();
    let    home                       = useHistory();
    const [nameSearch,    setname]    = useState("");
    const [popSearch,     setpop]     = useState();
    const [ClimateSearch, setclimate] = useState("");

    function handleClick() {
      home.push("/");
    }

  return (
    <section>
      <Container>
        <h1>PLANETAS</h1>

        <button type="button" onClick={handleClick}>Home</button>

        <button type="button" onClick={history.goBack}>Voltar</button>

        <div>
          <label htmlFor="planet-name-filter">Nome:</label>
          <input
            id="planet-name-filter"
            type="text"
            placeholder="Planeta..."
            value={nameSearch}
            onChange={e => setname(e.target.value)}
          />

          <label htmlFor="planet-pop-filter">Populção:</label>
          <input
            id="planet-pop-filter"
            type="number"
            placeholder="100000..."
            value={popSearch}
            onChange={e => setpop(e.target.value)}
          />

          <label htmlFor="planet-climate-filter">Clima:</label>
          <input
            id="planet-climate-filter"
            type="text"
            placeholder="Clima..."
            value={ClimateSearch}
            onChange={e => setclimate(e.target.value)}
          />
        </div>

        <List>
          { Object.values(planets || {})
            .filter(planet =>
              planet.name.toLowerCase().includes(nameSearch.toLowerCase())
            )
            .filter(planet =>
              !popSearch || planet.population >= parseFloat(popSearch)
            )
            .filter(planet =>
              planet.climate.toLowerCase().includes(ClimateSearch.toLowerCase())
            )
            .map( planet => (
              <li key={planet.id}>
                <Link to={`/planets/${planet.id}`}>Nome: {planet.name}</Link>
                <p>População: {Number(planet.population).toLocaleString()}</p>
                <p>Clima: {planet.climate}</p>
              </li>))
          }
        </List>
      </Container>
    </section>
  )
}
export default PlanetsList
