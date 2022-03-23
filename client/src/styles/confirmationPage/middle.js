import styled from "styled-components";

export const MiddleContainer = styled.div`
  display: flex;
  background-color: white;
  width: 100%;

  flex-direction: column;
  align-items: center;

  margin-top: 100px;
`

export const ThankYouRow = styled.div`
  display: flex;
  width: 50%;
  height: 30px;
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
`
export const ThankYou = styled.div`
  display: flex;
  color: #3AC518;
  margin: 7px;
  font-size: 1.7em;
  align-self: flex-end;
`
//  align-self: flex-end;
export const OrderID = styled.div`
  display: flex;
  color: #264654;
  margin: 13px;
  align-self: flex-end;
`
export const OrderConfirmation = styled.div`
  border: 1px solid green;
  display: flex;
  background-color: white;
  width: 40%;
  flex-direction: column;
  margin-top: 80px;
`
export const OrderTitle = styled.div`
  color: #264654;
  margin-top: 30px;
  align-self: center;
  margin-bottom: -20px;
`
export const Line = styled.div`
  color: #264654;
  align-self: center;
  margin-bottom: 30px;
`
export const TrackYourOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px;
  color: #26BF00;
  background-color: #CCFCBE;
  font-size: 1.2em;
  width: 320px;
  height: 90px;
  border-radius: 8px;
`
export const InnerPTittle = styled.div`
  display: flex;
  margin: 20px;
  font-weight: bold;
  font-size: 0.9em;
  color: #264654;
`
export const InnerPText = styled.div`
  display: flex;
  color: #264654;
  flex-direction: row;
  font-size: 0.8em;
  margin-bottom: 30px;
  margin-left: 40px;
  justify-content: start;
`