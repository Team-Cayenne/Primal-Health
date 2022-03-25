import { AppContext } from "../context.js";
import React, { useContext } from 'react'
import Styled from 'styled-components'
import {Link}  from "react-router-dom";
import ProgressMasthead from '../shared/ProgressMasthead.jsx'

const ReviewYourOrder = () => {
  const {meals, setMeals, type, setType, rate, setRate, numRecipies, setNumRecipies,headCount, setHeadCount, specialBuy, selectMeals} = useContext(AppContext);

  return (
    <div>
      <ProgressMasthead />

      <Header>
        Review your order
      </Header>

      <ReviewYourOrderContainer>
        <LeftSide>
          <HeaderText>Shipping Information</HeaderText>
          <ShippingInfo>
            <div>Customer Name</div>
            <div>Customer Address Information</div>
          </ShippingInfo>
          <HeaderText>Payment Information</HeaderText>
          <PaymentInfo>
            <div>Customer Payment Information</div>
          </PaymentInfo>
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
                      <SummaryText>{item.title} ${item.price}</SummaryText>
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
            <Link to="/order-confirmation" style={{ textDecoration: 'none' , color: '#26BF00' }}><Button>Place Order</Button></Link>
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