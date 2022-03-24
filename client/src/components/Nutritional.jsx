import React from 'react';
import {Link}  from "react-router-dom";
import Masthead from '../shared/Masthead.jsx'
import { BottomContainer } from '../styles/confirmationPage/bottom.js';
import { Line } from '../styles/confirmationPage/middle.js';
import { NutritionMainContainer, NutritionalTitle, NutritionalBox, NutritionalContactBox,
  EmailIcon, EmailRow, PhoneIcon, EmailText, PhoneRow, PhoneText, DescriptionBox,
  InnerTitle, SeperatorBar, VideosButton, ChatIcon } from '../styles/nutritionalPage/styles';


const Nutritional= () =>{

  return (
    <NutritionMainContainer>
      <Masthead />
      <SeperatorBar>
        <NutritionalTitle>Nutritional Experts</NutritionalTitle>
      </SeperatorBar>


      {/* <NutritionalTitle>Nutritional Experts</NutritionalTitle> */}
      <NutritionalBox>
        <div>
          <img src="https://media.istockphoto.com/photos/portrait-of-smiling-mixed-race-woman-looking-at-camera-picture-id1319763830?b=1&k=20&m=1319763830&s=170667a&w=0&h=wE44n9yP1nrefeqv5DCl5mE3ouU01FNNHeZPR0yDCWA="></img>
        </div>
        <NutritionalContactBox>
         <br/>
          <li>Nancy Clark</li> <br/>
          <li>MS RD CSSD FAND</li> <br/>
          <li>Sun-Diego, CA</li> <br/>
          <EmailRow><EmailIcon/><EmailText>nclarkrd@rcn.com</EmailText></EmailRow><br/>
          <PhoneRow><PhoneIcon/><PhoneText>(617)795-1875</PhoneText></PhoneRow><br/>
          <PhoneRow><ChatIcon/><PhoneText>Available to chat</PhoneText></PhoneRow><br/>
        </NutritionalContactBox>
      </NutritionalBox>
      <DescriptionBox>
        <InnerTitle> About me </InnerTitle>
        Technically speaking, I am a registered dietitian, but I consider myself a food coach who helps active people win with good nutrition. I counsel both fitness exercisers and elite athletes, helping them reach their performance and weight goals. I particularly enjoy working with people who struggle with finding the right balance of food and exercise. For more information, please see my website.

        <InnerTitle> INSURANCE/PAYMENT </InnerTitle>
        <li>Private-commercial insurance - contact for more information
Self pay</li>
        <InnerTitle> LANGUAGES </InnerTitle>
        <li>English</li>
        <InnerTitle> SPECIALITY </InnerTitle>
        <li>Eating Disorders</li>
        <li>Health Coach</li>
        <li>Healthy Eating-Wellness</li>
        <li>Sports Nutrition</li>
        <li>Vegetarian and Plant-Based Nutrition</li>
        <li>Weight Management-Adults, Children and Teens</li>
      </DescriptionBox>
      <br/>
      <SeperatorBar>

      </SeperatorBar>
      <br/><br/><br/>
      <NutritionalBox>
        <div>
          <img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc="></img>
        </div>
        <NutritionalContactBox>
         <br/>
          <li>Benjamin Forester</li> <br/>
          <li>Nutritionist/Dietitian, RDN, CSR, CDN</li> <br/>
          <li>SunnyVale, CA</li> <br/>
          <EmailRow><EmailIcon/><EmailText>Bforester@healthprofs.com</EmailText></EmailRow><br/>
          <PhoneRow><PhoneIcon/><PhoneText>(916)795-1875</PhoneText></PhoneRow><br/>
          <PhoneRow><ChatIcon/><PhoneText>Available to chat</PhoneText></PhoneRow><br/>
        </NutritionalContactBox>
      </NutritionalBox>
        <DescriptionBox>
          <InnerTitle> About me </InnerTitle>
          As an experienced Registered Dietitian I focus on disease prevention and progression with food and lifestyle changes. I am a specialist in renal nutrition and have a strong background in caring for patients with kidney disorders, heart health, diabetes, pregnancy and lactation, thyroid disorders and gastrointestinal disorders.I have spent years working in some of the top rated hospitals and have shifted towards working more closely with my clients. Focusing on disease prevention and progression with a healthful lifestyle. I am an experienced cook and will offer realistic and manageable ways to improve your health with food.

        <InnerTitle> INSURANCE/PAYMENT </InnerTitle>
        <li>Private-commercial insurance - contact for more information
Self pay</li>
        <InnerTitle> LANGUAGES </InnerTitle>
        <li>English</li>

        <InnerTitle> Specialty </InnerTitle>
        <li>Eating Disorders</li>
        <li>Medical Nutrition Therapy</li>
        <li>Healthy Eating-Wellness</li>
        <li>Mindful Eating</li>
        <li>Nutrition Coaching</li>
        <li>NutritionCounseling</li>
      </DescriptionBox>
      <VideosButton><Link to="/videos">WATCH Nutritional Health Videos</Link></VideosButton>
      <SeperatorBar style={{marginBottom: '0px'}}>

      </SeperatorBar>
    </NutritionMainContainer>
  )
}

export default Nutritional