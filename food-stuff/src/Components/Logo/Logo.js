import React from 'react'
import iconSet from "../../Icons/food-stuff-icon/selection.json";
import IcomoonReact from "icomoon-react";

import './Logo.css'

function Logo() {
    return (
        <div className='logoContainer'><IcomoonReact className='fsIcon' iconSet={iconSet} size={40} color='darkred' icon='food-stuff'/></div>
    )
}

export default Logo