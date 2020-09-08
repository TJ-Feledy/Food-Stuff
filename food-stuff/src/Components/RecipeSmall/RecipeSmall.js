


function RecipeSmall(props) {
    console.log(props)
    return (
        <div className='RecipeSmall'>
            <h3 className='resultTitle'>{props.result.title}</h3>
        </div>
    )
}

export default RecipeSmall