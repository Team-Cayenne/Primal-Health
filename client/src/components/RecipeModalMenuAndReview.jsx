import React, {useEffect, useState} from 'react'
import NutritionalInfoModalMenuAndReview from './NutritionalInfoModalMenuAndReview.jsx';
import axios from 'axios';
import Styled from 'styled-components'

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
      {/* <div className="Title">{props.recipeTitle}</div> */}
      {/* <img src={props.image} width='170' height='150'/> */}
      {/* <div dangerouslySetInnerHTML={{__html: props.recipe.images}} /> */}
      {/* {props.recipe.results&&props.recipe.results.length&&props.recipe.results[0].steps.map((step, i) => { */}
        {/* // console.log("STEP", step) */}
        {/* return <div> {step.number},  {step.step}</div> */}
      {/* })} */}
      <RecipeCard>
      <img src={props.recipe.images?.url} width='650' height='800'/>
      <button onClick={(()=>props.setOnClose(false))}>Close</button>
      // <button onClick={(()=>handleNutritional(props.id))}>Nutritional</button>
      <NutritionalInfoModalMenuAndReview nutrition={nutrition} closeNutModal={closeNutModal}setCloseNutModal={setCloseNutModal}/>
      </RecipeCard>
    </div>
  )
}

const RecipeCard = Styled.div`
  padding-right: 50px;
  height:825px;
  width: 675px;
`

export default RecipeModalMenuAndReview