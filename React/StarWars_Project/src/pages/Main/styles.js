import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;

  li{
    border: 1px solid #eef520;
    border-radius: 4px;
    text-align: center;
    width: 200px;

    a{
      display: inline-block;
      padding: 13px 18px;
      width: 100%;
      color: #eef520;
      text-decoration: none;

      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }

    p{
      display: inline-block;
      padding: 13px 18px;
      width: 100%;
      color: #eef520;
      text-transform: capitalize;
    }
  }
`;

export const DefinitionList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  text-align: left;

  dt {
    font-weight: bold;
    width: 140px;
    margin-right: 10px;
    text-align: right;
    color: #eef520;
    &:after { content: ':' }
  }
  dd {
    width: calc(50% - 150px);
    margin-bottom: 15px;
    text-transform: capitalize;
  }
  ul {
    margin-left: 10px;
  }
`;
