import   React, { useContext }         from 'react';
import { StarWarsContext }             from '../App';
import   Container                     from '../components/container';
import { DefinitionList }              from './Main/styles.js';
import { Link, useParams, useHistory } from 'react-router-dom';

const PeopleDetails = () => {

  const { people = {}, films = {} } = useContext(StarWarsContext)
  let home     = useHistory();
  let history  = useHistory();
  const { id } = useParams()
  const person = people[id] || {}


  function handleClick() {
      home.push("/");
    }

  return (
    <Container>
      <h1>{ person.name || 'Não carregado'}</h1>

      <button type="button" onClick={handleClick}>Home</button>

      <button type="button" onClick={history.goBack}>Voltar</button>

      <DefinitionList>

        <dt>Ano de Nascimento</dt>
        <dd>{person.birth_year}</dd>

        <dt>Gênero</dt>
        <dd>{person.gender}</dd>

        <dt>Filmes</dt>
        <dd>
          <ul>
            { (person.films || []).map( filmId => (
              <li key={filmId}>
                <Link to={`/films/${filmId}`}>{films[filmId].title}</Link>
              </li>
            ))}
          </ul>
        </dd>
        </DefinitionList>
    </Container>
  )
}

export default PeopleDetails
