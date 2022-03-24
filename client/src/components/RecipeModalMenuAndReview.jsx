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
      <NutritionalInfoModalMenuAndReview nutrition={nutrition} closeNutModal={closeNutModal}setCloseNutModal={setCloseNutModal}/>
      <RecipeCard>
      <img src={props.recipe.images?.url} width='603' height='676'/>

      <CloseButton onClick={(()=>props.setOnClose(false))}>
        Close
      </CloseButton>
       <NutritionalButton onClick={(()=>handleNutritional(props.id))}>Nutritional Info</NutritionalButton>
      </RecipeCard>
    </div>
  )
}

const RecipeCard = Styled.div`
  padding-right: 50px;
  height:675px;
  width: 603px;
  position:fixed;
  border-radius: 11px
  margin: auto
`
const CloseButton = Styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  background: rgba(38, 191, 0, .25);
  border-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  color: #26BF00;
  height: 50px;
  width: 130px;
  font-size: 18px;
  font-family: 'Lato';
  font-weight: semi-bold;`

  const NutritionalButton = Styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  background: rgba(38, 191, 0, .25);
  border-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  color: #26BF00;
  height: 50px;
  width: 130px;
  font-size: 18px;
  font-family: 'Lato';
  font-weight: semi-bold;`

export default RecipeModalMenuAndReview