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
    <ModalContainer>
      <NutritionalInfoModalMenuAndReview nutrition={nutrition} closeNutModal={closeNutModal}setCloseNutModal={setCloseNutModal}/>
      <RecipeCard>
      <img src={props.recipe.images?.url} width='603' height='auto'/>

      <ButtonContainer>
        <CloseButton onClick={(()=>props.setOnClose(false))}>
          Close
        </CloseButton>
        <NutritionalButton onClick={(()=>handleNutritional(props.id))}>Nutritional Info</NutritionalButton>
      </ButtonContainer>
      </RecipeCard>
    </ModalContainer>
  )
}

const ModalContainer = Styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: white;
`
const RecipeCard = Styled.div`
  height:675px;
  width: 603px;
  position:fixed;
  border: 2px solid #264654;
  border-radius: 11px
  margin: auto;
  overflow: auto;
  align-items: center;
  background-color: white;
`
const ButtonContainer = Styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: white;
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