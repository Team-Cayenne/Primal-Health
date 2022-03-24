// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import LandingPage from './LandingPage.jsx'
// import Nutritional from './Nutritional.jsx'
// import PersonalizeYourPlan from './PersonalizeYourPlan.jsx'
// import VideoDetail from './VideoDetail.jsx'
// import SupplierPage from './SupplierPage.jsx'
// import ConfirmationPage from './ConfirmationPage.jsx';
// import TrackingPage from './TrackingPage.jsx';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// import SelectMeals from './SelectMeals.jsx'
// import UserProfile from './UserProfile.jsx';
// import UserOrderTracking from './UserOrderTracking.jsx';
// import GoogleLogin from '../Auth/GoogleLogin.js';
// import GoogleSignUp from '../Auth/GoogleSignUp.js';
// import Masthead from '../shared/Masthead.jsx'

// import ReviewYourOrder from './ReviewYourOrder.jsx'
// import EnterCreditCard from './EnterCreditCard.jsx'
// import EnterShippingInfo from './EnterShippingInfo.jsx'


import React, { useState, useContext } from 'react';
import axios from 'axios';
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
// import SupplierVideos from './SupplierVideos.jsx'
import ReviewYourOrder from './ReviewYourOrder.jsx'
import EnterCreditCard from './EnterCreditCard.jsx'
import EnterShippingInfo from './EnterShippingInfo.jsx'
import { AppContext } from "../context.js";


