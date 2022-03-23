import { AppContext } from "../context.js";
import React, { useState, useContext } from 'react'
import Styled from 'styled-components'
import ProgressMasthead from '../shared/ProgressMasthead.jsx'
import axios from 'axios';
import 'regenerator-runtime/runtime'
import {Link}  from "react-router-dom";

  const PersonalizeYourPlan = (props) => {
    const {meals, setMeals} = useContext(AppContext);
    const [type, setType] = useState('');
    const mealTypes = {
      "meat": "Whole30",
      "vegetarian": "Vegetarian",
      "pescetarian": "Pescetarian",
      "paleo": "Paleo",
      "Ketogenic": "Ketogenic",
      "vegan": "Vegan"
    }

    const testMeals = [
      {
        id: 716381,
        title: 'Nigerian Snail Stew',
        image: 'https://spoonacular.com/recipeImages/716381-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 769774,
        title: 'Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)',
        image: 'https://spoonacular.com/recipeImages/769774-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 639851,
        title: 'Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes',
        image: 'https://spoonacular.com/recipeImages/639851-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 633344,
        title: 'Bacon Wrapped Pork Tenderloin',
        image: 'https://spoonacular.com/recipeImages/633344-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 716330,
        title: 'Chicken and Mango Skewer',
        image: 'https://spoonacular.com/recipeImages/716330-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 659135,
        title: 'Salmon with roasted vegetables',
        image: 'https://spoonacular.com/recipeImages/659135-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 638626,
        title: 'Chimichurri Skirt Steak with Grilled Asparagus',
        image: 'https://spoonacular.com/recipeImages/638626-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 1046982,
        title: 'How to Make the Perfect Sweet Potato Sloppy Joes',
        image: 'https://spoonacular.com/recipeImages/1046982-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 661578,
        title: 'Steamed Plaice & Spinach Rolls',
        image: 'https://spoonacular.com/recipeImages/661578-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 648257,
        title: 'Italian Steamed Artichokes',
        image: 'https://spoonacular.com/recipeImages/648257-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 648627,
        title: 'Juicy & Tender ~ Pork Loin Roast',
        image: 'https://spoonacular.com/recipeImages/648627-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 648247,
        title: 'Italian Seafood Stew',
        image: 'https://spoonacular.com/recipeImages/648247-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 665831,
        title: 'fennel, Peppers, Lettuce Salad',
        image: 'https://spoonacular.com/recipeImages/665831-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 645856,
        title: 'Grilled Salmon With Cherry, Pineapple, Mango Salsa',
        image: 'https://spoonacular.com/recipeImages/645856-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 654435,
        title: 'Pan Seared Salmon',
        image: 'https://spoonacular.com/recipeImages/654435-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 659674,
        title: 'Seared Pork Chops with Mango Salsa',
        image: 'https://spoonacular.com/recipeImages/659674-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 665261,
        title: 'Whole Chicken Dinner',
        image: 'https://spoonacular.com/recipeImages/665261-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 716427,
        title: 'Roasted Butterflied Chicken w. Onions & Carrots',
        image: 'https://spoonacular.com/recipeImages/716427-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 648721,
        title: 'Kale and Roasted Sweet Potato Soup with Chicken Sausage',
        image: 'https://spoonacular.com/recipeImages/648721-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 643061,
        title: 'Flank Steak with Herbed Salsa',
        image: 'https://spoonacular.com/recipeImages/643061-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 645863,
        title: 'Grilled Salmon With Mango Salsa',
        image: 'https://spoonacular.com/recipeImages/645863-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 645422,
        title: 'Sausages with Green Cabbage Mash',
        image: 'https://spoonacular.com/recipeImages/645422-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 640990,
        title: 'Cuban Flank Steak With Avocado and Tomato Salad',
        image: 'https://spoonacular.com/recipeImages/640990-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 654352,
        title: 'Pak Choi and Bean Sprouts Salad',
        image: 'https://spoonacular.com/recipeImages/654352-312x231.jpg',
        imageType: 'jpg'
      },
      {
        id: 633088,
        title: 'Authentic Jamaican Curry Chicken',
        image: 'https://spoonacular.com/recipeImages/633088-312x231.jpg',
        imageType: 'jpg'
      }
    ]


    const handleMealPref = async(mealType) => {
      setType(mealType)
      console.log('TYPE', type)
      try {
        const results = await axios.post('/mealchoice', {type: mealType})
        setMeals(results.data.results)
        console.log("results", results)
      } catch (err) {
        console.log("UNABLE TO SET MEALS", err)
      }
    }
    console.log('MEALS', meals)
    console.log("TYPE", type)
  return (
    <PersonalizeYourPlanContainer>
      <ProgressMasthead />
      <Header>Personalize your plan</Header>
      <StepsContainer>
        <StepOne>
          <StepOneHeader>
            1. Choose your preferences
          </StepOneHeader>
          <StepOneButtonContainer>

            <PreferenceButtons>
              <Image src="../assets/preferences/meatandveggies.png" width='70' height='40'onClick={()=>handleMealPref(mealTypes['meat'])} ></Image>
              Meat and Veggies
            </PreferenceButtons>

            <PreferenceButtons>
              <img src="../assets/preferences/veggies.png" width='70' height='40'onClick={()=>handleMealPref(mealTypes['vegetarian'])}></img>
              Veggies
            </PreferenceButtons>

            <PreferenceButtons>
              <Image src="../assets/preferences/familyfriendly.png" width='40' height='40'></Image>
              Family Friendly
            </PreferenceButtons>

            <PreferenceButtons>
              <Image src="../assets/preferences/fitandwholesome.png" width='60' height='40' onClick={()=>handleMealPref(mealTypes['vegan'])}></Image>
              Vegan
            </PreferenceButtons>

            <PreferenceButtons>
              <Image src="../assets/preferences/quickandeasy.png" width='40' height='40' onClick={()=>handleMealPref(mealTypes['paleo'])}></Image>
              Paleo
            </PreferenceButtons>

            <PreferenceButtons>
              <img src="../assets/preferences/pescatarian.png" width='75' height='40' onClick={()=>handleMealPref(mealTypes['pescetarian'])}></img>
              Pescatarian
            </PreferenceButtons>

          </StepOneButtonContainer>
        </StepOne>

        <StepTwo>
          <StepTwoHeader>
            2. Customize your plan size
          </StepTwoHeader>
          <StepTwoNumberOfPeopleContainer>
            <StepTwoText>
              Number of people
            </StepTwoText>
            <PeopleButton>2</PeopleButton>
            <PeopleButton>4</PeopleButton>
          </StepTwoNumberOfPeopleContainer>

          <StepTwoNumberOfRecipesContainer>
            <StepTwoText>
              Recipes per week
            </StepTwoText>
            <RecipeButton>2</RecipeButton>
            <RecipeButton>3</RecipeButton>
            <RecipeButton>4</RecipeButton>
            <RecipeButton>5</RecipeButton>
            <RecipeButton>6</RecipeButton>
          </StepTwoNumberOfRecipesContainer>

          <OrderSummary>
            <MealSelection>
              <div>{type}</div>
              <div>4 Meals for 5 people per week</div>
              <div>20 Meals per week</div>
            </MealSelection>
            <Cost>
              <Shipping>
                <div>Shipping</div>
                <div>$9.99</div>
              </Shipping>
              <Total>
                <div>Total</div>
                <div>$272.79</div>
              </Total>
            </Cost>
          </OrderSummary>
        </StepTwo>
      </StepsContainer>
      <ContinueContainer>
        <ContinueButton>
          <Link to="/signup">Select plan & continue</Link>
        </ContinueButton>
      </ContinueContainer>
    </PersonalizeYourPlanContainer>
  )
}

