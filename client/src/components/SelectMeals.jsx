import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from "../context.js";
import Styled from 'styled-components'
import ProgressMasthead from '../shared/ProgressMasthead.jsx'
import {Link}  from "react-router-dom";
import axios from 'axios';


  const SelectMeals = () =>{
    // !Cheryl
  const {meals, selectMeals, setSelectMeals, rate, setRate, numRecipies, headCount, specialBuy, setSpecialBuy} = useContext(AppContext);
  const [special, setSpecial] = useState([]);

    // !Cheryl

    useEffect(()=> {
      getSuppliers()
    }, []);

    const getSuppliers=()=> {
      axios.get('/suppliers')
        .then(results => {
          console.log('GET SUPPLIERS', results)
          setSpecial(results.data)
        })
        .catch(err => {
          console.log(err);
        })
    }

    // const mealPlan= new Array(numRecipies)

    const userSelectedRecipes = (title) => {
      console.log("click")
      if (selectMeals.length < numRecipies) {
        setSelectMeals([...selectMeals, title])
      }
    }

    const userBuysSpecial = (title, price) => {
      console.log("click")
      setSpecialBuy([...specialBuy, {title, price}])
      setRate(+rate + price)

    }

    console.log("SPECIALBUY", specialBuy)

    console.log("SPECIAL", special)

    console.log('select MEALS', selectMeals)

  return (
    <div>
    <ProgressMasthead />
      <SelectRecipesContainer>
        <RecipesContainer>
          <HeaderText>
            Select Recipes
          </HeaderText>
          <OneRecipeRow>
            {/* testMeals replace with meals if API is functioning */}
            {meals.map((meal, i)=> {
              return <OneRecipe key={i} onClick={()=>userSelectedRecipes(meal.title)}>
              <img src={meal.image} width='170' height='150'></img>
              <RecipeName>{meal.title}</RecipeName>
              </OneRecipe>
            })}
          </OneRecipeRow>
        </RecipesContainer>

        <OrderSummaryContainer>
          <HeaderText>
            Order Summary
          </HeaderText>
            <SummaryBoxContainer>
              <MealSelection>
                <div>Meat & Veggies</div>
                <div>4 Meals for {headCount} people per week</div>
                <div>{numRecipies} Meals per week</div>
                <div>{selectMeals}</div>
              </MealSelection>
              <div>
                {specialBuy.map((item, i) => {
                  return <div>
                    <p>{item.title}</p>
                    <p>$ {item.price}</p>
                    </div>
                })}
              </div>
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
          </SummaryBoxContainer>
          <ReviewOrderContainer>
            <ReviewOrderButton>
            <Link to="/review-order" style={{ textDecoration: 'none' , color: '#26BF00' }}>Review Order</Link>
            </ReviewOrderButton>
          </ReviewOrderContainer>
        </OrderSummaryContainer>

      </SelectRecipesContainer>
        <SpecialtyHeader>
          Add Specialty Items
        </SpecialtyHeader>
          <SpecialtyItemsContainer>
            {/* testMeals replace with special with working API */}
            {special.map((item, i) => {
              return <OneSpecialty onClick={()=>userBuysSpecial(item.food_item, item.food_item_price)}>
                <img src={item.food_item_url} width='170' height='150'/>
                <p>{item.supplier_name}</p>
                <p>{item.food_item}</p>
              </OneSpecialty>
            })}
          </SpecialtyItemsContainer>
    </div>
  )
}
const SummaryText = Styled.div`
  font-family: 'Quicksand';
  font-weight: 500;
`
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
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 20px
`
const OneRecipe = Styled.div`
  display: flex;
  flex-direction: column;
`
const RecipeName = Styled.div`
  font-size: 12px;
  width: 160px
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
  font-family: 'Quicksand';
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
  font-family: 'Quicksand';
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