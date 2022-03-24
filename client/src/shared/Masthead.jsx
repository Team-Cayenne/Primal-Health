import React from 'react'
import Styled from 'styled-components'
import {Link}  from "react-router-dom";
import Button from './Button.jsx'

const Masthead = () => {

  return (
    <MastheadContainer>
      <Logo>
        <img className='logo' src='../../public/assets/masthead/Masthead-logo.png' width='156' height='51'></img>
      </Logo>
        <Text>
          <Link to="/">HOME</Link>
        </Text>
        <Link to="/user-profile">ACCOUNT</Link>

        <Link to="/nutrition-health">HEALTH&NUTRITION</Link>

        <Link to="/recipe-menu">OUR RECIPES</Link>

        <Link to="/meet-our-vendors">OUR SUPPLIERS</Link>

        <LoginButton>
          <Link to="/login">LOGIN</Link>
        </LoginButton>

    </MastheadContainer>
  )
}

const MastheadContainer = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
`
const Text = Styled.div`
 font-family: 'Lato';
`
const Logo = Styled.div`
  padding-right: 50px;
`
const LoginButton = Styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  background: rgba(38, 191, 0, .25);
  border-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  color: #26BF00;
  height: 50px;
  width: 130px;
  font-size: 18px;
  font-family: 'Lato';
  font-weight: semi-bold;
`




export default Masthead