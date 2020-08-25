import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import LandingPage from './Components/LandingPage/LandingPage.js'

function App({location}, props) {
  console.log(location, ' props ', props)
  return (
    <div className="App">
      <section className='routeSection'>
        <Switch location={location}>
          <Route path='/' render={props => <LandingPage {...props} />}/>
        </Switch>
      </section>
    </div>
  );
}

export default App;
