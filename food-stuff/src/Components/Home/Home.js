import { useState, useEffect } from 'react'
import axios from 'axios'


function Home(props) {
    const [username, setUsername] = useState('guest')
    const [searchQuery, setSearchQuery] = useState('')
    const [queryResults, setQueryResults] = useState([])

    // GET REQUEST FOR RECIPE SEARCH
    const handleSearch = (evt) => {
        setSearchQuery(evt.target.value)
        axios({
            "method":"GET",
            "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key":"128a3347eamsh5bbc03809bc5489p19fd87jsn79b91bffb34e",
            "useQueryString":true
            },"params":{
            "number":"10",
            "query":searchQuery
            }
            })
            .then((response)=>{
                console.log(response.data)
                setQueryResults(response.data)
            })
            .catch((error)=>{
              console.log(error)
            })
    }

    return (
        <div className='Home'>
            <h1>HOME</h1>
            <form className='search'>
                <input className='searchBar' type='text' placeholder='Search for a recipe' onChange={handleSearch} />
            </form>
        </div>
    )
}

export default Home