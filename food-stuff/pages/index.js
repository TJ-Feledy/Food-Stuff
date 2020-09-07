import iconSet from '../src/Icons/food-stuff-icon/selection.json';
import IcomoonReact, { iconList } from "icomoon-react";
import Link from 'next/link'


function LandingPage(props) {
    return (
        <div className='LandingPage'>
            <h3 className='intro'>A place to conveniently find, organize, and create a list of all of your food stuff.</h3>
            <div className='fsIconContainer'><IcomoonReact className='fsIcon' iconSet={iconSet} size={125} color='darkred' icon='food-stuff'/></div>
            <div className='landingNavContainer'>
                <h4 className='joinUs'>It's time to make a grocery list like a boss!</h4>
                <div className='landingLinksContainer'>
                    <Link href='/register'><a className='registerLink' title='Register'>Register</a></Link>
                    <h4 className='or'>- or -</h4>
                    <Link href='/login'><a className='registerLink' title='Login'>Login</a></Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage