import React from 'react'
import Styled from 'styled-components'

import ProgressMasthead from '../shared/ProgressMasthead.jsx'

// const EnterCreditCard = (props) =>{
class EnterCreditCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      creditCard: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleInput(event) {
    this.setState({
      creditCard: event.target.value
    })
  }

  submit() {
    this.props.user(this.state)
  }

  render() {
    return (
      <div>
        <ProgressMasthead />

        <EnterCreditCardContainer>
          <LeftSide>
            <div>Payment Information</div>
            <PaymentInputContainer>
              <HeaderText>Add credit or debit card</HeaderText>
              <CardholderName placeholder="Cardholder name" ></CardholderName>
              <CardNumberInfoContainer>
                <CardNumber placeholder="Card number" onChange={this.handleInput}></CardNumber>
                <CardExp placeholder="Exp date"></CardExp>
                <CardCVV placeholder="CVV"></CardCVV>
              </CardNumberInfoContainer>
              <ImageAndButton>
                <img src="../../public/assets/creditcards/creditcards.png" width='123px' height='19px'>
                </img>
                <AddPaymentButton onClick={this.submit}>Add payment</AddPaymentButton>
              </ImageAndButton>
            </PaymentInputContainer>
          </LeftSide>

          <RightSide>
            <div>Order Summary</div>
            <OrderSummary>
              <MealSelection>
                <div>Meat & Veggies</div>
                <div>4 Meals for 5 people per week</div>
                <div>20 Meals per week</div>
              </MealSelection>
              <Cost>
                <Shipping>
                  <div>Shipping</div>
                  <div>$9.99</div>
                </Shipping>
                <Total>
                  <div>Total</div>
                  <div>$199.80</div>
                </Total>
              </Cost>
            </OrderSummary>
            <div>If your order contains alcoholic items, someone over the age of 21 must accept the order.</div>
            <Button >Next Step</Button>
          </RightSide>
        </EnterCreditCardContainer>
      </div>
    )
  }
}

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
`
const CardholderName = Styled.input`
  width: 491px;
  height: 29px;
  margin: 0px 20px 10px 19px;
  padding: 5px;
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
`
const CardExp = Styled.input`
  width: 101px;
  height: 29px;
  margin: 3px;
  padding: 5px;
`
const CardCVV = Styled.input`
  width: 101px;
  height: 29px;
  margin: 3px;
  padding: 5px;
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
  margin-top: 5px;
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
  margin-top: 20px;
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
`

export default EnterCreditCard