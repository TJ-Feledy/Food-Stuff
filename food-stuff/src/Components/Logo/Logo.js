import React from 'react'
import iconSet from "../../Icons/food-stuff-icon/selection.json";
import IcomoonReact from "icomoon-react";
import { Link } from 'react-router-dom'

import './Logo.css'

function Logo() {
    return (
        <Link className='logoLink' to='/'><div className='logoContainer'><IcomoonReact className='fsIcon' iconSet={iconSet} size={40} color='darkred' icon='food-stuff'/></div></Link>
    )
}

export default Logo