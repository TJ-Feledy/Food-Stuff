import '../src/App.css'
import '../src/index.css'
import '../src/Components/Logo/Logo.css'
import '../src/Components/LandingPage/LandingPage.css'
import '../src/Components/Login/Login.css'
import '../src/Components/Nav/Nav.css'
import '../src/Components/Register/Register.css'

import Nav from '../src/Components/Nav/Nav.js'
import { withRouter } from 'next/router'


function MyApp({ Component, pageProps, router }) {
    console.log(router.pathname, 'path!!!')
    return (
      <div className='App'>
        {router.pathname !== '/' ? <Nav/> : null}
        <Component {...pageProps} />
      </div>
    )
  }


export default withRouter(MyApp)