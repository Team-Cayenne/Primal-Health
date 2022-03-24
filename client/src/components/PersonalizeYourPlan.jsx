import { AppContext } from "../context.js";
import React, { useContext } from 'react'
import Styled from 'styled-components'
import ProgressMasthead from '../shared/ProgressMasthead.jsx'
import axios from 'axios';
import 'regenerator-runtime/runtime'
import {Link}  from "react-router-dom";

  const PersonalizeYourPlan = (props) => {
    const {meals, setMeals, type, setType, rate, setRate, numRecipies, setNumRecipies,headCount, setHeadCount} = useContext(AppContext);

    const mealTypes = {
      "meat": "Whole30",
      "vegetarian": "Vegetarian",
      "pescetarian": "Pescetarian",
      "paleo": "Paleo",
      "Ketogenic": "Ketogenic",
      "vegan": "Vegan"
    }

    setRate((headCount * numRecipies * 12.99 + 9.99).toFixed(2))
    // const
    console.log("headCount", headCount)

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

            {/* <PreferenceButtons>
              <Image src="../assets/preferences/meatandveggies.png" width='70' height='40'onClick={()=>handleMealPref(mealTypes['meat'])} ></Image>
              Whole 30 (Meat) */}
            <PreferenceButtons onClick={()=>handleMealPref(mealTypes['meat'])}>
              {/* <Image src="../assets/preferences/meatandveggies.png" width='70' height='40'onClick={()=>handleMealPref(mealTypes['meat'])} ></Image> */}
              Whole 30
            </PreferenceButtons>

            <PreferenceButtons onClick={()=>handleMealPref(mealTypes['vegetarian'])}>
              {/* <img src="../assets/preferences/veggies.png" width='70' height='40'onClick={()=>handleMealPref(mealTypes['vegetarian'])}></img> */}
              Vegetarian
            </PreferenceButtons>

            <PreferenceButtons onClick={()=>handleMealPref(mealTypes['ketogenic'])}>
              {/* <Image src="../assets/preferences/familyfriendly.png" width='40' height='40'></Image> */}
              Keto
            </PreferenceButtons>

            <PreferenceButtons onClick={()=>handleMealPref(mealTypes['vegan'])}>
              {/* <Image src="../assets/preferences/fitandwholesome.png" width='60' height='40' onClick={()=>handleMealPref(mealTypes['vegan'])}></Image> */}
              Vegan
            </PreferenceButtons>

            <PreferenceButtons onClick={()=>handleMealPref(mealTypes['paleo'])}>
              {/* <Image src="../assets/preferences/quickandeasy.png" width='40' height='40' onClick={()=>handleMealPref(mealTypes['paleo'])}></Image> */}
              Paleo
            </PreferenceButtons>

            <PreferenceButtons onClick={()=>handleMealPref(mealTypes['pescetarian'])}>
              {/* <img src="../assets/preferences/pescatarian.png" width='75' height='40' onClick={()=>handleMealPref(mealTypes['pescetarian'])}></img> */}
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
            <PeopleButton onClick={()=>setHeadCount(2)}>
              2
            </PeopleButton>
            <PeopleButton onClick={()=>setHeadCount(4)}>
              4
            </PeopleButton>
          </StepTwoNumberOfPeopleContainer>

          <StepTwoNumberOfRecipesContainer>
            <StepTwoText>
              Recipes per week
            </StepTwoText>
            <RecipeButton onClick={()=>setNumRecipies(2)}>2</RecipeButton>
            <RecipeButton onClick={()=>setNumRecipies(3)}>3</RecipeButton>
            <RecipeButton onClick={()=>setNumRecipies(4)}>4</RecipeButton>
            <RecipeButton onClick={()=>setNumRecipies(5)}>5</RecipeButton>
            <RecipeButton onClick={()=>setNumRecipies(6)}>6</RecipeButton>
          </StepTwoNumberOfRecipesContainer>

          <OrderSummary>
            <MealSelection>
              <div>{type}</div>
              <div>{headCount}: Portion plan</div>
              <div>{numRecipies}: No. of Recipes</div>
            </MealSelection>
            <Cost>
              <Shipping>
                <SummaryText>Shipping</SummaryText>
                <SummaryText>$9.99</SummaryText>
              </Shipping>
              <Total>
                <div>Total</div>
                <div>$ {rate}</div>
              </Total>
            </Cost>
          </OrderSummary>
        </StepTwo>
      </StepsContainer>
      <ContinueContainer>
          <Link to="/signup" style={{ textDecoration: 'none' , color: '#26BF00'}}><ContinueButton>Select plan & continue</ContinueButton></Link>
      </ContinueContainer>
    </PersonalizeYourPlanContainer>
  )
}

const SummaryText = Styled.div`
  font-family: 'Quicksand';
  font-weight: 500;
  color: #264654;
`
const PersonalizeYourPlanContainer = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
`
const Header = Styled.div`
  font-family: 'Quicksand';
  text-align: center;
  color: #264654;
  margin: 30px 0px;
  font-size: 44px;
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
  font-family: 'Quicksand';
  font-size: 20px;
  color: #264654;
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
  font-family: 'Quicksand';
  font-size: 16px;
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
  cursor: pointer;
`
const StepTwoHeader = Styled.div`
  margin: 20px;
  text-align: center;
  font-family: 'Quicksand';
  font-size: 20px;
  color: #264654;
`
const StepTwo = Styled.div`
  font-size: 17px;
  border-left: 1px solid #c4c4c4;
`
const StepTwoText = Styled.div`
  font-size: 14px;
  margin-left: 83px;
  margin-right: 6px;
  font-family: 'Quicksand';
  color: #264654;
`
const StepTwoNumberOfPeopleContainer = Styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0px;
`
const PeopleButton = Styled.button`
  width: 142px;
  height: 25px;
  background-color: white;
  border-color: #c4c4c4;
  border-radius: 5px;
  &:hover {
    border-color: #26BF00;
    border-radius: 5px;
    border: 2.5px solid #26BF00;
  }
  cursor: pointer;
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
  cursor: pointer;
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
  cursor: pointer;
`
export default PersonalizeYourPlan;