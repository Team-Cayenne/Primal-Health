import { AppContext } from "../context.js";
import React, { useContext } from 'react'
import Styled from 'styled-components'
import {Link}  from "react-router-dom";
import ProgressMasthead from '../shared/ProgressMasthead.jsx';
import { Progress_container, ProgressText, TextZ, CurrentStep, Logo} from '../styles/pesonalizeYourPlan/styles.js';
import { Footer } from "./EnterShippingInfo.jsx";



const EnterCreditCard = () => {

  const { email, password, rate, subscriptionRate, type, numRecipies, headCount, creditCard, setCreditCard, setCurrentUser, currentUser } = useContext(AppContext);

  const handleInput = (event) => {
    setCreditCard(event.target.value)
  }

  const submit = () => {
    setCurrentUser({ ...currentUser, creditCard, email, password, subscriptionRate });
  }


  return (
    <div>
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
            <TextZ>Select Meals -----</TextZ>
            <TextZ>Review Order -----</TextZ>
            <TextZ>All Done!</TextZ>
          </ProgressText>
        </Progress_container>
      <EnterCreditCardContainer style={{display: 'flex', marginTop: '100px'}}>
        <LeftSide>
          <HeaderText>Payment Information</HeaderText>
          <PaymentInputContainer>
            <HeaderText>Add credit or debit card</HeaderText>
            <CardholderName placeholder="Cardholder name" ></CardholderName>
            <CardNumberInfoContainer>
              <CardNumber placeholder="Card number" onChange={handleInput}></CardNumber>
              <CardExp placeholder="Exp date" ></CardExp>
              <CardCVV placeholder="CVV" ></CardCVV>
            </CardNumberInfoContainer>
            <ImageAndButton>
              <img src="assets/creditcards/creditcards.png" width='123px' height='19px'>
              </img>
            </ImageAndButton>
          </PaymentInputContainer>
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
          <Link to="/select-meals" style={{ textDecoration: 'none' , color: '#26BF00' }}><Button onClick={submit}>Next Step</Button>
          </Link>
        </RightSide>
      </EnterCreditCardContainer>
      <Footer style={{display: 'flex', marginTop: '250px'}}></Footer>
    </div>
  )
}

const SummaryText = Styled.div`
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: 16px;
  color: #264654;
`
const EnterCreditCardContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`
const LeftSide = Styled.div`
  margin-right: 33.5px;
`
const PaymentInputContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 531px;
  height: 220px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
`
const HeaderText = Styled.div`
margin: 20px;
font-family: 'Quicksand';
font-size: 20px;
color: #264654;
`
const CardholderName = Styled.input`
  width: 491px;
  height: 29px;
  margin: 0px 20px 10px 19px;
  padding: 5px;
  font-family: 'Quicksand';
`
const CardNumberInfoContainer = Styled.div`
  display:flex;
  justify-content: center;
`
const CardNumber = Styled.input`
  width: 277px;
  height: 29px;
  margin: 3px;
  padding: 5px;
  font-family: 'Quicksand';

`
const CardExp = Styled.input`
  width: 101px;
  height: 29px;
  margin: 3px;
  padding: 5px;
  font-family: 'Quicksand';
`
const CardCVV = Styled.input`
  width: 101px;
  height: 29px;
  margin: 3px;
  padding: 5px;
  font-family: 'Quicksand';
`
const ImageAndButton = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 10px 35px 15px 0px;
`
const AddPaymentButton = Styled.button`
  width: 128px;
  height: 25px;
  margin-top: 10px;
  background-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  border-color: rgba(38, 191, 0, .25);
  color: #26BF00;
  font-size: 12px;
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
  font-family: 'Quicksand';
  cursor: pointer;
`

export default EnterCreditCard;