import React, {useContext } from 'react'
import Styled from 'styled-components'
import {Link}  from "react-router-dom";
import ProgressMasthead from '../shared/ProgressMasthead.jsx'
import { AppContext } from "../context.js";
import { Progress_container, ProgressText, TextZ, CurrentStep, Logo} from '../styles/pesonalizeYourPlan/styles.js';

// class EnterShippingInfo extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       firstName: '',
//       lastName: '',
//       address1: '',
//       address2: '',
//       city: '',
//       state: '',
//       zip: '',
//       phone: ''
//     }
//     this.handleInput = this.handleInput.bind(this);
//     this.submit = this.submit.bind(this);
//   }


const EnterShippingInfo = () => {

  const {email, password, rate, numRecipies, headCount, type, firstName, setFirstName, lastName, setLastName, address1, setAddress1, address2, setAddress2, city, setCity, state, setState, zip, setZip, phone, setPhone, currentUser, setCurrentUser} = useContext(AppContext);

  const getFirstName = (event) => {
    // setCurrentUser(currentUser[event.target.id] = event.target.value)
    setFirstName(event.target.value);
  }

  const getLastName = (event) => {
    // setCurrentUser(currentUser[event.target.id] = event.target.value)
    setLastName(event.target.value);
  }

  const getAddress1 = (event) => {
    // setCurrentUser(currentUser[event.target.id] = event.target.value)
    setAddress1(event.target.value);
  }

  const getAddress2 = (event) => {
    // setCurrentUser(currentUser[event.target.id] = event.target.value)
    setAddress2(event.target.value);
  }

  const getCity = (event) => {
    // setCurrentUser(currentUser[event.target.id] = event.target.value)
    setCity(event.target.value);
  }

  const getState = (event) => {
    // setCurrentUser(currentUser[event.target.id] = event.target.value)
    setState(event.target.value);
  }

  const getZip = (event) => {
    // setCurrentUser(currentUser[event.target.id] = event.target.value)
    setZip(event.target.value);
  }

  const getPhone = (event) => {
    // setCurrentUser(currentUser[event.target.id] = event.target.value)
    setPhone(event.target.value);
  }


  const submit = () => {
    setCurrentUser({...currentUser, firstName, lastName, address1, address2, city, state, zip, phone, email, password});
  }

  // render() {
    return (
      <div>
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
            <TextZ>Payment Info -----</TextZ>
            <TextZ>Select Meals -----</TextZ>
            <TextZ>Review Order -----</TextZ>
            <TextZ>All Done!</TextZ>
          </ProgressText>
        </Progress_container>
        {/*##### end of the TOP ##### */}
        <EnterShippingContainer>
        <LeftSide>
          <HeaderText>Shipping Information</HeaderText>
          <ShippingInfoContainer>

            <ShippingLeft>
              <FirstName placeholder="First name" id='firstName' onChange={getFirstName}></FirstName>
              <Address placeholder="Address" id='address1' onChange={getAddress1}></Address>
              <City placeholder="City" id='city' onChange={getCity}></City>
              <State placeholder="State" id='state' onChange={getState}></State>
            </ShippingLeft>

              <ShippingRight>
                <LastName placeholder="Last name" id='lastName' onChange={getLastName}></LastName>
                <Apt placeholder="Apt, Suite, Floor" id='address2' onChange={getAddress2}></Apt>
                <Zip placeholder="Zip code" id='zip' onChange={getZip}></Zip>
                <Phone placeholder="Phone Nnmber" id='phone' onChange={getPhone}></Phone>
              </ShippingRight>
            </ShippingInfoContainer>
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
            <Link to="/credit-card-entry" style={{ textDecoration: 'none' , color: '#26BF00' }}><Button onClick={submit}>Next Step</Button>
            </Link>
        </RightSide>
      </EnterShippingContainer>
    </div>
  )
}

const SummaryText = Styled.div`
  font-family: 'Quicksand';
  font-weight: 500;
  font-size: 16px;
`
const EnterShippingContainer = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
const HeaderText = Styled.div`
  font-size: 18px;
  margin: 20px;
  font-family: 'Quicksand';
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
  font-family: 'Quicksand';
`
const Address = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
`
const City = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
`
const State = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
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
  font-family: 'Quicksand';
`
const Apt = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
`
const Zip = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
`
const Phone = Styled.input`
  width: 217px;
  height: 29px;
  margin: 10px;
  padding: 5px;
  font-family: 'Quicksand';
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
export const Button = Styled.button`
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
export const Footer = Styled.div`
  display: flex;
  background-color: #FFE5A4;
  width: 100%;
  height: 95px;
  flex-directon: row;
  margin-bottom: auto;
  align-self: flex-end;
`
export default EnterShippingInfo