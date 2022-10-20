import '../../../src/index.css';
import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";



function App () {
  const [isLoggedIn] = useState(true);

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main loggedIn={isLoggedIn}/>
        </Route>
        <Route path="/movies">
          <Movies loggedIn={isLoggedIn}/>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies loggedIn={isLoggedIn}/>
        </Route>
        <Route path="/profile">
          <Profile loggedIn={isLoggedIn}/>
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
        <Route exact path="*">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
