import React, { useState, useEffect } from 'react'
import Link from 'next/link'


const HamIcon = (props) => {

    return (
        <div className={props.clicked ? 'hamIconContainerClicked clickable' : 'hamIconContainer clickable'}>
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
            <HamIcon clicked={toggleMenu} />
            {
                toggleMenu ? 
                (<div className='dropMenu'>
                    <Link href='/home'><a title='Home' className='menuItem'>Home</a></Link>
                    <Link href='#'><a title='Grocery Bag' className='menuItem'>Grocery-Bag</a></Link>
                    <Link href='#'><a title='Grocery List' className='menuItem'>Grocery-List</a></Link>
                    <Link href='/'><a title='Log Out' className='menuItem'>Log Out</a></Link>
                </div>)
                : null
            }
        </div>
    )
}

export default Menu