import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import Beers from './components/Beers';
import OneBeer from './components/OneBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
			<HomePage />
			<Switch>
				<Route exact path="/beers" component={Beers} />
				<Route exact path="/beers/:beerId" render={(props) => <OneBeer {...props} />} />
				<Route exact path="/random-beer" render={() => <RandomBeer />} />
				<Route exact path="/new-beer" render={() => <NewBeer />} />
			</Switch>
      
    </div>
  );
}

export default App;
