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
import SupplierVideos from './SupplierVideos.jsx'
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
      specialBuy, setSpecialBuy
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
          <Route path="/vendor-videos" element={<SupplierVideos />} />
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

// import LoginPage from './LoginPage.jsx'
// import LoginPage from './LoginPage.jsx';
// import firebase from '../firebase/firebase.js';

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

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

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       suppliers: [],
//       users: [],
//       user: '',
//       userToggle: false
//     }

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // suppliers: [],
//       users: [],
//       user: '',
//       userToggle: false
//     }

//     this.getFAQs = this.getFAQs.bind(this);
//     // this.getSuppliers = this.getSuppliers.bind(this);
//     this.userLogin = this.userLogin.bind(this);
//     this.getUsers = this.getUsers.bind(this);
//     this.addUser = this.addUser.bind(this);
//     this.postUser = this.postUser.bind(this);
//   }

//   componentDidMount() {
//     // this.getFAQs()
//     this.getSuppliers()
//     this.getUsers();
//   }
//     this.getFAQs = this.getFAQs.bind(this);
//     this.getSuppliers = this.getSuppliers.bind(this);
//     this.userLogin = this.userLogin.bind(this);
//     this.getUsers = this.getUsers.bind(this);
//     this.addUser = this.addUser.bind(this);
//     this.postUser = this.postUser.bind(this);
//   }

// componentDidMount() {
//   // this.getFAQs()
//   this.getSuppliers()
//   this.getUsers();
// }

// getFAQs() {
//   axios.get('/faqs')
//     .then(results => {
//       console.log('get FAQs results:', results)
//     })
// }

// getSuppliers() {
//   axios.get('/suppliers')
//     .then(results => {
//       this.setState({
//         suppliers: results.data
//       })
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       // suppliers: [],
//       users: [],
//       user: '',
//       userToggle: false
//     }

//     this.getFAQs = this.getFAQs.bind(this);
//     // this.getSuppliers = this.getSuppliers.bind(this);
//     this.userLogin = this.userLogin.bind(this);
//     this.getUsers = this.getUsers.bind(this);
//     this.addUser = this.addUser.bind(this);
//     this.postUser = this.postUser.bind(this);
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
// getUsers() {
//   axios.get('/users')
//     .then(results => {
//       this.setState({
//         users: results.data
//       })
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }

// userLogin(user) {
//   if (user.password) {
//     for (let i = 0; i < this.state.users.length; i++) {
//       if (this.state.users[i].email === user.email && this.state.users[i].password === user.password) {
//         this.setState({
//           userToggle: true
//         })
//         return;
//       }
//     }
//     alert('No User Matching These Credentials');

//   // getSuppliers() {
//   //   axios.get('/suppliers')
//   //     .then(results => {
//   //       this.setState({
//   //         suppliers: results.data
//   //       })
//   //     })
//   //     .catch(err => {
//   //       console.log(err);
//   //     })
//   // }
//   } else {
//     for (let i = 0; i < this.state.users.length; i++) {
//       if (this.state.users[i].email === user.email) {
//         this.setState({
//           userToggle: true
//         })
//         return;
//       }
//     }
//     alert('No User Matching These Credentials');
//   }
// }

// addUser(user) {
//   if (user.password) {
//     for (let i = 0; i < this.state.users.length; i++) {
//       if (this.state.users[i].email === user.email) {
//         alert('Email Already Exists');
//         return;
//       }
//     }
//     this.postUser(user)
//   } else {
//     for (let i = 0; i < this.state.users.length; i++) {
//       if (this.state.users[i].email === user.email) {
//         alert('Email Already Exists');
//         return;
//       }
//     }
//     this.postUser(user);
//   }
// }

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
//             userToggle: true
//           })
//           return;
//         }
//       }
//       alert('No User Matching These Credentials');

//     } else {
//       for (let i = 0; i < this.state.users.length; i++) {
//         if (this.state.users[i].email === user.email) {
//           this.setState({
//             userToggle: true
//           })
//           return;
//         }
//       }
//       alert('No User Matching These Credentials');
//     }
//   }

//   addUser(user) {
//     if (user.password) {
//       for (let i = 0; i < this.state.users.length; i++) {
//         if (this.state.users[i].email === user.email) {
//           alert('Email Already Exists');
//           return;
//         }
//       }
//       this.postUser(user)
//     } else {
//       for (let i = 0; i < this.state.users.length; i++) {
//         if (this.state.users[i].email === user.email) {
//           alert('Email Already Exists');
//           return;
//         }
//       }
//       this.postUser(user);
//     }
//   }


//   postUser(user) {
//     axios.post('/users', user)
//       .then(res => {
//         console.log(res);
//         this.setState({
//           userToggle: true
//         })
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
// }

//   render() {}
  //   return (
  //     <div>


  //       {this.state.userToggle
  //         ? <SupplierPage suppliers={this.state.suppliers} />
  //         : null
  //       }
  //       {/* <UserProfile /> */}
  //       {/* <UserOrderTracking /> */}
  //       {/* <GoogleLogin setUser={this.userLogin} /> */}
  //       {/* <GoogleSignUp addUser={this.addUser} /> */}
  //     </div>
  //     // <ConfirmationPage/>

  //     <EnterCreditCard />

  //   )
  // }

// getUsers() {
//   axios.get('/users')
//     .then(results => {
//       this.setState({
//         users: results.data
//       })
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }

// userLogin(user) {
//   if (user.password) {
//     for (let i = 0; i < this.state.users.length; i++) {
//       if (this.state.users[i].email === user.email && this.state.users[i].password === user.password) {
//         this.setState({
//           userToggle: true
//         })
//         return;
//       }
//     }
//     alert('No User Matching These Credentials');

//   } else {
//     for (let i = 0; i < this.state.users.length; i++) {
//       if (this.state.users[i].email === user.email) {
//         this.setState({
//           userToggle: true
//         })
//         return;
//       }
//     }
//     alert('No User Matching These Credentials');
//   }
// }

// addUser(user) {
//   if (user.password) {
//     for (let i = 0; i < this.state.users.length; i++) {
//       if (this.state.users[i].email === user.email) {
//         alert('Email Already Exists');
//         return;
//       }
//     }
//     this.postUser(user)
//   } else {
//     for (let i = 0; i < this.state.users.length; i++) {
//       if (this.state.users[i].email === user.email) {
//         alert('Email Already Exists');
//         return;
//       }
//     }
//     this.postUser(user);
//   }
// }

// postUser(user) {
//   axios.post('/users', user)
//     .then(res => {
//       console.log(res);
//       this.setState({
//         userToggle: true
//       })
//     })
//     .catch(err => {
//       console.log(err);
//     })
// }

  // render() {
  //   return (
  //     <LandingPage />
      // <div>
      //   <div>Primal Health Test</div>
      //   {this.state.userToggle
      //     ? <SupplierPage suppliers={this.state.suppliers} />
      //     : null
      //   }
      //   {/* <UserProfile /> */}
      //   {/* <UserOrderTracking /> */}
      // <GoogleLogin setUser={this.userLogin}/>
      // <GoogleSignUp addUser={this.addUser} />
      // </div>
      // <ConfirmationPage/>

  //     <EnterCreditCard />

  //   )
  // }

//     )
//   }
// }
// const App = () => {
//   return (
//     <div>
//     <div>Primal Health Test</div>
//     <Nutritional/>
//     <VideoDetail/>
//     <SupplierPage/>
//     </div>
//   )
// }
// const App = () => {
//   return <div data-testid="App-1">test</div>;
// };


// }

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
