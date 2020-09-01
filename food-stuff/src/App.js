import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'

import Nav from './Components/Nav/Nav.js'
import LandingPage from './Components/LandingPage/LandingPage.js'
import Register from './Components/Register/Register.js'

function App({location}, props) {
  console.log(window.location.pathname, ' props ', props)
  return (
    <div className="App">
      {window.location.pathname !== '/' ? <Nav/> : null}
      <section className='routeSection'>
        <Switch location={location}>
          <Route exact path='/' render={props => <LandingPage {...props} />}/>
          <Route path='/register' render={props => <Register {...props} />}/>
        </Switch>
      </section>
    </div>
  );
}

export default withRouter(App);
