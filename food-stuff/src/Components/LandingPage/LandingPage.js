import React from 'react'
import iconSet from "../../Icons/food-stuff-icon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { Link } from 'react-router-dom'

import './LandingPage.css'

function LandingPage(props) {
    console.log(iconList(iconSet))
    return (
        <div className='LandingPage'>
            <h3 className='intro'>A place to conveniently create a list of, find, and price all of your food stuff.</h3>
            <div className='fsIconContainer'><IcomoonReact className='fsIcon' iconSet={iconSet} size={125} color='darkred' icon='food-stuff'/></div>
            <div className='landingNavContainer'>
                <h4 className='joinUs'>It's time to make a grocery list like a boss!</h4>
                <div className='landingLinksContainer'>
                    <Link className='registerLink' to='#'>Register</Link>
                    <h4 className='or'>- or -</h4>
                    <Link className='registerLink' to='#'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage