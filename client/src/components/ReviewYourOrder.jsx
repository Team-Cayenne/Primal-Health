import React from 'react'
import Styled from 'styled-components'
import {Link}  from "react-router-dom";
import ProgressMasthead from '../shared/ProgressMasthead.jsx'

const ReviewYourOrder = () => {

  return (
    <div>
      <ProgressMasthead />

      <Header>
        Review your order
      </Header>

      <ReviewYourOrderContainer>
        <LeftSide>
          <div>Shipping Information</div>
          <ShippingInfo>
            <div>Customer Name</div>
            <div>Customer Address Information</div>
          </ShippingInfo>
          <div>Payment Information</div>
          <PaymentInfo>
            <div>Customer Payment Information</div>
          </PaymentInfo>
        </LeftSide>

        <RightSide>
          <OrderSummary>
            <MealSelection>
              <div>Meat & Veggies</div>
              <div>Count 2 people per week</div>
              <div>42 Meals per week</div>
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
          <div>If your order contains alcoholic items, someone over the age of 21 must accept the order.</div>
          <Button>
            <Link to="/order-confirmation">Place Order</Link>
          </Button>
        </RightSide>
      </ReviewYourOrderContainer>

    </div>
  )
}

const Header = Styled.div`
  font-size: 24px;
  text-align: center;
  margin-top: 53px;
`
const ReviewYourOrderContainer = Styled.div`
  display: flex;
  justify-content: center;
`
const LeftSide = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ShippingInfo = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 86.5px;
  width: 400px;
  height: 200px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
`
const PaymentInfo = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 86.5px;
  width: 400px;
  height: 200px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
`
const RightSide = Styled.div`
  display: flex;
  flex-direction: column;
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
const Button = Styled.button`
  width: 355px;
  height: 55px;
  margin: 50px;
  background-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  border-color: rgba(38, 191, 0, .25);
  color: #26BF00;
  font-size: 18px;
`
export default ReviewYourOrder