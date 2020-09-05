import '../scss/style.scss'

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