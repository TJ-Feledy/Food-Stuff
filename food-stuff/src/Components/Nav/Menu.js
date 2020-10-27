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
            <Link href='/home'><a title='Home' className='menuItem'>Home</a></Link>
            <Link href='#'><a title='Grocery Bag' className='menuItem'>Grocery-Bag</a></Link>
            <Link href='#'><a title='Grocery List' className='menuItem'>Grocery-List</a></Link>
            <Link href='/'><a title='Log Out' className='menuItem'>Log Out</a></Link>
        </div>
    )
}

const Menu = (props) => {
    const [ toggleMenu, setToggleMenu ] = useState(false)
    
    useEffect(() => {
        const menu = document.getElementById('Menu')
        document.addEventListener('click', evt => {
            const notClicked = !menu.contains(evt.target)
            notClicked && setToggleMenu(false)
        })
    })

    const menuClick = (evt) => {
        setToggleMenu(!toggleMenu)
    }


    return (
        <div id='Menu' className='Menu' onClick={menuClick}>
            <HamIcon clicked={toggleMenu} />
            {
                toggleMenu ? 
                (<div className='dropMenu'>
                    <ClickedMenu />
                </div>)
                : null
            }
        </div>
    )
}

export default Menu