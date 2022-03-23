import React, {useEffect, useState} from 'react'
import NutritionalInfoModalMenuAndReview from './NutritionalInfoModalMenuAndReview.jsx';
import axios from 'axios';

const RecipeModalMenuAndReview= (props) =>{
  const [nutrition, setNutrition] = useState('')
  const [closeNutModal, setCloseNutModal] = useState(false)
  console.log('PROPS FROM RECIPE', props)
  console.log('PROPS FROM RECIPE IMAGE', props.image)
  if (props.close === false) {
    return null
  }
  const handleNutritional = async (id) => {
    setCloseNutModal(true)
    console.log('TYPE', id)
    try {
      const results = await axios.post('/nutritionalinfo', {id: id})
      setNutrition(results.data)
      console.log("results", results)
    } catch (err) {
      console.log("UNABLE TO SET NUTRITIONAL", err)
    }
  }
  console.log("render")
  return (
    <div>
      RecipeModalMenuAndReview
      <div className="Title">{props.recipeTitle}</div>
      <img src={props.Image} width='170' height='150'/>
      <div dangerouslySetInnerHTML={{__html: props.recipe.images}} />
      {props.recipe.results&&props.recipe.results.length&&props.recipe.results[0].steps.map((step, i) => {
        // console.log("STEP", step)
        return <div> {step.number},  {step.step}</div>
      })}
      <button onClick={(()=>props.setOnClose(false))}>Close</button>
      // <button onClick={(()=>handleNutritional(props.id))}>Nutritional</button>
      <NutritionalInfoModalMenuAndReview nutrition={nutrition} closeNutModal={closeNutModal}setCloseNutModal={setCloseNutModal}/>
    </div>
  )
}

export default RecipeModalMenuAndReview