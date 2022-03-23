import React from 'react'


const RecipeModalMenuAndReview= (props) =>{
  console.log('PROPS FROM RECIPE', props)
  if (props.close === false) {
    return null
  }
  return (

    <div>
      RecipeModalMenuAndReview
      <div className="Title">{props.testName}</div>
      <img src={props.testImage}/>>
      <div classname='IngredientImage'>{props.recipe.images}</div>
      {props.recipe.results[0].steps.map((step, i) => {
        return <div> {step.number},  {step.step}</div>
      })}
      <button onClick={(()=>props.setOnClose(false))}>Back</button>
    </div>
  )
}

export default RecipeModalMenuAndReview