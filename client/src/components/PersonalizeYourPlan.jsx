import React, { useState } from 'react'
import Styled from 'styled-components'

import ProgressMasthead from '../shared/ProgressMasthead.jsx'

const PersonalizeYourPlan = (props) => {

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
              <Image src="../assets/preferences/meatandveggies.png" width='70' height='40'></Image>
              Meat and Veggies
            </PreferenceButtons>

            <PreferenceButtons>
              <img src="../assets/preferences/veggies.png" width='70' height='40'></img>
              Veggies
            </PreferenceButtons>

            <PreferenceButtons>
              <Image src="../assets/preferences/familyfriendly.png" width='40' height='40'></Image>
              Family Friendly
            </PreferenceButtons>

            <PreferenceButtons>
              <Image src="../assets/preferences/fitandwholesome.png" width='60' height='40'></Image>
              Fit & Wholesome
            </PreferenceButtons>

            <PreferenceButtons>
              <Image src="../assets/preferences/quickandeasy.png" width='40' height='40'></Image>
              Quick & Easy
            </PreferenceButtons>

            <PreferenceButtons>
              <img src="../assets/preferences/pescatarian.png" width='75' height='40'></img>
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
              <div>Meat & Veggies</div>
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
                <div>$199.80</div>
              </Total>
            </Cost>
          </OrderSummary>
        </StepTwo>
      </StepsContainer>
      <ContinueContainer>
        <ContinueButton>Select plan & continue</ContinueButton>
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