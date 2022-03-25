import React, {useContext } from 'react'
import Styled from 'styled-components'
import {Link}  from "react-router-dom";
import ProgressMasthead from '../shared/ProgressMasthead.jsx'
import { AppContext } from "../context.js";
import { Progress_container, ProgressText, TextZ, CurrentStep, Logo} from '../styles/pesonalizeYourPlan/styles.js';


const EnterShippingInfo = () =>{
  const {rate, numRecipies, headCount, type} = useContext(AppContext);

  const handleInput = (e) => {
    console.log(e.target.value)
  }

  const handleClick = (e) => {
    console.log('clicked')
  }

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
            <TextZ>Payment Info -----</TextZ>
            <TextZ>Select Meals -----</TextZ>
            <TextZ>Review Order -----</TextZ>
            <TextZ>All Done!</TextZ>
          </ProgressText>
        </Progress_container>
      {/*##### end of the TOP ##### */}
      <EnterShippingContainer>
        <LeftSide>
          <HeaderText>Shipping Information</HeaderText>
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
          <HeaderText>Order Summary</HeaderText>
            <OrderSummary>
              <MealSelection>
                <SummaryText>{type}</SummaryText>
                <SummaryText>{numRecipies} Meals for {headCount} people per week</SummaryText>
                <SummaryText>{numRecipies * headCount} Meals per week</SummaryText>
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
            <Link to="/credit-card-entry" style={{ textDecoration: 'none' , color: '#26BF00' }}><Button onClick={handleClick}>Next Step</Button>
            </Link>
        </RightSide>
      </EnterShippingContainer>
    </div>
  )
}
const SummaryText = Styled.div`
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: 16px;
`
const EnterShippingContainer = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
const HeaderText = Styled.div`
  font-size: 18px;
  margin: 20px;
  font-family: 'Quicksand';
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
  font-family: 'Quicksand';
`
const Address = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
`
const City = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
`
const State = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
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
  font-family: 'Quicksand';
`
const Apt = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
`
const Zip = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
`
const Phone = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
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
  cursor: pointer;
`
export const Footer = Styled.div`
  display: flex;
  background-color: #FFE5A4;
  width: 100%;
  height: 95px;
  flex-directon: row;
  margin-bottom: auto;
  align-self: flex-end;
`
export default EnterShippingInfo