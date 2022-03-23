import   React, { useContext }         from "react";
import { StarWarsContext }             from "../App";
import   Container                     from "../components/container";
import { DefinitionList }              from "./Main/styles.js";
import { Link, useParams, useHistory } from "react-router-dom";

const PlanetDetails = () => {

  const { planets = {}, people = {}, films = {} } = useContext(StarWarsContext);
  let home     = useHistory();
  let history  = useHistory();
  const { id } = useParams();
  const planet = planets[id] || {};


  function handleClick() {
    home.push("/");
  }

  return (
    <Container>
      <h1>Planeta {planet.name || "Não carregado"}</h1>

      <button type="button" onClick={handleClick}>Home</button>

      <button type="button" onClick={history.goBack}>Voltar</button>

      <DefinitionList>
        <dt>Período de Rotação</dt>
        <dd>{planet.rotation_period} Horas</dd>

        <dt>Período de Órbita</dt>
        <dd>{planet.orbital_period} Dias</dd>

        <dt>Diâmetro</dt>
        <dd>{Number(planet.diameter).toLocaleString()} Km</dd>

        <dt>Clima</dt>
        <dd>{planet.climate}</dd>

        <dt>Residentes</dt>
        <dd>
          <ul>
            {(planet.residents || []).map(peopleId => (
              <li key={peopleId}>
                <Link to={`/people/${peopleId}`}>{people[peopleId].name}</Link>
              </li>))
            }
          </ul>
        </dd>

        <dt>Filmes</dt>
        <dd>
          <ul>
            {(planet.films || []).map(filmId => (
              <li key={filmId}>
                <Link to={`/films/${filmId}`}>{films[filmId].title}</Link>
              </li>))
            }
          </ul>
        </dd>

        <dt>População</dt>
        <dd>{Number(planet.population).toLocaleString()}</dd>

      </DefinitionList>
    </Container>
  );
};
export default PlanetDetails;
