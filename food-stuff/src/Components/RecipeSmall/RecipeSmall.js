


function RecipeSmall(props) {
    console.log(props)
    return (
        <div className='RecipeSmall'>
            <h4 className='resultTitle'>{props.result.title}</h4>
            <div className='resultImgContainer'>
                <img className='resultImg' src={`https://spoonacular.com/recipeImages/${props.result.id}-312x231.jpg`} alt={'food'} />
            </div>
        </div>
    )
}

export default RecipeSmall