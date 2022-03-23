import styled from 'styled-components';
import Starwars from '../../img/starwars.png'

const Container = styled.div`
  max-width: 700px;
  background-image: url({Starwars});
  border-radius: 4px;
  border: 1px solid #eef520;
  padding: 30px;
  margin: 80px auto;
  text-align: center;

  div{
    padding-top: 10px;
  }

  h1{
    position: relative;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #eef520;
    text-transform: uppercase;
  }

  label{
    text-align: center;
    padding: 10px 5px;
    color: #eef520;

    }

  input{
    text-align: center;
    width: 150px;
    color: #eef520;
    background: #000;
    border: 1px solid #eef520;
    border-radius: 4px;
    padding: 2px 6px;
  }

  option{
    text-transform: capitalize;
  }

  select{
    position: inline ;
    text-align: center;
    width: 150px;
    color: #eef520;
    background: #000;
    border: 1px solid #eef520;
    border-radius: 4px;
    padding: 3px 3px;
  }

  img{
    margin-right: 20px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid #000;
  }

  a{
    text-decoration: none;
    text-transform: capitalize;
    color: #eee;
    &:hover {
        color: #0f40d1;
      }
  }

  button{
    background-image: url(${require(`../../img/starwars.png`)});
    margin-left: 20px;
    border: 1px solid #eef520;
    padding: 3px;
    color: #eef520;
    border-radius: 4px;
    width: calc(50% - 180px);
    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
  }
`;

export default Container;
