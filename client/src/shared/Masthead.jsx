import React from 'react'
import Styled from 'styled-components'
import {Link}  from "react-router-dom";
import Button from './Button.jsx'
import logoImage from "../styles/img/logo.png";

const Masthead = () => {

  return (
    <MastheadContainer>
      <Logo>
        <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>
        <img className='logo' src='assets/masthead/Masthead-logo.png' width='156' height='51'></img>
        </Link>
      </Logo>

      <Link to="/" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>HOME</Link>
      <Link to="/user-profile" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>ACCOUNT</Link>
      <Link to="/nutrition-health" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>HEALTH & NUTRITION</Link>
      <Link to="/recipe-menu" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>OUR RECIPES</Link>
      <Link to="/meet-our-vendors" style={{ textDecoration: 'none' , color: '#264654', fontFamily: 'Quicksand' }}>OUR SUPPLIERS</Link>
      <LoginButton>
      <Link to="/login" style={{ textDecoration: 'none' , color: '#26BF00', fontFamily: 'Quicksand' }}>LOGIN</Link>
      </LoginButton>
    </MastheadContainer>
  )
}
// const Logo = Styled.div`
//   height: 55px;
//   width: 167px;
//   background-image: url(${logoImage});
//   background-size: cover;
//   margin: 13px;
// `

const MastheadContainer = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  margin-bottom: 24px;
  margin-top: 24px;
  width: 100%;
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