import { Route, Switch, withRouter } from 'react-router-dom'

import Nav from '../src/Components/Nav/Nav.js'
import LandingPage from '../src/Components/LandingPage/LandingPage.js'
import Register from '../src/Components/Register/Register.js'
import Login from '../src/Components/Login/Login.js'

function App({location}, props) {
  console.log(window.location.pathname, ' props ', props)
  return (
    <div className="App">
      {window.location.pathname !== '/' ? <Nav/> : null}
      <section className='routeSection'>
        <Switch location={location}>
          <Route exact path='/' render={props => <LandingPage {...props} />}/>
          <Route path='/register' render={props => <Register {...props} />}/>
          <Route path='/login' render={props => <Login {...props} />}/>
        </Switch>
      </section>
    </div>
  );
}

export default withRouter(App);