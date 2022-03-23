import  React                          from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import  Main                           from './pages/Main';
import  PlanetsList                    from './pages/PlanetsList';
import  PlanetDetails                  from './pages/PlanetDetails';
import  PeopleList                     from './pages/PeopleList';
import  PeopleDetails                  from './pages/PeopleDetails';
import  FilmList                       from './pages/FilmList';
import  FilmDetails                    from './pages/FilmDetails';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact      component={Main}         />
        <Route path="/list/planets"component={PlanetsList}  />
        <Route path="/planets/:id" component={PlanetDetails}/>
        <Route path="/list/people" component={PeopleList}   />
        <Route path="/people/:id"  component={PeopleDetails}/>
        <Route path="/list/films"  component={FilmList}     />
        <Route path="/films/:id"   component={FilmDetails}  />
      </Switch>
    </BrowserRouter>
  );
}
