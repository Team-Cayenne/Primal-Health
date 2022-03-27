import styled from "styled-components";
import emailImage from "../img/mail.png";
import phoneImage from "../img/phone.jpg";
import chatImage from "../img/chat.png";
// import logoImage from "../img/logo.png"

export const SeperatorBar = styled.div`
  display: flex;
  width: 100%;
  height: 95px;
  background-color: #FFE5A4;
  justify-content: center;
  // align-items: center;
  margin-bottom: 100px;
`
export const NutritionMainContainer = styled.div`
  display: flex;
  // background-color: white;
  width: 100%;
  flex-direction: column;
  // align-items: center;
  // margin-top: 70px;
`
export const NutritionalBox = styled.div`
  display: flex;
  background-color: white;
  width: 1200px;
  height: 400px;
  flex-direction: row;
  margin-left: 200px;
`
export const NutritionalContactBox = styled.div`
  display: flex;
  background-color: white;
  width: 600px;
  height: 500px;
  flex-direction: column;
  margin-left: 40px;
  color: #264654;
  font-weight: 600;
`
export const SeperatorTitle = styled.div`
  display: flex;
  margin: 35px 0px 40px 0px;
  font-family: 'Lato';
  font-style: italic;
  font-weight: bold;
  font-size: 24px;
  color: #264654;
  align-self: start;
`
export const NutritionalTitle = styled.div`
  display: flex;
  margin: -30px 0px 30px 200px;
  font-weight: bold;
  font-size: 2.3em;
  color: #264654;
  align-self: start;
`
export const EmailRow = styled.div`
  height: 35px;
  width: 300px;
  margin-left: -12px;
  margin-top: -7px;
  display: flex;
  flex-direction: row;
`
export const EmailIcon = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${emailImage});
  background-size: cover;
  margin: 0px 5px 0px 0px;
`
export const EmailText = styled.div`
  display: flex;
  margin: 7px 0px 0px 0px;
  font-weight: 600;
  color: #264654;
  align-self: baseline;
`
export const PhoneRow = styled.div`
height: 35px;
width: 200px;
margin-top: -14px;
margin-left: -12px;
display: flex;
flex-direction: row;
`
export const PhoneIcon = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${phoneImage});
  background-size: cover;
  margin: 0px 5px 0px 0px;
`
export const PhoneText = styled.div`
  display: flex;
  margin: 7px 0px 0px 0px;
  font-weight: 600;
  color: #264654;
  align-self: baseline;
`
export const ChatIcon = styled.div`
  height: 30px;
  width: 30px;
  background-image: url(${chatImage});
  background-size: cover;
  margin: 0px 5px 0px 0px;
`
export const DescriptionBox = styled.div`
  display: flex;
  background-color: white;
  width: 1000px;
  font-weight: 300;

  flex-direction: column;
  margin-left: 200px;
  margin-bottom: 50px;
  color: #264654;
  font-weight: 300;
`
export const InnerTitle = styled.div`
  display: flex;
  margin: 20px 0px 10px 0px;
  font-weight: 600;

  color: #264654;
  // align-self: center;
`
export const VideosButton = styled.button`
width: 400px;
height: 55px;
margin-bottom: 50px;
background-color: rgba(38, 191, 0, .25);
border-radius: 5px;
border-color: rgba(38, 191, 0, .25);
color: #26BF00;
font-size: 22px;
font-family: 'Lato';
font-weight: 500;
cursor: pointer;
`