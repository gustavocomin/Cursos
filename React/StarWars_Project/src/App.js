import React, { useState, useEffect } from "react";
import Routes                         from "./routes";
import GlobalStyle                    from "./Styles/global";
import setupData                      from './services/request'


export const StarWarsContext = React.createContext({
  people:        null,
  planets:       null,
  films:         null,
  setupComplete: false
});

function App() {
  const [store, setStore] = useState({});

  useEffect(() => {setupData().then(setStore);}, []);
  return (
    <StarWarsContext.Provider value={store}>
      <Routes />
      <GlobalStyle />
    </StarWarsContext.Provider>
  );
}

export default App;
