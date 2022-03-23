import React from 'react'
import {Link}  from "react-router-dom";
import Masthead from '../shared/Masthead.jsx'

const LandingPage= () =>{

  return (
    <div> LandingPage
      <Masthead />
      <p>Fresh food, delivered right to your door.</p>
      <h2>Reconnect with Your Roots.</h2>
      <p>✓ Affordable</p>
      <p>✓ Organic, Non-GMO</p>
      <p>✓ Locally Sourced</p>
      <p>✓ Commitment-Free</p>
      <p>✓ Weekly Recipes</p>
      <button>
      <Link to="/your-personal-pref">View Plans</Link>
      </button>
      <p>Food fit for any lifestyle.</p>
      <p>Meal packages custom tailored to any diet.</p>
      <br/>
      <h2>Frequently Asked Questions</h2>
      <p>Q: Do your plans offer plans for people with certain requirements?</p>
      <p>A: Because there is such a diverse range of dietary needs or dietary preferences, we cannot specifically address each category.  However, we make it a priority to provide transparent nutritional information on all of our products and ingredients. </p>
      <p>Q: What comes with a meal kit?</p>
      <p>A: All our meal kits come with recipe instructions that are also viewable on our site and pre measured ingredients that are packed with ice packs to keep food cool and fresh during transport.  The only ingredient we ask you provide are pepper, salt, sugar, oil and butter. </p>
      <p>Q: How is Primal Health different from other competitors?</p>
      <p>A: Primal Health not only provides delicious, convienient and healthy meals, but guarantees all products meet high ethical standards.  All our suppliers work within biodynamic processes to produce organic products that are ecologically friendly.  We also care about your holistic being and believe with proper nutrition and exercise, anyone can attain peak levels of emotional and physical ability.  To help you achieve those goals, we provide access to licensed nutritionists, educational material and a daily log to keep track of your progress</p>
      <p>Q: What will you do if an employee contracts Covid 19 or varients?</p>
      <p>A: All Primal Health facilities have the highest level of food safety certification and follows daily rigorous processes guided by the FDA and CDC to maintain the safety of our employees and product, which is our highest priority. We conduct daily medical grade cleaning and temperature checks of all our employees upon entry of our facilities.  In the event an employee contracts Covid, we immediately act in response protocols including intense cleaning and santition of the employees work area and mandatory quarantine of 14 days prior to testing for clearance to resuming work. </p>
      <p>Q: How does my food stay fresh during transit?</p>
      <p>A: We have specially designed boxes with insulating liners, gel packs, and cooling material to keep your food as cool as possible. We even modify our packaging based on season to ensure optimal freshness.</p>
      <p>Q: What type of subscriptions are offered?</p>
      <p>A: Currently, we are offering weekly subscriptions to provide the most fresh local meals.</p>

    </div>
  )

}

export default LandingPage