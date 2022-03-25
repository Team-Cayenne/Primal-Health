import { AppContext } from "../context.js";
import React, { useContext } from 'react'
import {Link}  from "react-router-dom";
import Styled from 'styled-components'
import { MainContainer } from '../styles/confirmationPage/styles';
import { TopContainer, Logo } from '../styles/confirmationPage/top';
import { MiddleContainer, ThankYou, OrderID, ThankYouRow, OrderConfirmation,
  OrderTitle, TrackYourOrderButton, InnerPTitle, InnerPText } from '../styles/confirmationPage/middle';
import { BottomContainer } from '../styles/confirmationPage/bottom';

const ConfirmationPage = () =>{
  const {meals, setMeals, type, setType, rate, setRate, numRecipies, setNumRecipies,headCount, setHeadCount, selectMeals, specialBuy, currentUser, firstName, lastName, address1, address2, city, state, zip, phone, creditCard,} = useContext(AppContext);

  return (
    <MainContainer>
      <TopContainer>
        <Logo/>
      </TopContainer>
      <MiddleContainer>
        <ThankYouRow>
          <ThankYou>Thank you for you order!</ThankYou>
          <OrderID>Order Number #102b4s28j45620f02</OrderID>
        </ThankYouRow>
        <OrderConfirmation>
          <OrderTitle> Order Confirmation </OrderTitle>
          <InnerPTitle>{type} Plan:</InnerPTitle>
          <InnerPText>
            {numRecipies} Recipes for {headCount} people per week <br/>
            {numRecipies * headCount} Meals per week

                  {selectMeals.map((oneMeal, i) => {
                    return <div>
                      <Items> - {oneMeal}</Items>
                      {/* <SummaryText>$ {item.price}</SummaryText> */}
                      </div>
                  })}


                  {specialBuy.map((item, i) => {
                    return <div>
                      <Items> - {item.title} ${item.price}</Items>
                      {/* <SummaryText>$ {item.price}</SummaryText> */}
                      </div>
                  })}

          </InnerPText>
          <InnerPTitle>Shipping Information:</InnerPTitle>
          <InnerPText>
            Name: John Smith <br/>
            Address: 104 Centre St, CA, 05478
          </InnerPText>
          <InnerPTitle>Payment:</InnerPTitle>
          <InnerPText>
            Date: 04/13/2022 <br/>
            Type: Paid with Visa **** **** **** 4012 <br/> <div style={{textAlign:'end', marginTop: '40px', marginRight:'60px', fontFamily:'Quicksand', fontWeight:'bold'}}>Total: ${rate}</div> <br/>
          </InnerPText>
        </OrderConfirmation>
          <Link to="/tracking">
            <TrackYourOrderButton>Continue to tracking</TrackYourOrderButton>
          </Link>
      </MiddleContainer>
      <BottomContainer>
      </BottomContainer>
    </MainContainer>
  )

}

const Items = Styled.div`
  display: flex;
  margin: 5px 0px 0px;
  font-size: 16px;
  color: #264654;
  font-family: 'Quicksand';
`

//<TrackYourOrderButton onClick={routeChange}>Track your order</TrackYourOrderButton>
export default ConfirmationPage

