import styled from "styled-components";

export const ShippingMiddleContainer = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 70px;
`
//align-self: flex-end;
export const ShippingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px 80px 230px
`
export const ShippingInfoBox = styled.div`
  border: 1px solid green;
  border-radius: 5px;
  display: flex;
  background-color: white;
  width: 600px;
  height: 500px;
  flex-direction: column;
  margin-top: -20px;
`
export const ShippingInfoTitle = styled.div`
  display: flex;
  margin: 0px 0px 10px 0px;
  font-weight: bold;
  font-size: 1.3em;
  color: #264654;
`
export const InputBox = styled.div`
  display:flex;
  height: 20px;
  width: 470px;
  margin: 30px;
`
export const Input = styled.input`
  height: 33px;
  width: 220px;
  font-size: 18px;
  padding: 10px;
  margin: 20px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #55828B;
  }
  `;

  export const OrderSummaryContainer = styled.div`
    display: flex;

  `