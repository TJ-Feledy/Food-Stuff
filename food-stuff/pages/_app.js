import '../scss/style.scss'

import Nav from '../src/Components/Nav/Nav.js'
import { withRouter } from 'next/router'
import Head from 'next/head'


function MyApp({ Component, pageProps, router }) {
    console.log(router.pathname, 'path!!!')
    return (
      <div className='App'>
        <Head><title>Food-Stuff</title></Head>
        {router.pathname !== '/' ? <Nav/> : null}
        <Component {...pageProps} />
      </div>
    )
  }


export default withRouter(MyApp)