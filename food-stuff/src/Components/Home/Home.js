import { useState, useEffect, useRef } from "react";
import Recipe from "../RecipeSmall/RecipeSmall";
import axios from "axios";

function Home(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);
  const _isMounted = useRef(false);

  // GET REQUEST FOR RECIPE SEARCH
  const getRecipe = () => {
    axios({
      method: "GET",
      url:
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "128a3347eamsh5bbc03809bc5489p19fd87jsn79b91bffb34e",
        useQueryString: true,
      },
      params: {
        diet: "none",
        excludeIngredients: "none",
        intolerances: "none",
        number: "100",
        offset: "0",
        type: "",
        query: searchQuery,
      },
    })
      .then(response => {
        setQueryResults(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // HANDLE SEARCH/HANDLE CHANGE
  const handleSearch = evt => {
    setSearchQuery(evt.target.value);
  };

  // GET SEARCH RESULTS ON STATE CHANGE
  useEffect(() => {
    if (_isMounted.current) {
      console.log(`-${searchQuery}-`);
      getRecipe();
    } else {
      _isMounted.current = true;
    }
  }, [searchQuery]);

  // HANDLE SUBMIT
  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchQuery(searchQuery);
    getRecipe();
  };

  let userData = {
    id: 1,
    username: "teej387",
    firstName: "TJ",
    groceryList: [],
    groceryBag: [],
  };

  const { firstName, groceryBag, groceryList } = userData;
  return (
    <div className="Home">
      <h1 className="pageHeading">HOME</h1>
      <form className="searchForm" autoComplete="off" onSubmit={handleSubmit}>
        <input
          className="searchBar"
          id="searchBar"
          type="text"
          placeholder="Search for a recipe"
          autoComplete="off"
          onChange={handleSearch}
        />
        <label className="searchBarLabel" to="searchBar" onClick={handleSubmit}>
          <i className="fas fa-search searchIcon"></i>
        </label>
      </form>
      <section className="resultsContainer">
        <ul className="resultsList">
          {/* IF THERE IS NOTHING BEING SEARCHED: RETURN A USER'S SUMMARY
                        ELSE IF THE SEARCH RETURNS 0 RESULTS: RETURN JSX SAYING NO RESULTS...
                        ELSE RETURN A LIST OF RECIPE COMPONENTS */}
          {searchQuery.length === 0 ? (
            <div className="summaryContainer">
              <h3 className="hiUser">
                Hello {firstName}, let's see what we can find to eat.
              </h3>
              <div className="userStatsContainerWrapper">
                <div className="userStatsContainer">
                  <span className="userStat">
                    <div className="iconBox">
                      <i className="fas fa-shopping-bag bagIcon"></i>
                    </div>{" "}
                    • Grocery-Bag has {groceryBag.length} recipes in it.{" "}
                  </span>
                  <span className="userStat">
                    <div className="iconBox">
                      <i className="fas fa-scroll scrollIcon"></i>
                    </div>{" "}
                    • Grocery-List has {groceryList.length} ingredients in it.{" "}
                  </span>
                </div>
              </div>
            </div>
          ) : queryResults.length === 0 ? (
            <h5 className="noResults">no results...</h5>
          ) : (
            queryResults.map((result, index) => {
              return <Recipe result={result} key={index} />;
            })
          )}
        </ul>
      </section>
    </div>
  );
}

export default Home;
