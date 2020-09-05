import React from 'react'
import iconSet from "../../Icons/food-stuff-icon/selection.json";
import IcomoonReact from "icomoon-react";
import Link from 'next/link'

// import LogoStyle from './Logo.css'

function Logo() {
    return (
        <>
            <Link className='logoLink' href='/'>
                <a title='Food-Stuff' className='logoContainer'>
                    <IcomoonReact className='fsIcon' iconSet={iconSet} size={40} color='darkred' icon='food-stuff'/>
                </a>
            </Link>
        </>
        )
}

export default Logo