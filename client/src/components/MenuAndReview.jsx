import React, {useContext, useState} from 'react';
import { AppContext } from "../context.js";
import Masthead from '../shared/Masthead.jsx';
import RecipeModalMenuAndReview from './RecipeModalMenuAndReview.jsx';
import axios from 'axios'
import Styled from 'styled-components'

const MenuAndReview= () =>{
  const {meals} = useContext(AppContext);
  const [id, setId] = useState(0);
  const [recipe, setRecipe] = useState([]);
  const [recipeTitle, setRecipeTitle] = useState("")
  const [image, setImage] = useState("")
  const [close, setOnClose] = useState(false)

  const handleRecipeSelect = async(id, title, image) => {
    setId(id)
    setRecipeTitle(title)
    setOnClose(true)
    setImage(image)
    console.log('TYPE', id)
    try {
      const results = await axios.post('/recipecard', {id: id})
      setRecipe(results.data)
      console.log("results", results)
    } catch (err) {
      console.log("UNABLE TO SET RECIPES", err)
    }
  }
  // console.log('ID', id)
  console.log("RECIPE", recipe)
  // console.log("selectMeals from menu", selectMeals)
  return (
    <MenuContainer>
      <Masthead />
      <YellowSeperator>
        <Header>Menu</Header>
      </YellowSeperator>

      <CenterModal>
        <RecipeModalMenuAndReview id={id} recipe={recipe} image={image} recipeTitle={recipeTitle} close={close} setOnClose={setOnClose}/>
      </CenterModal>

      <Center>
      <MenuSelection>
      {/* replace testMeals with selectMeals if API IS WORKING */}
      {meals.map((meal, i)=> {
        return <Meal key={i}>
          <img src={meal.image} width='204' height='180' className="mealImage" onClick={()=>handleRecipeSelect(meal.id, meal.title, meal.image)}></img>
          <RecipeName>{meal.title}</RecipeName>
        </Meal>
      })}
      </MenuSelection>
      </Center>

      <YellowSeperator style={{marginTop: '100px'}}></YellowSeperator>
    </MenuContainer>
  )
}
const MenuContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
`
const YellowSeperator = Styled.div`
  width: 100%;
  height: 95px;
  background-color: #FFE5A4;
`
const Center = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
const CenterModal = Styled.div`
`
const Header = Styled.div`
  text-align: center;
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
  font-family: 'Lato';
  color: #264654;
  margin-top: 35px;
`
const MenuSelection = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: center;
  // align-items: center;
  margin-top: 30px;
  width: 936px;
  border-radius: 5px
`
const RecipeName = Styled.div`
  font-family: 'Quicksand';
  margin-top: 10px;
  font-size: 16px;
  width: 200px
`
const Meal = Styled.div`
  width: auto;
  border-radius: 1px;
  margin: 15px
`

export default MenuAndReview