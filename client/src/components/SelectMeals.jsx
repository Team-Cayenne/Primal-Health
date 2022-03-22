import React from 'react'
import { AppContext } from "../context.js";

const SelectMeals= () =>{
  // !Cheryl
  const {meals, selectMeals, setSelectMeals} = useContext(AppContext);
  // !Cheryl
import Styled from 'styled-components'

import ProgressMasthead from '../shared/ProgressMasthead.jsx'


const SelectMeals = () =>{

  return (
    <div>
    <ProgressMasthead />
      <SelectRecipesContainer>
        <RecipesContainer>
          <HeaderText>
            <div>Select Recipes</div>
          </HeaderText>
          <OneRecipeRow>
            <OneRecipe>
              <img src="../assets/selectmeals/item1.png" width='170' height='150'></img>
              <RecipeName>Placeholder for meal</RecipeName>
              <RecipeInfo>Calories | Gluten-Free | Single Serve</RecipeInfo>
            </OneRecipe>
            <OneRecipe>
              <img src="../assets/selectmeals/item2.png" width='170' height='150'></img>
              <RecipeName>Placeholder for meal</RecipeName>
              <RecipeInfo>Calories | Gluten-Free | Single Serve</RecipeInfo>
            </OneRecipe>
            <OneRecipe>
              <img src="../assets/selectmeals/item3.png" width='170' height='150'></img>
              <RecipeName>Placeholder for meal</RecipeName>
              <RecipeInfo>Calories | Gluten-Free | Single Serve</RecipeInfo>
            </OneRecipe>
            <OneRecipe>
              <img src="../assets/selectmeals/item4.png" width='170' height='150'></img>
              <RecipeName>Placeholder for meal</RecipeName>
              <RecipeInfo>Calories | Gluten-Free | Single Serve</RecipeInfo>
            </OneRecipe>
          </OneRecipeRow>
          <OneRecipeRow>
            <OneRecipe>
              <img src="../assets/selectmeals/item5.png" width='170' height='150'></img>
              <RecipeName>Placeholder for meal</RecipeName>
              <RecipeInfo>Calories | Gluten-Free | Single Serve</RecipeInfo>
            </OneRecipe>
            <OneRecipe>
              <img src="../assets/selectmeals/item6.png" width='170' height='150'></img>
              <RecipeName>Placeholder for meal</RecipeName>
              <RecipeInfo>Calories | Gluten-Free | Single Serve</RecipeInfo>
            </OneRecipe>
            <OneRecipe>
              <img src="../assets/selectmeals/item7.png" width='170' height='150'></img>
              <RecipeName>Placeholder for meal</RecipeName>
              <RecipeInfo>Calories | Gluten-Free | Single Serve</RecipeInfo>
            </OneRecipe>
            <OneRecipe>
              <img src="../assets/selectmeals/item8.png" width='170' height='150'></img>
              <RecipeName>Placeholder for meal</RecipeName>
              <RecipeInfo>Calories | Gluten-Free | Single Serve</RecipeInfo>
            </OneRecipe>
          </OneRecipeRow>
        </RecipesContainer>

        <OrderSummaryContainer>
          <HeaderText>
            <div>Order Summary</div>
          </HeaderText>
            <SummaryBoxContainer>
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
          </SummaryBoxContainer>
          <ReviewOrderContainer>
            <ReviewOrderButton>Review Order</ReviewOrderButton>
          </ReviewOrderContainer>
        </OrderSummaryContainer>

      </SelectRecipesContainer>
        <SpecialtyHeader>
          Add Specialty Items
        </SpecialtyHeader>
          <SpecialtyItemsContainer>
            <OneSpecialty>
              <img src="../assets/selectmeals/item5.png" width='130' height='115'></img>
              <SpecialtyName>Placeholder for specialty</SpecialtyName>
              <SpecialtyInfo>$10.99</SpecialtyInfo>
            </OneSpecialty>
            <OneSpecialty>
              <img src="../assets/selectmeals/item5.png" width='130' height='115'></img>
              <SpecialtyName>Placeholder for specialty</SpecialtyName>
              <SpecialtyInfo>$10.99</SpecialtyInfo>
            </OneSpecialty>
            <OneSpecialty>
              <img src="../assets/selectmeals/item5.png" width='130' height='115'></img>
              <SpecialtyName>Placeholder for specialty</SpecialtyName>
              <SpecialtyInfo>$10.99</SpecialtyInfo>
            </OneSpecialty>
            <OneSpecialty>
              <img src="../assets/selectmeals/item5.png" width='130' height='115'></img>
              <SpecialtyName>Placeholder for specialty</SpecialtyName>
              <SpecialtyInfo>$10.99</SpecialtyInfo>
            </OneSpecialty>
          </SpecialtyItemsContainer>
    </div>
  )
}

const SelectRecipesContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  justify-content: space-evenly;
`
const RecipesContainer = Styled.div`
  display: flex;
  flex-direction: column;
`
const OneRecipeRow = Styled.div`
  display: flex;
  margin-top: 10px;
`
const OneRecipe = Styled.div`
  display: flex;
  flex-direction: column;
`
const RecipeName = Styled.div`
  font-size: 12px;
`
const RecipeInfo = Styled.div`
  font-size: 9px;
`
const OrderSummaryContainer = Styled.div`
  display: flex;
  flex-direction: column;
`
const SummaryBoxContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 400px;
  height: 200px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  font-size: 13px;
`
const ReviewOrderContainer = Styled.div`
  text-align: center;
  margin-top: 50px;
`
const ReviewOrderButton = Styled.button`
  width: 277px;
  height: 55px;
  background-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  border-color: rgba(38, 191, 0, .25);
  color: #26BF00;
  font-size: 18px;
`
const HeaderText = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  margin-left: 5px;
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
const SpecialtyHeader =  Styled.div`
  font-size: 18px;
  margin: 30px 20px 10px 20px;
  text-align: center;
`
const SpecialtyItemsContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const OneSpecialty = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 5px;
`
const SpecialtyName = Styled.div`
  font-size: 9px;
`
const SpecialtyInfo = Styled.div`
  font-size: 9px;
`
export default SelectMeals