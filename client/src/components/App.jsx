import React, { useState, useContext } from 'react';
import axios from 'axios';
import React, {useState} from 'react';
import Nutritional from './Nutritional.jsx'
import PersonalizeYourPlan from './PersonalizeYourPlan.jsx'
import VideoDetail from './VideoDetail.jsx'
import SupplierPage from './SupplierPage.jsx'
import Masthead from '../shared/Masthead.jsx'
import SelectMeals from './SelectMeals.jsx'
import ReviewYourOrder from './ReviewYourOrder.jsx'
import EnterCreditCard from './EnterCreditCard.jsx'
import {BrowserRouter, Routes, Route, Link}  from "react-router-dom"
import { AppContext } from "../context.js";

const AppProvider = (props) => {
  const [meals, setMeals] = useState([]);
  const [selectMeals, setSelectMeals] = useState([]);
  const [id, setId] = useState(0)

  console.log("mealsfromapp", meals)
  return (
    <AppContext.Provider value= {{
      meals, setMeals,
      selectMeals, setSelectMeals,
      id, setId
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
          {/* <Route path="/order-confirmation" element={<ConfirmationPage />} /> */}
          {/* <Route path="/credit-card-entry" element={<EnterCreditCard />} /> */}
          {/* <Route path="/shipping" element={<EnterShippingInfo />} /> */}
          {/* <Route path="/logged-in" element={<LoggedInOut />} /> */}
          {/* <Route path="/health-log" element={<Logger />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/recipe-menu" element={<MenuAndReview />} /> */}
          {/* <Route path="/your-thoughts" element={<ModalWriteAReview />} /> */}
          {/* <Route path="/nutritional-breakdown" element={<NutritionalInfoModalMenuAndReview />} /> */}
          {/* <Route path="/recipe-card" element={<RecipeModalMenuAndReview />} /> */}
          {/* <Route path="/review-order" element={<ReviewYourOrder />} /> */}
          {/* <Route path="/select-meals" element={<SelectMeals />} /> */}
          {/* <Route path="/meet-our-vendors" element={<SupplierPage />} /> */}
          {/* <Route path="/tracking" element={<TrackingPage />} /> */}
          {/* <Route path="/user-profile" element={<UserProfile />} /> */}
          {/* <Route path="/user-health" element={<UserHealthLogger />} /> */}
          {/* <Route path="/user-orders" element={<UserOrderTracking />} /> */}

          <Route path="/your-personal-pref" element={<PersonalizeYourPlan/>} />
          <Route path="/videos" element={<VideoDetail />} />
          <Route path="/" element={<Nutritional />}>
          <Route index element={<SupplierPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
// import LoginPage from './LoginPage.jsx'
import LoginPage from './LoginPage.jsx';
import firebase from '../firebase/firebase.js';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/blogs" element={<VideoDetail />} />
//           <Route path="/" element={<Nutritional />}>
//           <Route index element={<SupplierPage />} />
//           {/* <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );

// import axios from 'axios';

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {}

//     // this.get = this.get.bind(this);
//     // this.post = this.post.bind(this);
//   }

//   componentDidMount() {
//     this.getFAQs()
//     this.getSuppliers()s
//   }

//   getFAQs() {
//     axios.get('/faqs')
//     .then(results => {
//       console.log('get FAQs results:', results)
//     })
//   }

//   getSuppliers() {
//     axios.get('/suppliers')
//     .then(results => {
//       console.log('get Suppliers results:', results)
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }

  // post() {
  //   axios.post('/faqs')
  //   .then(results => {
  //     console.log('results:', results)
  //   })

  // }


  render() {
    return (
      <EnterCreditCard />
      <div>

  // render() {
  //   return (
  //     <div>


  //     <div>Primal Health Test</div>
  //     {/* {true ? (
  //     <div>
  //       <LoginPage />
  //       </div>) : null} */}
  //     </div>

      <div>Primal Health Test</div>
      {true ? (
      <div>
        <LoginPage />
        </div>) : null}
      </div>


  //   )
  // }

}

export default App;