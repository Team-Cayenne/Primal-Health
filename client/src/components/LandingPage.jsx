import React from 'react'
import {Link}  from "react-router-dom";
import Styled from 'styled-components'

import Masthead from '../shared/Masthead.jsx'

const LandingPage= () =>{

  return (
    <LandingPageContainer>
      <Masthead />

      <YellowSeperator>
        <Header>Fresh food, delivered right to your door.</Header>
      </YellowSeperator>

      <Main>
        <img src='../../public/assets/landingpage/newMainTest.jpeg' width="414" height="412" ></img>
        <MainTextContainer>
          <MainText>Reconnect with Your Roots.</MainText>
          <MainSubText><CheckMark>✓</CheckMark>Affordable</MainSubText>
          <MainSubText><CheckMark>✓</CheckMark>Organic, Non-GMO</MainSubText>
          <MainSubText><CheckMark>✓</CheckMark>Locally Sourced</MainSubText>
          <MainSubText><CheckMark>✓</CheckMark>Commitment-Free</MainSubText>
          <MainSubText><CheckMark>✓</CheckMark>Weekly Recipes</MainSubText>
          <Button>
          {/* <Link to="/your-personal-pref">View Plans</Link> */}
          View Plans
          </Button>
        </MainTextContainer>
        <img src='../../public/assets/landingpage/newMainTestFlipped.jpeg' width="414" height="412" ></img>
      </Main>

      <YellowSeperator>
          <Header>Food fit for any lifestyle.</Header>
      </YellowSeperator>

      <MealSelection>
        <Top>
          <Image src='../../public/assets/landingpage/whole30.png' width="281" height="418" ></Image>
          <Image src='../../public/assets/landingpage/vegetarian.png' width="281" height="418"></Image>
          <Image src='../../public/assets/landingpage/pescatarian.png' width="281" height="418"></Image>
        </Top>
        <Bottom>
          <Image src='../../public/assets/landingpage/vegan.png' width="281" height="418"></Image>
          <Image src='../../public/assets/landingpage/paleo.png' width="281" height="418"></Image>
          <Image src='../../public/assets/landingpage/keto.png' width="281" height="418"></Image>
        </Bottom>
      </MealSelection>


      <YellowSeperator>
        <Header>Frequently Asked Questions</Header>
      </YellowSeperator>

      <FAQContainer>
        <FAQQuestions>Q: Do your plans offer plans for people with certain requirements?</FAQQuestions>
        <FAQAnswers>A: Because there is such a diverse range of dietary needs or dietary preferences, we cannot specifically address each category.  However, we make it a priority to provide transparent nutritional information on all of our products and ingredients. </FAQAnswers>
        <FAQQuestions>Q: What comes with a meal kit?</FAQQuestions>
        <FAQAnswers>A: All our meal kits come with recipe instructions that are also viewable on our site and pre measured ingredients that are packed with ice packs to keep food cool and fresh during transport.  The only ingredient we ask you provide are pepper, salt, sugar, oil and butter. </FAQAnswers>
        <FAQQuestions>Q: How is Primal Health different from other competitors?</FAQQuestions>
        <FAQAnswers>A: Primal Health not only provides delicious, convienient and healthy meals, but guarantees all products meet high ethical standards.  All our suppliers work within biodynamic processes to produce organic products that are ecologically friendly.  We also care about your holistic being and believe with proper nutrition and exercise, anyone can attain peak levels of emotional and physical ability.  To help you achieve those goals, we provide access to licensed nutritionists, educational material and a daily log to keep track of your progress</FAQAnswers>
        <FAQQuestions>Q: What will you do if an employee contracts Covid 19 or varients?</FAQQuestions>
        <FAQAnswers>A: All Primal Health facilities have the highest level of food safety certification and follows daily rigorous processes guided by the FDA and CDC to maintain the safety of our employees and product, which is our highest priority. We conduct daily medical grade cleaning and temperature checks of all our employees upon entry of our facilities.  In the event an employee contracts Covid, we immediately act in response protocols including intense cleaning and santition of the employees work area and mandatory quarantine of 14 days prior to testing for clearance to resuming work. </FAQAnswers>
        <FAQQuestions>Q: How does my food stay fresh during transit?</FAQQuestions>
        <FAQAnswers>A: We have specially designed boxes with insulating liners, gel packs, and cooling material to keep your food as cool as possible. We even modify our packaging based on season to ensure optimal freshness.</FAQAnswers>
        <FAQQuestions>Q: What type of subscriptions are offered?</FAQQuestions>
        <FAQAnswers>A: Currently, we are offering weekly subscriptions to provide the most fresh local meals.</FAQAnswers>
      </FAQContainer>

      <YellowSeperator></YellowSeperator>
    </LandingPageContainer>
  )
}

const LandingPageContainer = Styled.div`
  display: flex;
  flex-direction: column;
  `
const YellowSeperator = Styled.div`
  width: 100%;
  height: 95px;
  background-color: #FFE5A4;
`
const MainTextContainer = Styled.div`
  text-align: center;
  background-color: #faf9f7;
  width: 1200px;
  // margin-bottom: 15px;
  border-left: 3px solid #FFE5A4;
  border-right: 3px solid #FFE5A4;
  // box-shadow: 0px 10px 20px black;
`
const MainText = Styled.div`
  font-size: 44px;
  font-family: 'Lato';
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 30px;
  color: #264654;
`
const MainSubText = Styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-family: 'Quicksand';
  color: #264654;
`
const CheckMark = Styled.div`
  font-size: 24px;
  font-family: 'Quicksand';
  color: #26BF00;
`
const Header = Styled.div`
  text-align: center;
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
  font-family: 'Lato';
  color: #264654;
  margin-top: 35px;
`
const Main = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const MealSelection = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = Styled.img`
  margin: 15px 50px 15px 50px;
`
const Top = Styled.div`
  margin: 30px;
`
const Bottom = Styled.div`
  margin 30px;
`
const Button = Styled.button`
  width: 204px;
  height: 55px;
  margin: 30px;
  background-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  border-color: rgba(38, 191, 0, .25);
  color: #26BF00;
  font-size: 18px;
  font-family: 'Lato';
  font-weight: 500;
`
const FAQContainer = Styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 50px;
`
const FAQQuestions = Styled.div`
  text-align: center;
  font-family: 'Quicksand';
  font-size: 24px;
  font-weight: bold;
  width: 50%;
  color: #264654
`
const FAQAnswers = Styled.div`
  text-align: center;
  font-family: 'Quicksand';
  font-size: 16px;
  font-style: italic;
  width: 50%;
  margin: 20px;
  color: #888EA9;
`

export default LandingPage