import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from "../context.js";
import Styled from 'styled-components'
import ProgressMasthead from '../shared/ProgressMasthead.jsx'
import {Link}  from "react-router-dom";
import axios from 'axios';


  const SelectMeals = () =>{
    // !Cheryl
  const {meals, selectMeals, setSelectMeals} = useContext(AppContext);
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
    console.log("SPECIAL", special)
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

  return (
    <div>
    <ProgressMasthead />
      <SelectRecipesContainer>
        <RecipesContainer>
          <HeaderText>
            Select Recipes
          </HeaderText>
          <OneRecipeRow>
            {testMeals.map((meal, i)=> {
              return <OneRecipe key={i}>
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
                <SummaryText>Meat & Veggies</SummaryText>
                <SummaryText>4 Meals for 5 people per week</SummaryText>
                <SummaryText>20 Meals per week</SummaryText>
              </MealSelection>
              <Cost>
                <Shipping>
                  <SummaryText>Shipping</SummaryText>
                  <SummaryText>$9.99</SummaryText>
                </Shipping>
                <Total>
                  <SummaryText>Total</SummaryText>
                  <SummaryText>$272.79</SummaryText>
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
            {testMeals.map((item, i) => {
              return <OneSpecialty>
                <img src={item.food_item_url} width='170' height='150'/>
                <p>{item.supplier_name}</p>
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