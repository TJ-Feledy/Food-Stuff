import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../Logo/Logo.js'

import './Nav.css'

function Nav() {
    return (
        <div className='Nav'>
            <Logo />
            {window.location.pathname === '/register' ? <Link className='loginLink' to='/login'>Login</Link> : 
                window.location.pathname === '/login' ? <Link className='loginLink' to='/register'>Register</Link> :   
            <>menu</>}
        </div>
    )
}

export default Nav