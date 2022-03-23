import   React, { useContext }         from "react";
import { StarWarsContext }             from "../App";
import   Container                     from "../components/container";
import { DefinitionList }              from "./Main/styles.js";
import { Link, useParams, useHistory } from "react-router-dom";

const FilmDetails = () => {

  const { planets = {}, films = {}, people = {} } = useContext(StarWarsContext);
  let history  = useHistory();
  let home     = useHistory();
  const { id } = useParams();
  const   film = films[id] || {};


  function handleClick() {
    home.push("/");
  }

  return (
    <section>
      <Container>
        <h1>Filme: {film.title || "Não carregado"}</h1>

        <button type="button" onClick={handleClick}>Home</button>

        <button type="button" onClick={history.goBack}>Voltar</button>

        <DefinitionList>

          <dt>Episódio</dt>
          <dd>{film.episode_id}</dd>

          <dt>Ano de Lançamento</dt>
          <dd>{new Date(film.release_date).toLocaleDateString()}</dd>

          <dt>Persongens</dt>
          <dd>
            <ul>
              {(film.characters || []).map(peopleId => (
              <li key={peopleId}>
                <Link to={`/people/${peopleId}`}>{people[peopleId].name}</Link>
              </li>
              ))}
            </ul>
          </dd>

          <dt>Abertura</dt>
          <dd>{film.opening_crawl}</dd>

          <dt>Planetas</dt>
          <dd>
            <ul>
              {(film.planets || []).map(planetId => (
              <li key={planetId}>
                <Link to={`/planets/${planetId}`}>{planets[planetId].name}</Link>
              </li>
              ))}
            </ul>
          </dd>

        </DefinitionList>
      </Container>
    </section>
  );
};
export default FilmDetails;
