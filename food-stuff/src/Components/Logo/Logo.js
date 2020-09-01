import React from 'react'
import iconSet from "../../Icons/food-stuff-icon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import './Logo.css'

function Logo() {
    return (
        <div className='fsIconContainer'><IcomoonReact className='fsIcon' iconSet={iconSet} size={125} color='darkred' icon='food-stuff'/></div>
    )
}

export default Logo