const PersonalizeYourPlanContainer = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
`
const Header = Styled.div`
  font-family: 'Lato', sans-serif;
  text-align: center;
  color: #264654;
  margin: 30px 0px;
  font-size: 44px;
  font-weight: bold;
`
const Image = Styled.img`
  margin: 0px 22px;
`
const StepsContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #888EA9;
  height: 434px;
`
const StepOneHeader = Styled.div`
  margin: 20px;
  text-align: center;
`
const StepOne = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 95.0px;
  font-family: 'Lato', sans-serif;
  font-size: 17px;
  width: 300px;
`
const StepOneButtonContainer = Styled.div`
  padding-left: 15px;
`
const PreferenceButtons = Styled.button`
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  margin: 0px 0px 18px 12px;
  background-color: white;
  border-color: #C4C4C4;
  border-radius: 10px;
  width: 119px;
  height: 69px;
  &:hover {
    border-color: #26BF00;
    border-radius: 10px;
    border: 2.5px solid #26BF00;
  }
`
const StepTwoHeader = Styled.div`
  margin: 20px;
  text-align: center;
`
const StepTwo = Styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 17px;
  border-left: 1px solid #c4c4c4;
`
const StepTwoText = Styled.div`
  font-size: 14px;
  margin-left: 83px;
  margin-right: 6px;
`
const StepTwoNumberOfPeopleContainer = Styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
`
const PeopleButton = Styled.button`
  width: 145px;
  height: 25px;
  background-color: white;
  border-color: #c4c4c4;
  border-radius: 5px;
  &:hover {
    border-color: #26BF00;
    border-radius: 5px;
    border: 2.5px solid #26BF00;
  }
`
const StepTwoNumberOfRecipesContainer = Styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
`
const RecipeButton = Styled.button`
  width: 56px;
  margin: 1px;
  height: 24px;
  background-color: white;
  border-color: #c4c4c4;
  border-radius: 5px;
  &:hover {
    border-color: #26BF00;
    border-radius: 5px;
    border: 2.5px solid #26BF00;
  }
`
const MealSelection = Styled.div`
  margin: 15px 15px 30px 15px;
  line-height: 25px;
`
const Cost = Styled.div`
  margin: 0px 15px 0px 15px;
  line-height: 25px;
`
const OrderSummary = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 86.5px;
  width: 400px;
  height: 200px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
`
const Shipping = Styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid #C4C4C4;
`
const Total = Styled.div`
  display: flex;
  justify-content: space-between;
`
const ContinueContainer = Styled.div`
  text-align: center;
`
const ContinueButton = Styled.button`
  width: 355px;
  height: 55px;
  margin: 50px;
  background-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  border-color: rgba(38, 191, 0, .25);
  color: #26BF00;
  font-size: 18px;
`
export default PersonalizeYourPlan;