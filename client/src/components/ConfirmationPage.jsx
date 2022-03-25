import { AppContext } from "../context.js";
import React, { useContext } from 'react'
import {Link}  from "react-router-dom";
import { MainContainer } from '../styles/confirmationPage/styles';
import { TopContainer, Logo } from '../styles/confirmationPage/top';
import { MiddleContainer, ThankYou, OrderID, ThankYouRow, OrderConfirmation,
  OrderTitle, Line, TrackYourOrderButton, InnerPTittle, InnerPText } from '../styles/confirmationPage/middle';
import { BottomContainer } from '../styles/confirmationPage/bottom';

const ConfirmationPage = () =>{
  const {currentUser, meals, setMeals, type, setType, rate, setRate, numRecipies, setNumRecipies,headCount, setHeadCount} = useContext(AppContext);

  return (
    <MainContainer>
      <TopContainer>
        <Logo/>
      </TopContainer>
      <MiddleContainer>
        <ThankYouRow>
          <ThankYou>Thank you for you order</ThankYou>
          <OrderID>#102b4s28j45620f02</OrderID>
        </ThankYouRow>
        <OrderConfirmation>
          <OrderTitle> Order confirmation </OrderTitle>
          <Line>____________________________</Line>
          <InnerPTittle>{type} Plan:</InnerPTittle>
          <InnerPText>
          {numRecipies} recipes for {headCount} people per week <br/>
          </InnerPText>
          <InnerPTittle>Shipping Information:</InnerPTittle>
          <InnerPText>
            Name: {currentUser.firstName} {currentUser.lastName} <br/>
            Address: {currentUser.address1} {currentUser.address2}, {currentUser.city}, {currentUser.state} {currentUser.zip}
          </InnerPText>
          <InnerPTittle>Payment:</InnerPTittle>
          <InnerPText>
            Date: 03/25/2022 <br/>
            Type: Paid with Visa {currentUser.creditCard.slice(currentUser.creditCard.length-4)} <br/><div style={{alignSelf: 'flex-end', marginLeft: '300px'}}>$ {rate}</div> <br/>
          </InnerPText>
        </OrderConfirmation>
          <TrackYourOrderButton>
            <Link to="/tracking">Place Order</Link>
          </TrackYourOrderButton>
      </MiddleContainer>
      <BottomContainer>
      </BottomContainer>
    </MainContainer>
  )

}
//<TrackYourOrderButton onClick={routeChange}>Track your order</TrackYourOrderButton>
export default ConfirmationPage