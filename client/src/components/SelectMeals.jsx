import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from "../context.js";
import Styled from 'styled-components'
import ProgressMasthead from '../shared/ProgressMasthead.jsx'
import {Link}  from "react-router-dom";
import axios from 'axios';
import { Progress_container, ProgressText, TextZ, CurrentStep, Logo} from '../styles/pesonalizeYourPlan/styles.js';



  const SelectMeals = () =>{
    // !Cheryl
  const {meals, selectMeals, setSelectMeals, rate, setRate, numRecipies, headCount, specialBuy, setSpecialBuy, type} = useContext(AppContext);
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
    {/* <ProgressMasthead /> */}
    {/*##### Top, with the progress bar #####*/}
    <Progress_container>
      <Logo>
        <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>
        <img className='logo' src='assets/masthead/Masthead-logo-yellow.png' width='156' height='51'></img>

        </Link>
      </Logo>
      <ProgressText>
        <CurrentStep>Select Plan -----</CurrentStep>
          <TextZ style={{color: '#26BF00'}}>Register -----</TextZ>
          <TextZ style={{color: '#26BF00'}}>Delivery Info -----</TextZ>
          <TextZ style={{color: '#26BF00'}}>Payment Info -----</TextZ>
          <TextZ style={{color: '#26BF00'}}>Select Meals -----</TextZ>
          <TextZ>Review Order -----</TextZ>
          <TextZ>All Done!</TextZ>
        </ProgressText>
      </Progress_container>
    {/*##### end of the TOP ##### */}
      <SelectRecipesContainer>
        <RecipesContainer>
          <HeaderText>
            Select Recipes
          </HeaderText>
          <OneRecipeRow>
            {/* testMeals replace with meals if API is functioning */}
            {meals.map((meal, i)=> {
              return <OneRecipe key={i} onClick={()=>userSelectedRecipes(meal.title)}>
              <img src={meal.image} width='170' height='150' style={{cursor: 'pointer'}}></img>
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
                <SummaryText>{type}</SummaryText>
                <SummaryText>{numRecipies} Meals for {headCount} people per week</SummaryText>
                <SummaryText>{numRecipies * headCount} Meals per week</SummaryText>
                {/* <SummaryText>{selectMeals}</SummaryText> */}
                <div>
                  {selectMeals.map((oneMeal, i) => {
                    return <div>
                      <SummaryText> - {oneMeal}</SummaryText>
                      {/* <SummaryText>$ {item.price}</SummaryText> */}
                      </div>
                  })}
                </div>
                <div>
                  {specialBuy.map((item, i) => {
                    return <div>
                      <SummaryText> - {item.title} ${item.price}</SummaryText>
                      {/* <SummaryText>$ {item.price}</SummaryText> */}
                      </div>
                  })}
                </div>
              </MealSelection>
              <Cost>
                <Shipping>
                  <SummaryText>Shipping</SummaryText>
                  <SummaryText>$9.99</SummaryText>
                </Shipping>
                <Total>
                  <SummaryText>Total</SummaryText>
                  <SummaryText>${rate}</SummaryText>
                </Total>
              </Cost>
          </SummaryBoxContainer>
          <ReviewOrderContainer>
            <Link to="/review-order" style={{ textDecoration: 'none' , color: '#26BF00' }}>
              <ReviewOrderButton>Review Order</ReviewOrderButton>
            </Link>
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
                <img src={item.food_item_url} width='153' height='135' style={{cursor: 'pointer'}}/>
                <SpecialtyName>{item.supplier_name}</SpecialtyName>
                <SpecialtyName>{item.food_item}</SpecialtyName>
              </OneSpecialty>
            })}
          </SpecialtyItemsContainer>
    </div>
  )
}
const SummaryText = Styled.div`
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: 16px;
`
const SelectRecipesContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`
const RecipesContainer = Styled.div`
  display: flex;
  flex-direction: column;
// align-items:center;
`
const OneRecipeRow = Styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  margin-top: 10px;
  gap: 20px
`
const OneRecipe = Styled.div`
  display: flex;
  flex-direction: column;
`
const RecipeName = Styled.div`
  font-family: 'Quicksand';
  margin-top: 10px;
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
  height: 300px;
  overflow: auto;
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
  cursor: pointer;
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
  margin-bottom: 20px;
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
  margin-top: 5px;
  font-size: 16px;
  font-family: 'Quicksand';
`
export default SelectMeals