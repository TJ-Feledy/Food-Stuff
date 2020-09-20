import React, { useState, useEffect } from 'react'
import Link from 'next/link'


const ClickedMenu = (props) => {
    const [ userData, setUserData ] = useState({})

    return (
        <div className='ClickedMenu'>

        </div>
    )
}

const Menu = (props) => {
    const [ toggleMenu, setToggleMenu ] = useState(false)

    const menuClick = (evt) => {
        console.log('clicked', toggleMenu)
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className='Menu' onClick={menuClick}>
            <div>menu</div>
            {
                toggleMenu ? <div>hi</div> : null
            }
        </div>
    )
}

export default Menu