import React from 'react'
import iconSet from "../../Icons/food-stuff-icon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import './LandingPage.css'

function LandingPage(props) {
    console.log(iconList(iconSet))
    return (
        <div className='LandingPage'>
            <div className='fsIconContainer'><IcomoonReact className='fsIcon' iconSet={iconSet} size={150} icon='food-stuff'/></div>
            <span className='intro'>A place to conveniently find, price, and list all of your food stuff.</span>
        </div>
    )
}

export default LandingPage