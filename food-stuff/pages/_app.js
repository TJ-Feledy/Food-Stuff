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
          <Head><title>Food-Stuff</title></Head>
          {router.pathname !== '/' ? <Nav/> : null}
          <Component {...pageProps} />
        </div>
      </Provider>
    )
  }


export default withRouter(MyApp)