import   React, { useContext, useState } from 'react';
import { StarWarsContext }               from '../App';
import   Container                       from '../components/container';
import { List }                          from './Main/styles.js';
import { Link, useHistory }              from 'react-router-dom';

const FilmList = () => {

  const {films }                     = useContext(StarWarsContext)
  let history                        = useHistory();
  let home                           = useHistory();
  const [titleSearch, setTitle]      = useState("");
  const [releaseYearSearch, setYear] = useState();

  function handleClick() {
    home.push("/");
  }
  return (
    <section>
      <Container>
        <h1>Filmes</h1>

        <button type="button" onClick={handleClick}>Home</button>

        <button type="button" onClick={history.goBack}>Voltar</button>

        <div>
          <label htmlFor="film-title-filter">Filtrar por Título:</label>
          <input
            id="film-title-filter"
            type="text"
            placeholder="Título do filme..."
            value={titleSearch}
            onChange={e => setTitle(e.target.value)}
          />

          <label htmlFor="film-release-year-filter">Ano de Lançamento:</label>
          <select
            id="film-release-year-filter"
            value={releaseYearSearch}
            onChange={e => setYear(e.target.value)}>
              <option value="">Selecione um ano...</option>
                {Object.values(films || {})
                .map(film => new Date(film.release_date).getFullYear())
                .map(year => (
              <option key={year}>{year}</option>
              ))}
          </select>
        </div>

        <List>
          { Object.values(films || {}) .filter(film =>
            film.title.toLowerCase().includes(titleSearch.toLowerCase())
            )
            .filter(
              film =>
                !releaseYearSearch ||
                new Date(film.release_date).getFullYear().toString() ===
                  releaseYearSearch
            ).map( film => (
              <li key={film.id}>
              <Link to={`/films/${film.id}`}>{film.title}</Link>
              <p>Lançamento: {new Date(film.release_date).toLocaleDateString()}</p>
              </li>))
          }
        </List>
      </Container>
    </section>
  )
}
export default FilmList
