import   React, { useContext, useState  } from 'react';
import { StarWarsContext }                from '../App';
import   Container                        from '../components/container';
import { List }                           from './Main/styles.js';
import { Link, useHistory }               from 'react-router-dom';

const PeopleList = () => {

    const { people }                = useContext(StarWarsContext)
    let history                     = useHistory();
    let home                        = useHistory();
    const [GenderSearch, setGender] = useState();
    const [nameSearch, setname]     = useState("");

    function handleClick() {
      home.push("/");
    }

  return (
    <section>
      <Container>
        <h1>Personagens</h1>

        <button type="button" onClick={handleClick}>Home</button>

        <button type="button" onClick={history.goBack}>Voltar</button>

        <div>
          <label htmlFor="people-name-filter">Filtrar por Nome:</label>
          <input
            id="people-name-filter"
            type="text"
            placeholder="Nome..."
            value={nameSearch}
            onChange={e => setname(e.target.value)}
          />

          <label htmlFor="people-gendet-filter">Gênero:</label>
          <select
            id="people-gendet-filter"
            value={GenderSearch}
            onChange={e => setGender(e.target.value)}>

            <option value="">Selecione Gênero...</option>
              {Object.keys(
                Object.fromEntries(
                Object.values(people || {} ).map(people => [people.gender,true])))
                .map(gender => (<option key={gender}>{gender}</option>))
              }
          </select>
        </div>

        <List>
          { Object.values(people || {}).filter(people =>
            people.name.toLowerCase().includes(nameSearch.toLowerCase())
            )
            .filter(people => !GenderSearch || (people.gender) === GenderSearch
            )
            .map( people => (
            <li key={people.id}>
              <Link to={`/people/${people.id}`}> Nome:{people.name}</Link>
              <p> Genero:{people.gender}</p>
            </li>))
          }
        </List>
      </Container>
    </section>
  )
}
export default PeopleList
