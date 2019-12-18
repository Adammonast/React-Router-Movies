import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
import { Route, Link, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
    <Switch>
      <Route exact path="/" component={MovieList}/>
      <Route path="/movies/:id" component={Movie}/>
    </Switch>
    </div>
  );
};

export default App;

