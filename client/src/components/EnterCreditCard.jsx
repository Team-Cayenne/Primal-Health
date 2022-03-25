import { AppContext } from "../context.js";
import React, { useContext } from 'react'
import Styled from 'styled-components'
import { Link } from "react-router-dom";
import ProgressMasthead from '../shared/ProgressMasthead.jsx'


const EnterCreditCard = () => {

  const { email, password, rate, type, numRecipies, headCount, creditCard, setCreditCard, setCurrentUser, currentUser } = useContext(AppContext);

  const handleInput = (event) => {
    setCreditCard(event.target.value)
  }

  const submit = () => {
    setCurrentUser({ ...currentUser, creditCard, email, password });
  }


  return (
    //     <div>
    //       <ProgressMasthead />

    //       <EnterCreditCardContainer>
    //         <LeftSide>
    //           <div>Payment Information</div>
    //           <PaymentInputContainer>
    //             <HeaderText>Add credit or debit card</HeaderText>
    //             <CardholderName placeholder="Cardholder name" ></CardholderName>
    //             <CardNumberInfoContainer>
    //               <CardNumber placeholder="Card number" onChange={handleInput}></CardNumber>
    //               <CardExp placeholder="Exp date"></CardExp>
    //               <CardCVV placeholder="CVV"></CardCVV>
    //             </CardNumberInfoContainer>
    //             <ImageAndButton>
    //               <img src="../../public/assets/creditcards/creditcards.png" width='123px' height='19px'>
    //               </img>
    //               <AddPaymentButton onClick={submit}>Add payment</AddPaymentButton>
    //             </ImageAndButton>
    //           </PaymentInputContainer>
    //         </LeftSide>

    //         <RightSide>
    //           <div>Order Summary</div>
    //           <OrderSummary>
    //             <MealSelection>
    //               <div>Meat & Veggies</div>
    //               <div>4 Meals for 5 people per week</div>
    //               <div>20 Meals per week</div>
    //             </MealSelection>
    //             <Cost>
    //               <Shipping>
    //                 <div>Shipping</div>
    //                 <div>$9.99</div>
    //               </Shipping>
    //               <Total>
    //                 <div>Total</div>
    //                 <div>$199.80</div>
    //               </Total>
    //             </Cost>
    //           </OrderSummary>
    //           <div>If your order contains alcoholic items, someone over the age of 21 must accept the order.</div>
    //           <Button >Next Step</Button>
    //         </RightSide>
    //       </EnterCreditCardContainer>
    //     </div>
    //   )
    // }
    <div>
      <ProgressMasthead />
      <EnterCreditCardContainer>
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
              <AddPaymentButton>Add payment</AddPaymentButton>
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
    </div>
  )
}

const SummaryText = Styled.div`
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: 16px;
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
  font-size: 18px;
  margin: 20px;
  font-family: 'Quicksand';
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

export default EnterCreditCard;