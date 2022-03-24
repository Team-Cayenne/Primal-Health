import { AppContext } from "../context.js";
import React, { useContext } from 'react'
import {Link}  from "react-router-dom";
import { MainContainer } from '../styles/confirmationPage/styles';
import { TopContainer, Logo } from '../styles/confirmationPage/top';
import { MiddleContainer, ThankYou, OrderID, ThankYouRow, OrderConfirmation,
  OrderTitle, Line, TrackYourOrderButton, InnerPTittle, InnerPText } from '../styles/confirmationPage/middle';
import { BottomContainer } from '../styles/confirmationPage/bottom';

const ConfirmationPage = () =>{
  const {meals, setMeals, type, setType, rate, setRate, numRecipies, setNumRecipies,headCount, setHeadCount} = useContext(AppContext);

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
          <InnerPTittle>Meat and Veggins Plan:</InnerPTittle>
          <InnerPText>
            4 Recipes for {headCount} people per week <br/>
            {numRecipies} Meals per week
          </InnerPText>
          <InnerPTittle>Shipping Information:</InnerPTittle>
          <InnerPText>
            Name: John Smith <br/>
            Address: 104 Centre St, CA, 05478
          </InnerPText>
          <InnerPTittle>Payment:</InnerPTittle>
          <InnerPText>
            Date: 04/13/2022 <br/>
            Type: Paid with Visa **** **** **** 4012 <br/><div style={{alignSelf: 'flex-end', marginLeft: '300px'}}>$ {rate}</div> <br/>
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

export default ConfirmationPage