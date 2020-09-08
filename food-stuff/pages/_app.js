import '../scss/style.scss'

import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import Nav from '../src/Components/Nav/Nav.js'
import { withRouter } from 'next/router'
import Head from 'next/head'


function MyApp({ Component, pageProps, router }) {
    const store = useStore(pageProps.initialReduxState)

    return (
      <Provider store={store}>
        <div className='App'>
          <Head>
            <title>Food-Stuff</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" type="image/x-icon" href="favicon16.ico" />
            <script src="https://kit.fontawesome.com/db4da5fc40.js" crossorigin="anonymous" SameSite='None' Secure></script>
          </Head>
          {router.pathname !== '/' ? <Nav/> : null}
          <Component {...pageProps} />
        </div>
      </Provider>
    )
  }


export default withRouter(MyApp)