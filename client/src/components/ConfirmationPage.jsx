import { AppContext } from "../context.js";
import React, { useContext } from 'react'
import {Link}  from "react-router-dom";
import Styled from 'styled-components'
import { MainContainer } from '../styles/confirmationPage/styles';
// import { TopContainer, Logo } from '../styles/confirmationPage/top';
import { MiddleContainer, ThankYou, OrderID, ThankYouRow, OrderConfirmation,
  OrderTitle, TrackYourOrderButton, InnerPTitle, InnerPText } from '../styles/confirmationPage/middle';
import { BottomContainer } from '../styles/confirmationPage/bottom';
import { Progress_container, ProgressText, TextZ, CurrentStep, Logo} from '../styles/pesonalizeYourPlan/styles.js';


const ConfirmationPage = () =>{
  const {meals, setMeals, type, setType, rate, setRate, numRecipies, setNumRecipies,headCount, setHeadCount, selectMeals, specialBuy, currentUser, firstName, lastName, address1, address2, city, state, zip, phone, creditCard,} = useContext(AppContext);

  return (
    <MainContainer>
      {/* <TopContainer>
        <Logo/>
      </TopContainer> */}
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
            <TextZ style={{color: '#26BF00'}}>Payment Info -----</TextZ>
            <TextZ style={{color: '#26BF00'}}>Select Meals -----</TextZ>
            <TextZ style={{color: '#26BF00'}}>Review Order -----</TextZ>
            <TextZ style={{color: '#26BF00'}}>All Done!</TextZ>
          </ProgressText>
        </Progress_container>
      {/*##### end of the TOP ##### */}
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
            Name: {currentUser.firstName} {currentUser.lastName} <br/>
            Address: {currentUser.address1} {currentUser.address2}, {currentUser.city}, {currentUser.state} {currentUser.zip}
          </InnerPText>
          <InnerPTitle>Payment:</InnerPTitle>
          <InnerPText>
            Date: 03/25/2022 <br/>
            Type: Paid with Visa **** **** **** {currentUser.creditCard.slice(currentUser.creditCard.length - 4)} <br/> <div style={{textAlign:'end', marginTop: '40px', marginRight:'60px', fontFamily:'Quicksand', fontWeight:'bold'}}>Total: ${rate}</div> <br/>
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

