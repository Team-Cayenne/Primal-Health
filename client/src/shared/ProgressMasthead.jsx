import React from 'react'
import {Link}  from "react-router-dom";
import Styled from 'styled-components'


const ProgressMasthead = (props) => {

  return (
    <Progress_container>
      <Logo>
        <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>
        <img className='logo' src='assets/masthead/Masthead-logo-yellow.png' width='156' height='51'></img>
        </Link>
      </Logo>
      <ProgressText>
        <CurrentStep>Select Plan -----</CurrentStep>
        <Text>Register -----</Text>
        <Text>Delivery Info -----</Text>
        <Text>Payment Info -----</Text>
        <Text>Select Meals -----</Text>
        <Text>Review Order -----</Text>
        <Text>All Done!</Text>
      </ProgressText>
    </Progress_container>
  )
}

const Progress_container = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 34px;
  font-size: 13px;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #FFE5A4;
`
const ProgressText = Styled.div`
  line-height: 32px;
  margin: auto;
  padding-right: 200px;
`
const Text = Styled.div`
  display: inline-block;
  margin-left: 3px;
  font-family: 'Quicksand';
  font-weight: 600;
`
const CurrentStep = Styled.div`
  display: inline-block;
  color: #26BF00;
  font-family: 'Quicksand';
  font-weight 600;
`
const Logo = Styled.div`
`

export default ProgressMasthead;