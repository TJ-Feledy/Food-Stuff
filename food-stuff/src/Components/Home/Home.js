import { useState, useEffect, useRef } from 'react'
import Recipe from '../RecipeSmall/RecipeSmall'
import axios from 'axios'


function Home(props) {

    const [searchQuery, setSearchQuery] = useState('')
    const [queryResults, setQueryResults] = useState(null)
    const _isMounted = useRef(false)

    // GET REQUEST FOR RECIPE SEARCH
    const getRecipe = () => {
        axios({
            "method":"GET",
            "url":"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key":"128a3347eamsh5bbc03809bc5489p19fd87jsn79b91bffb34e",
            "useQueryString":true
            },"params":{
            "diet":"none",
            "excludeIngredients":"none",
            "intolerances":"none",
            "number":"100",
            "offset":"0",
            "type":"",
            "query":searchQuery
            }
            })
            .then((response)=>{
                setQueryResults(response.data.results)
            })
            .catch((error)=>{
              console.log(error)
            })
    }

    // HANDLE SEARCH/HANDLE CHANGE
    const handleSearch = (evt) => {
        setSearchQuery(evt.target.value)
    }

    // GET SEARCH RESULTS ON STATE CHANGE
    useEffect(() => {
        if (_isMounted.current) {
            console.log(`-${searchQuery}-`)
            getRecipe()
        }else {
            _isMounted.current = true
        }
    }, [searchQuery])

    // HANDLE SUBMIT
    const handleSubmit = (evt) => {
        evt.preventDefault()
        setSearchQuery(searchQuery)
        getRecipe()
    }

    let userData = {
        id: 1,
        username: 'TJ',
        groceryList: [],
        groceryBag: []
    }

    return (
        <div className='Home'>
            <h1 className='pageHeading'>HOME</h1>
            <form className='searchForm' autoComplete='off' onSubmit={handleSubmit} >
                <input className='searchBar' id='searchBar' type='text' placeholder='Search for a recipe' autoComplete='off' onChange={handleSearch} />
                <label className='searchBarLabel' to='searchBar' onClick={handleSubmit} ><i className="fas fa-search searchIcon"></i></label>
            </form>
            <section className='resultsContainer'>
                <ul className='resultsList'>
                    {
                        searchQuery.length === 0 ? 
                            <h2 className='whatSoundsGood'></h2>
                        :
                        queryResults.length === 0 ? <h5 className='noResults'>no results...</h5>:
                        queryResults.map((result, index) => {
                            return <Recipe result={result} key={index} />
                        })
                    }
                </ul>
            </section>
        </div>
    )
}

export default Home