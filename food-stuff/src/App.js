import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import LandingPage from './Components/LandingPage/LandingPage.js'
import Register from './Components/Register/Register.js'

function App({location}, props) {
  console.log(location, ' props ', props)
  return (
    <div className="App">
      <section className='routeSection'>
        <Switch location={location}>
          <Route path='/' render={props => <LandingPage {...props} />}/>
          <Route path='/register' render={props => <Register {...props} />}/>
        </Switch>
      </section>
    </div>
  );
}

export default App;
