import   React, { useContext } from 'react';
import  Spinner                from '../../img/spiner.gif';
import   StormTroper           from '../../img/StormTroper.jpg';
import { Link }                from 'react-router-dom';
import   Container             from '../../components/container';
import { List }                from './styles.js';
import { StarWarsContext }     from '../../App';

const Main = () => {
  const { setupComplete } = useContext(StarWarsContext)
  return (
    <Container>
      <h1>
        <img src={StormTroper} alt=""/>
        Star Wars Universe
      </h1>

      { setupComplete ? (
          <List>
          <li><Link to="/list/planets">Listar Planetas</Link></li>
          <li><Link to="/list/people">Listar Personagens</Link></li>
          <li><Link to="/list/films">Listar Filmes</Link></li>
        </List>
        ) : (
          <h1>Preparando Salto no hiperespaço

            <img src={Spinner} alt=""/>
          </h1>
      )}

    </Container>
  );
}
export default Main
