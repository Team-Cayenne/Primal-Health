import React from 'react'
import Styled from 'styled-components'

import ProgressMasthead from '../shared/ProgressMasthead.jsx'

class EnterShippingInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  // const EnterShippingInfo = () =>{

  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submit() {
    this.props.user(this.state)
  }

  render() {
    return (
      <div>
        <ProgressMasthead />

        <EnterShippingContainer>

          <LeftSide>
            <div>Shipping Information</div>
            <ShippingInfoContainer>
              <ShippingLeft>
                <FirstName placeholder="First name" id='firstName' onChange={this.handleInput}></FirstName>
                <Address placeholder="Address" id='address1' onChange={this.handleInput}></Address>
                <City placeholder="City" id='city' onChange={this.handleInput}></City>
                <State placeholder="State" id='state' onChange={this.handleInput}></State>
              </ShippingLeft>

              <ShippingRight>
                <LastName placeholder="Last name" id='lastName' onChange={this.handleInput}></LastName>
                <Apt placeholder="Apt, Suite, Floor" id='address2' onChange={this.handleInput}></Apt>
                <Zip placeholder="Zip code" id='zip' onChange={this.handleInput}></Zip>
                <Phone placeholder="Phone Nnmber" id='phone' onChange={this.handleInput}></Phone>
              </ShippingRight>
            </ShippingInfoContainer>
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
            <Button onClick={this.submit}>Next Step</Button>
          </RightSide>

        </EnterShippingContainer>
      </div>
    )
  }
}

const EnterShippingContainer = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
const LeftSide = Styled.div`
margin-right: 33.5px;
`
const ShippingInfoContainer = Styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 531px;
  height: 362px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  justify-content: center;
`
const ShippingLeft = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const FirstName = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const Address = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const City = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const State = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const ShippingRight = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
const LastName = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const Apt = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const Zip = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
`
const Phone = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
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

export default EnterShippingInfo