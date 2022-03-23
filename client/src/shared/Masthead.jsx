import React from 'react'
import Styled from 'styled-components'

import Button from './Button.jsx'

const Masthead = () => {

  return (
    <MastheadContainer>
      <Logo>
        <img className='logo' src='../../public/assets/masthead/Masthead-logo.png' width='156' height='51'></img>
      </Logo>
        <Text>HOME</Text>
        <Text>ACCOUNT</Text>
        <Text>OUR PLANS</Text>
        <Text>OUR RECIPES</Text>
        <Text>OUR SUPPLIERS</Text>
        <Text>ABOUT US</Text>
        <Button type={'getStarted'}/>
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




export default Masthead