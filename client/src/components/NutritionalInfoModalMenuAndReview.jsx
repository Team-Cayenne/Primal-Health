import React from 'react'
import Styled from 'styled-components'


const NutritionalInfoModalMenuAndReview = (props) =>{
  console.log('NUTRITIONAL', props)
  if (props.closeNutModal === false) {
    return null
  }

  return (
    <ModalContainer>NutritionalInfoModalMenuAndReview
      <NutritionalModal>
        <div dangerouslySetInnerHTML={{__html: props.nutrition}} />
      <CloseNutritionalButton onClick={(()=>props.setCloseNutModal(false))}>Close</CloseNutritionalButton>
      </NutritionalModal>
    </ModalContainer>
  )
}

const ModalContainer = Styled.div`
  display: flex;
  justify-content: center;
`
const CloseNutritionalButton = Styled.button`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
background: rgba(38, 191, 0, .25);
border-color: rgba(38, 191, 0, .25);
border-radius: 5px;
color: #26BF00;
height: 50px;
width: 130px;
font-size: 18px;
font-family: 'Lato';
font-weight: semi-bold;`

const NutritionalModal = Styled.div`
position:fixed;
z-index: 1;
width: 370px;
height:673px;
background-color: beige;
border: 2px solid #264654;
margin: 20px;
`


export default NutritionalInfoModalMenuAndReview