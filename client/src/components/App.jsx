import React, { useState, useContext } from 'react';
import LandingPage from './LandingPage.jsx'
import Nutritional from './Nutritional.jsx'
import PersonalizeYourPlan from './PersonalizeYourPlan.jsx'
import VideoDetail from './VideoDetail.jsx'
import SupplierPage from './SupplierPage.jsx'
import RecipeModalMenuAndReview from './RecipeModalMenuAndReview.jsx'
import ConfirmationPage from './ConfirmationPage.jsx'
import TrackingPage from './TrackingPage.jsx'
import {BrowserRouter, Routes, Route, Link}  from "react-router-dom"
import SelectMeals from './SelectMeals.jsx'
import UserProfile from './UserProfile.jsx';
import UserOrderTracking from './UserOrderTracking.jsx';
import GoogleLogin from '../Auth/GoogleLogin.js';
import GoogleSignUp from '../Auth/GoogleSignUp.js';
import Masthead from '../shared/Masthead.jsx'
import MenuAndReview from './MenuAndReview.jsx'
import SupplierVideos from './SupplierVideos.jsx'
import ReviewYourOrder from './ReviewYourOrder.jsx'
import EnterCreditCard from './EnterCreditCard.jsx'
import EnterShippingInfo from './EnterShippingInfo.jsx'
import { AppContext } from "../context.js";
import ShippingInfoPage from './ShippingInfoPage.jsx';


const AppProvider = (props) => {
  const [meals, setMeals] = useState([]);
  const [selectMeals, setSelectMeals] = useState([]);
  const [type, setType] = useState('');
  const [whole30, whole30Selected] = useState(false);
  const [vegetarian, vegetarianSelected] = useState(false);
  const [keto, ketoSelected] = useState(false);
  const [vegan, veganSelected] = useState(false);
  const [paleo, paleoSelected] = useState(false);
  const [pescatarian, pescatarianSelected] = useState(false);
  const [people2, people2Selected] = useState(false);
  const [people4, people4Selected] = useState(false);
  const [recipe2, recipe2Selected] = useState(false);
  const [recipe3, recipe3Selected] = useState(false);
  const [recipe4, recipe4Selected] = useState(false);
  const [recipe5, recipe5Selected] = useState(false);
  const [recipe6, recipe6Selected] = useState(false);
  const [headCount, setHeadCount] = useState(0);
  const [numRecipies, setNumRecipies] = useState(0);
  const [rate, setRate] = useState(0);
  const [specialBuy, setSpecialBuy] = useState([]);
  const [subscriptionRate, setSubscriptionRate] = useState(0);

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [creditCard, setCreditCard] = useState('');

  const [toggleProfile, setToggleProfile] = useState(false);

  return (
    <AppContext.Provider value= {{
      meals, setMeals,
      selectMeals, setSelectMeals,
      type, setType,
      headCount, setHeadCount,
      numRecipies, setNumRecipies,
      rate, setRate,
      specialBuy, setSpecialBuy,
      subscriptionRate, setSubscriptionRate,
      whole30, whole30Selected,
      vegetarian, vegetarianSelected,
      keto, ketoSelected,
      vegan, veganSelected,
      paleo, paleoSelected,
      pescatarian, pescatarianSelected,
      people2, people2Selected,
      people4, people4Selected,
      recipe2, recipe2Selected,
      recipe3, recipe3Selected,
      recipe4, recipe4Selected,
      recipe5, recipe5Selected,
      recipe6, recipe6Selected,
      users, setUsers,
      currentUser, setCurrentUser,
      email, setEmail,
      password, setPassword,
      firstName, setFirstName,
      lastName, setLastName,
      address1, setAddress1,
      address2, setAddress2,
      city, setCity,
      state, setState,
      zip, setZip,
      phone, setPhone,
      creditCard, setCreditCard,
      toggleProfile, setToggleProfile



      // id, setId
      }}>
      {props.children}
    </AppContext.Provider>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/order-confirmation" element={<ConfirmationPage />} />
          <Route path="/credit-card-entry" element={<EnterCreditCard />} />
          <Route path="/shipping" element={<EnterShippingInfo />} />
          <Route path="/login" element={<GoogleLogin />} />
          <Route path="/signup" element={<GoogleSignUp />} />
          <Route path="/recipe-menu" element={<MenuAndReview />} />
          <Route path="/recipe-card" element={<RecipeModalMenuAndReview />} />
          <Route path="/review-order" element={<ReviewYourOrder />} />
          <Route path="/select-meals" element={<SelectMeals />} />
          <Route path="/meet-our-vendors" element={<SupplierPage />} />
          <Route path="/vendor-videos" element={<SupplierVideos />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user-orders" element={<UserOrderTracking />} />
          <Route path="/nutrition-health" element={<Nutritional />} />
          <Route path="/your-personal-pref" element={<PersonalizeYourPlan/>} />
          <Route path="/videos" element={<VideoDetail />} />
          <Route path="/" element={<LandingPage />}>
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}


export default App;
