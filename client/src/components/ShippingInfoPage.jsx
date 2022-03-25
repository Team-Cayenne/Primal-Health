import React from 'react';
import { MainContainer } from '../styles/confirmationPage/styles';
import { TopContainer, Logo } from '../styles/confirmationPage/top';
import { MiddleContainer, ThankYou, OrderID, ThankYouRow, OrderConfirmation,
  OrderTitle, Line, TrackYourOrderButton, InnerPTittle, InnerPText } from '../styles/confirmationPage/middle';
import { BottomContainer } from '../styles/confirmationPage/bottom';
import { ProgressBarIMG } from '../styles/trackingPage/progressBar';
import { ShippingInfoContainer, ShippingInfoTitle, ShippingMiddleContainer,
  OrderSummaryContainer, ShippingInfoBox, Input, InputBox } from '../styles/shippingInfoPage/styles';


const ShippingInfoPage= () =>{
  return (
    <MainContainer>
      <TopContainer>
        <Logo/>
      </TopContainer>
      <ShippingMiddleContainer>
        <ShippingInfoContainer>
          <ShippingInfoTitle>Shipping Information</ShippingInfoTitle> <br/>
          <ShippingInfoBox>
            <InputBox><Input type='text' placeholder='Name'/> <Input type='text' placeholder='Last Name'/>
            </InputBox>
            <InputBox><Input type='text' placeholder='Street Address'/> <Input type='text' placeholder='Apt,Suite,Floor'/>
            </InputBox>
            <InputBox><Input type='text' placeholder='City'/> <Input type='text' placeholder='Zip code'/>
            </InputBox>
            <InputBox><Input type='text' placeholder='State'/> <Input type='text' placeholder='Phone number'/>
            </InputBox>
          </ShippingInfoBox>
        </ShippingInfoContainer>
      </ShippingMiddleContainer>
      <BottomContainer>

      </BottomContainer>
    </MainContainer>
  )

}

export default ShippingInfoPage