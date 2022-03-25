import { AppContext } from "../context.js";
import React, { useContext } from 'react'
import {Link}  from "react-router-dom";
import { MainContainer } from '../styles/confirmationPage/styles';
// import { TopContainer, Logo } from '../styles/confirmationPage/top';
import { MiddleContainer, ThankYou, OrderID, ThankYouRow, OrderConfirmation,
  OrderTitle, Line, TrackYourOrderButton, InnerPTittle, InnerPText } from '../styles/confirmationPage/middle';
import { BottomContainer } from '../styles/confirmationPage/bottom';
import { Progress_container, ProgressText, TextZ, CurrentStep, Logo} from '../styles/pesonalizeYourPlan/styles.js';


const ConfirmationPage = () =>{
  const {meals, setMeals, type, setType, rate, setRate, numRecipies, setNumRecipies,headCount, setHeadCount} = useContext(AppContext);

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
//<TrackYourOrderButton onClick={routeChange}>Track your order</TrackYourOrderButton>
export default ConfirmationPage