


function RecipeSmall(props) {
    console.log(props)
    const { id, image, readyInMinutes, servings, title } = props.result
    return (
        <div className='RecipeSmall'>
            <h4 className='resultTitleSmall'>{title}</h4>
            <div className='resultImgContainerSmall'>
                <img className='resultImgSmall' src={`https://spoonacular.com/recipeImages/${id}-312x231.jpg`} alt={'food'} />
            </div>
            <div className='servingTimeContainerSmall'>
                <p className='makeTimeSmall'>Ready to eat in: {readyInMinutes} minutes</p>
                <span className='servingsSmall'>Makes {servings} servings.</span>
            </div>
        </div>
    )
}

export default RecipeSmall