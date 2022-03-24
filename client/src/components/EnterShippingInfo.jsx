import React, {useContext } from 'react'
import Styled from 'styled-components'
import {Link}  from "react-router-dom";
import ProgressMasthead from '../shared/ProgressMasthead.jsx'
import { AppContext } from "../context.js";


const EnterShippingInfo = () =>{
  const {rate, numRecipies, headCount} = useContext(AppContext);

  const handleInput = (e) => {
    console.log(e.target.value)
  }

  const handleClick = (e) => {
    console.log('clicked')
  }

  return (
    <div>
      <ProgressMasthead />

      <EnterShippingContainer>

        <LeftSide>
          <div>Shipping Information</div>
          <ShippingInfoContainer>
            <ShippingLeft>
              <FirstName placeholder="First name" onChange={handleInput}></FirstName>
              <Address placeholder="Last name" onChange={handleInput}></Address>
              <City placeholder="City" onChange={handleInput}></City>
              <State placeholder="State" onChange={handleInput}></State>
            </ShippingLeft>

            <ShippingRight>
              <LastName placeholder="Last name" onChange={handleInput}></LastName>
              <Apt placeholder="Apt, Suite, Floor" onChange={handleInput}></Apt>
              <Zip placeholder="Zip code" onChange={handleInput}></Zip>
              <Phone placeholder="Phone Nnmber" onChange={handleInput}></Phone>
            </ShippingRight>
          </ShippingInfoContainer>
        </LeftSide>



        <RightSide>
          <div>Order Summary</div>
            <OrderSummary>
              <MealSelection>
                <div>Meat & Veggies</div>
                <div>4 Meals for {headCount} people per week</div>
                <div>{numRecipies} Meals per week</div>
              </MealSelection>
              <Cost>
                <Shipping>
                  <div>Shipping</div>
                  <div>$9.99</div>
                </Shipping>
                <Total>
                  <div>Total</div>
                  <div>$ {rate}</div>
                </Total>
              </Cost>
            </OrderSummary>
          <Button onClick={handleClick}>
            <Link to="/credit-card-entry">Next Step</Link>
            </Button>
        </RightSide>

      </EnterShippingContainer>
    </div>
  )
}

const EnterShippingContainer = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
const LeftSide = Styled.div`
margin-right: 33.5px;
`
const ShippingInfoContainer = Styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 531px;
  height: 362px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  justify-content: center;
`
const ShippingLeft = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const FirstName = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const Address = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const City = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const State = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const ShippingRight = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const LastName = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const Apt = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const Zip = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const Phone = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
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
  margin-top: 20px;
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
  width: 277px;
  height: 55px;
  margin: 50px;
  background-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  border-color: rgba(38, 191, 0, .25);
  color: #26BF00;
  font-size: 18px;
`

export default EnterShippingInfo