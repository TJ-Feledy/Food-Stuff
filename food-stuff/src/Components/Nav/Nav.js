import React from 'react'
import Link from 'next/link'

import Logo from '../Logo/Logo.js'
import Menu from './Menu'
import { withRouter } from 'next/router'


function Nav({ router }) {
    return (
        <div className='Nav'>
            <Logo />
            {router.pathname === '/register' ? <Link  href='/login'><a title='Go To Login' className='loginLink'>Login</a></Link> : 
                router.pathname === '/login' ? <Link  href='/register'><a title='Go To Register' className='loginLink'>Register</a></Link> :   
            <Menu />}
        </div>
    )
}

export default withRouter(Nav)