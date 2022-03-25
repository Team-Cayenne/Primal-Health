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

  // const [id, setId] = useState(0)

  // console.log("mealsfromapp", meals)
  return (
    <AppContext.Provider value= {{
      meals, setMeals,
      selectMeals, setSelectMeals,
      type, setType,
      headCount, setHeadCount,
      numRecipies, setNumRecipies,
      rate, setRate,
      specialBuy, setSpecialBuy,
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
      creditCard, setCreditCard



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
          {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}


// import LoginPage from './LoginPage.jsx'

// import axios from 'axios';

//   console.log("mealsfromapp", meals);
//   return (
//     <AppContext.Provider
//       value={{
//         meals,
//         setMeals,
//         selectMeals,
//         setSelectMeals,
//         id,
//         setId,
//       }}
//     >
//       {props.children}
//     </AppContext.Provider>
//   );
// };

// const App = () => {
//   return (
//     <div data-testid="AppProvider-1">
//       <BrowserRouter>
//         <AppProvider>
//           <Routes>
//             {/* <Route path="/order-confirmation" element={<ConfirmationPage />} /> */}
//             {/* <Route path="/credit-card-entry" element={<EnterCreditCard />} /> */}
//             {/* <Route path="/shipping" element={<EnterShippingInfo />} /> */}
//             {/* <Route path="/logged-in" element={<LoggedInOut />} /> */}
//             {/* <Route path="/health-log" element={<Logger />} /> */}
//             {/* <Route path="/login" element={<LoginPage />} /> */}
//             {/* <Route path="/recipe-menu" element={<MenuAndReview />} /> */}
//             {/* <Route path="/your-thoughts" element={<ModalWriteAReview />} /> */}
//             {/* <Route path="/nutritional-breakdown" element={<NutritionalInfoModalMenuAndReview />} /> */}
//             {/* <Route path="/recipe-card" element={<RecipeModalMenuAndReview />} /> */}
//             {/* <Route path="/review-order" element={<ReviewYourOrder />} /> */}
//             {/* <Route path="/select-meals" element={<SelectMeals />} /> */}
//             {/* <Route path="/meet-our-vendors" element={<SupplierPage />} /> */}
//             {/* <Route path="/tracking" element={<TrackingPage />} /> */}
//             <Route path="/user-profile" element={<UserProfile />} />
//             {/* <Route path="/user-health" element={<UserHealthLogger />} /> */}
//             <Route path="/user-orders" element={<UserOrderTracking />} />

//             {/* <Route path="/your-personal-pref" element={<PersonalizeYourPlan/>} /> */}
//           <Route path="/videos" element={<VideoDetail />} />
//           {/* <Route path="/" element={<Nutritional />}> */}
//           {/* <Route index element={<SupplierPage />} /> */}
//           <Route path='/suppliers' element={<SupplierPage />} />
//             {/* <Route path="*" element={<NoPage />} /> */}
//             {/* </Route> */}
//           </Routes>
//         </AppProvider>
//       </BrowserRouter>
//     </div>
//   );
// };


export default App;

// import LoginPage from './LoginPage.jsx'
// import LoginPage from './LoginPage.jsx';
// import firebase from '../firebase/firebase.js';

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


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
