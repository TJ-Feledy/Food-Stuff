import React, { useState, useEffect } from 'react'
import Link from 'next/link'


const HamIcon = () => {
    return (
        <div className='hamIconContainer'>
            <i className="fas fa-bars hamIcon"></i>
        </div>
    )
}

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
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className='Menu' onClick={menuClick}>
            <HamIcon />
            {
                toggleMenu ? <div>hi</div> : null
            }
        </div>
    )
}

export default Menu