const AppProvider = (props) => {
  const [meals, setMeals] = useState([]);
  const [selectMeals, setSelectMeals] = useState([]);
  const [type, setType] = useState('');
  const [headCount, setHeadCount] = useState(0);
  const [numRecipies, setNumRecipies] = useState(0);
  const [rate, setRate] = useState(0);
  const [specialBuy, setSpecialBuy] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [id, setId] = useState(0)

  console.log("mealsfromapp", meals)
  return (
    <AppContext.Provider value= {{
      meals, setMeals,
      selectMeals, setSelectMeals,
      type, setType,
      headCount, setHeadCount,
      numRecipies, setNumRecipies,
      rate, setRate,
      specialBuy, setSpecialBuy,
      users, setUsers,
      currentUser, setCurrentUser,
      email, setEmail,
      password, setPassword
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
          {/* <Route path="/logged-in" element={<LoggedInOut />} /> */}
          {/* <Route path="/health-log" element={<Logger />} /> */}
          <Route path="/login" element={<GoogleLogin />} />
          <Route path="/signup" element={<GoogleSignUp />} />
          <Route path="/recipe-menu" element={<MenuAndReview />} />
          {/* <Route path="/your-thoughts" element={<ModalWriteAReview />} /> */}
          {/* <Route path="/nutritional-breakdown" element={<NutritionalInfoModalMenuAndReview />} /> */}
          <Route path="/recipe-card" element={<RecipeModalMenuAndReview />} />
          <Route path="/review-order" element={<ReviewYourOrder />} />
          <Route path="/select-meals" element={<SelectMeals />} />
          <Route path="/meet-our-vendors" element={<SupplierPage />} />
          {/* <Route path="/vendor-videos" element={<SupplierVideos />} /> */}
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          {/* <Route path="/user-health" element={<UserHealthLogger />} /> */}
          <Route path="/user-orders" element={<UserOrderTracking />} />
          <Route path="/nutrition-health" element={<Nutritional />} />

          <Route path="/your-personal-pref" element={<PersonalizeYourPlan/>} />
          <Route path="/videos" element={<VideoDetail />} />
          <Route path="/" element={<LandingPage />}>
          <Route index element={<SupplierPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
  }

export default App;


// Allie App Start!!!!!!!!!!!!!

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       suppliers: [],
//       users: [],
//       user: {},
//       userToggle: false
//     }

//     this.getFAQs = this.getFAQs.bind(this);
//     this.getSuppliers = this.getSuppliers.bind(this);
//     this.userLogin = this.userLogin.bind(this);
//     this.getUsers = this.getUsers.bind(this);
//     this.userSignup = this.userSignup.bind(this);
//     this.postUser = this.postUser.bind(this);
//     this.currentUserInfo = this.currentUserInfo.bind(this);
//   }

//   componentDidMount() {
//     // this.getFAQs()
//     this.getSuppliers()
//     this.getUsers();

//   }


//   getFAQs() {
//     axios.get('/faqs')
//       .then(results => {
//         console.log('get FAQs results:', results)
//       })
//   }


//   getSuppliers() {
//     axios.get('/suppliers')
//       .then(results => {
//         this.setState({
//           suppliers: results.data
//         })
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }


//   getUsers() {
//     axios.get('/users')
//       .then(results => {
//         this.setState({
//           users: results.data
//         })
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }

//   userLogin(user) {
//     if (user.password) {
//       for (let i = 0; i < this.state.users.length; i++) {
//         if (this.state.users[i].email === user.email && this.state.users[i].password === user.password) {
//           this.setState({
//             userToggle: true,
//             user: this.state.users[i]
//           })
//           return;
//         }
//       }
//       alert('No User Matching These Credentials');

//     } else {
//       for (let i = 0; i < this.state.users.length; i++) {
//         if (this.state.users[i].email === user.email) {
//           this.setState({
//             userToggle: true,
//             user: this.state.users[i]
//           })
//           return;
//         }
//       }
//       alert('No User Matching These Credentials');
//     }
//   }

  // userSignup(user) {
  //   if (user.password) {
  //     for (let i = 0; i < this.state.users.length; i++) {
  //       if (this.state.users[i].email === user.email) {
  //         alert('Email Already Exists');
  //         return;
  //       }
  //     }
  //     // this.postUser(user)
  //     this.setState({
  //       userToggle: true,
  //       user: {
  //         email: user.email,
  //         password: user.password
  //       }
  //     })
  //   } else {

  //     for (let i = 0; i < this.state.users.length; i++) {
  //       if (this.state.users[i].email === user.email) {
  //         alert('Email Already Exists');
  //         return;
  //       }

  //     }
//       // this.postUser(user);
//       this.setState({
//         userToggle: true,
//         user: {
//           email: user.email,
//           password: ''
//         }
//       })
//     }
//   }

//   currentUserInfo(info) {
//     let user = this.state.user
//     for (let key in info) {
//       user[key] = info[key]
//     }
//     this.setState({
//       user: user
//     })
//   }


  // postUser() {

  //   axios.post('/users', this.state.user)
  //     .then(res => {
  //       console.log(res);
  //       // this.setState({
  //       //   userToggle: true
  //       // })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }


//   render() {
//     console.log(this.state.users)
//     return (

//       <div>
//         {/* {this.state.userToggle
//         ?<UserProfile user={this.state.user} />
//         : <GoogleLogin setUser={this.userLogin} />
//         } */}
// {/*
//        {this.state.userToggle
//         ?<UserProfile user={this.state.user} />
//         : <GoogleSignUp addUser={this.userSignup} />
//         } */}

//         <GoogleSignUp addUser={this.userSignup} />
//         <EnterShippingInfo user={this.currentUserInfo}/>
//         <EnterCreditCard user={this.currentUserInfo}/>
//         <ReviewYourOrder addUser={this.postUser} />
//       </div>
//       // <LandingPage />
//       // <div>
//       //   <div>Primal Health Test</div>
//       //   {this.state.userToggle
//       //     ? <SupplierPage suppliers={this.state.suppliers} />
//       //     : null
//       //   }
//       //   {/* <UserProfile /> */}
//       //   {/* <UserOrderTracking /> */}
//       // <GoogleLogin setUser={this.userLogin}/>
//       // <GoogleSignUp addUser={this.userSignup} />
//       // </div>
//       // <ConfirmationPage/>

//       // <EnterCreditCard />

//     )
//   }
// }
// // const App = () => {
// //   return (
// //     <div>
// //     <div>Primal Health Test</div>
// //     <Nutritional/>
// //     <VideoDetail/>
// //     <SupplierPage/>
// //     </div>
// //   )
// // }
// // const App = () => {
// //   return (
// //     <div>
// //     {/* <div>Primal Health Test</div> */}
// //     <ConfirmationPage/>
// //     {/* <TrackingPage/> */}
// //     {/* <Nutritional/>
// //     <VideoDetail/>
// //     <SupplierPage/> */}
// //     </div>
// //   )
// // }


// // }

// export default App;


// Allie App End!!!!!!!!!!!!!

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