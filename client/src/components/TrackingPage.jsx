import React from 'react';
import { MainContainer } from '../styles/confirmationPage/styles';
import { TopContainer, Logo } from '../styles/confirmationPage/top';
import { MiddleContainer, ThankYou, OrderID, ThankYouRow, OrderConfirmation,
  OrderTitle, Line, TrackYourOrderButton, InnerPTittle, InnerPText } from '../styles/confirmationPage/middle';
import { BottomContainer } from '../styles/confirmationPage/bottom';
import { ProgressBarIMG } from '../styles/trackingPage/progressBar';

const TrackingPage= () =>{
  return (
    <MainContainer>
      <TopContainer>
        <Logo/>
      </TopContainer>
      <MiddleContainer>
        <ThankYouRow style={{marginTop: '100px'}}>
          <ThankYou>
           #102b4s28j45620f02
          </ThankYou>
        </ThankYouRow>
        <ProgressBarIMG/>
        <ThankYou style={{
          color: '#85C973',
          margin: '7px',
          fontSize: '1.7em',
          alignSelf: 'center'
        }}> Your food is on the way! </ThankYou>
        <TrackYourOrderButton style={{marginTop: '150px', fontSize: '1em'}}>Continue shopping</TrackYourOrderButton>

      </MiddleContainer>
      <BottomContainer>

      </BottomContainer>
    </MainContainer>
  )

}

export default TrackingPage