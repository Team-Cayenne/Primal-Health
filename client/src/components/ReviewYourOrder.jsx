import { AppContext } from "../context.js";
import React, { useContext } from 'react'
import axios from 'axios';
import Styled from 'styled-components'
import { Link } from "react-router-dom";
import ProgressMasthead from '../shared/ProgressMasthead.jsx'




const ReviewYourOrder = () => {

  const { currentUser, firstName, lastName, address1, address2, city, state, zip, phone, creditCard, email, password, meals, setMeals, type, setType, rate, setRate, numRecipies, setNumRecipies, headCount, setHeadCount, specialBuy, selectMeals} = useContext(AppContext);

  // refactor this to not use props and use context
  const submitUser = () => {
    axios.post('/users', currentUser)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

console.log(currentUser)

return (
  <div>
    <ProgressMasthead />

    <Header>
      Review your order
    </Header>

    <ReviewYourOrderContainer>
      <LeftSide>
        <HeaderText>Shipping Information</HeaderText>
        <ShippingContainer>
          <MealSelection>
            <SummaryText>{firstName.toUpperCase()} {lastName.toUpperCase()}</SummaryText>
            <SummaryText>{address1.toUpperCase()} {address2.toUpperCase()}</SummaryText>
            <SummaryText>{city.toUpperCase()}, {state.toUpperCase()} {zip.toUpperCase()}</SummaryText>
            <SummaryText>{phone}</SummaryText>
          </MealSelection>
        </ShippingContainer>

        <HeaderText>Payment Information</HeaderText>
        <PaymentContainer>
          <MealSelection>
            <SummaryText>XXXX-XXXX-XXXX-{creditCard.slice(creditCard.length-4)}</SummaryText>
          </MealSelection>
        </PaymentContainer>
      </LeftSide>

      <RightSide>
        <HeaderText>Order Summary</HeaderText>
          <OrderSummary>
            <MealSelection>
              <SummaryText>{type}</SummaryText>
              <SummaryText>{numRecipies} Meals for {headCount} people per week</SummaryText>
              <SummaryText>{numRecipies} Meals per week</SummaryText>
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
          </OrderSummary>
          <Alcohol>If your order contains alcoholic items, someone over the age of 21 must accept the order.</Alcohol>
            <Link to="/order-confirmation" style={{ textDecoration: 'none' , color: '#26BF00' }}><Button onClick={submitUser}>Place Order</Button></Link>
        </RightSide>
      </ReviewYourOrderContainer>

  </div>
)
}

const Alcohol = Styled.div`
  font-family: 'Quicksand';
  width: 400px;
  margin-top: 10px;
  margin-left: 10px;
`
const HeaderText = Styled.div`
  margin: 20px;
  font-family: 'Quicksand';
  font-size: 20px;
  color: #264654;
`
const SummaryText = Styled.div`
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: 16px;
  color: #264654;
`
const Header = Styled.div`
  font-family: 'Quicksand';
  text-align: center;
  color: #264654;
  margin: 30px 0px;
  font-size: 44px;
`
const ReviewYourOrderContainer = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
const LeftSide = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 33.5px;

`
const ShippingInfo = Styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  line-height: 25px;
`
const PaymentInfo = Styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
`
const RightSide = Styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 33.5px;

`
const MealSelection = Styled.div`
  margin: 15px 15px 30px 15px;
  line-height: 25px;
`
const ShippingContainer = Styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  overflow: auto;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
`
const PaymentContainer = Styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100px;
  overflow: auto;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
`
const Cost = Styled.div`
  margin: 0px 15px 0px 15px;
  line-height: 25px;
`
const OrderSummary = Styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  overflow: auto;
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
const Button = Styled.button`
  width: 277px;
  height: 55px;
  margin: 20px 0px 0px 70px;
  background-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  border-color: rgba(38, 191, 0, .25);
  color: #26BF00;
  font-size: 18px;
  font-family: 'Quicksand';
  cursor: pointer;
`
export default ReviewYourOrder