import React from 'react'
import iconSet from "../../Icons/food-stuff-icon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import './LandingPage.css'

function LandingPage(props) {
    console.log(iconList(iconSet))
    return (
        <div className='LandingPage'>
            <h3 className='intro'>A place to conveniently create a list of, find, and price all of your food stuff.</h3>
            <div className='fsIconContainer'><IcomoonReact className='fsIcon' iconSet={iconSet} size={125} color='darkred' icon='food-stuff'/></div>
        </div>
    )
}

export default LandingPage