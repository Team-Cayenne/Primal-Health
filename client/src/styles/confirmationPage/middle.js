import styled from "styled-components";

export const MiddleContainer = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const ThankYouRow = styled.div`
  display: flex;
  width: 50%;
  height: px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
`
export const ThankYou = styled.div`
  display: flex;
  color: #3AC518;
  margin: 7px;
  font-size: 44px;
  font-family: 'Quicksand';
`
//  align-self: flex-end;
export const OrderID = styled.div`
  display: flex;
  color: #264654;
  margin: 13px;
  font-family: 'Quicksand';
`
export const OrderConfirmation = styled.div`
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  display: flex;
  background-color: white;
  width: 40%;
  flex-direction: column;
  margin-top: -20px;
  height: 347px;
  overflow: auto;
`
export const OrderTitle = styled.div`
  color: #264654;
  margin-top: 20px;
  align-self: center;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 1px solid black;
  font-family: 'Quicksand';
`
// export const Line = styled.div`
//   // color: #264654;
//   // align-self: center;
//   // margin-bottom: 30px;
//   // margin-top: -10px
// `
export const TrackYourOrderButton = styled.button`
width: 300px;
height: 55px;
margin: 100px;
background-color: rgba(38, 191, 0, .25);
border-radius: 5px;
border-color: rgba(38, 191, 0, .25);
color: #26BF00;
font-size: 18px;
font-family: 'Quicksand';
font-weight: 500;
cursor: pointer;
`
export const InnerPTitle = styled.div`
  display: flex;
  margin: 5px 0px 0px 20px;
  font-weight: bold;
  font-size: 18px;
  color: #264654;
  font-family: 'Quicksand';
`
export const InnerPText = styled.div`
  display: flex;
  color: #264654;
  flex-direction: column;
  font-size: 16px;
  margin-bottom: 30px;
  margin-left: 40px;
  justify-content: start;
  font-family: 'Quicksand';
`