import React from 'react'
import iconSet from "../../Icons/food-stuff-icon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import './LandingPage.css'

function LandingPage(props) {
    console.log(iconList(iconSet))
    return (
        <div className='LandingPage'>
            <div className='fsIconContainer'><IcomoonReact className='fsIcon' iconSet={iconSet} size={150} color='darkred' icon='food-stuff'/></div>
            <h3 className='intro'>A place to conveniently find, price, and list all of your food stuff.</h3>
        </div>
    )
}

export default LandingPage