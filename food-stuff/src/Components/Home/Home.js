import { useState, useEffect } from 'react'
import Recipe from '../RecipeSmall/RecipeSmall'
import axios from 'axios'


function Home(props) {

    const [searchQuery, setSearchQuery] = useState('')
    const [queryResults, setQueryResults] = useState(null)

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
            "number":"10",
            "offset":"0",
            "type":"main course",
            "query":searchQuery
            }
            })
            .then((response)=>{
                console.log(response.data.results)
                setQueryResults(response.data.results)
            })
            .catch((error)=>{
              console.log(error)
            })
    }

    // HANDLE SEARCH/HANDLE CHANGE
    const handleSearch = (evt) => {
        setSearchQuery(evt.target.value)
        getRecipe()
    }

    // HANDLE SUBMIT
    const handleSubmit = (evt) => {
        evt.preventDefault()
        setSearchQuery(searchQuery)
        getRecipe()
    }

    return (
        <div className='Home'>
            <h1 className='pageHeading'>HOME</h1>
            <form className='searchForm' autoComplete='off' onSubmit={handleSubmit} >
                <input className='searchBar' id='searchBar' type='text' placeholder='Search for a recipe' autoComplete='off' onChange={handleSearch} />
                <label className='searchBarLabel' htmlFor='searchBar' onClick={handleSubmit} ><i className="fas fa-search searchIcon"></i></label>
            </form>
            <section className='resultsContainer'>
                <ul className='resultsList'>
                    {
                        queryResults === null ? null :
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