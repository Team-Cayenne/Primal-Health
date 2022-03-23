import React, { useState, useContext } from 'react';
import axios from 'axios';
import LandingPage from './LandingPage.jsx'
import Nutritional from './Nutritional.jsx'
import PersonalizeYourPlan from './PersonalizeYourPlan.jsx'
import VideoDetail from './VideoDetail.jsx'
import SupplierPage from './SupplierPage.jsx'
import UserProfile from './UserProfile.jsx';
import UserOrderTracking from './UserOrderTracking.jsx';
import GoogleLogin from '../Auth/GoogleLogin.js';
import GoogleSignUp from '../Auth/GoogleSignUp.js';
import Masthead from '../shared/Masthead.jsx'
import SelectMeals from './SelectMeals.jsx'
import ReviewYourOrder from './ReviewYourOrder.jsx'
import EnterCreditCard from './EnterCreditCard.jsx'
import EnterShippingInfo from './EnterShippingInfo.jsx'
import { BrowserRouter, Routes, Route, Link }  from "react-router-dom"
import { AppContext } from "../context.js";

// const AppProvider = (props) => {
//   const [meals, setMeals] = useState([]);
//   const [selectMeals, setSelectMeals] = useState([]);
//   const [id, setId] = useState(0)

//   console.log("mealsfromapp", meals)
//   return (
//     <AppContext.Provider value= {{
//       meals, setMeals,
//       selectMeals, setSelectMeals,
//       id, setId
//       }}>
//       {props.children}
//     </AppContext.Provider>
//   )
// }

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AppProvider>
//         <Routes>
//           {/* <Route path="/order-confirmation" element={<ConfirmationPage />} /> */}
//           {/* <Route path="/credit-card-entry" element={<EnterCreditCard />} /> */}
//           {/* <Route path="/shipping" element={<EnterShippingInfo />} /> */}
//           {/* <Route path="/logged-in" element={<LoggedInOut />} /> */}
//           {/* <Route path="/health-log" element={<Logger />} /> */}
//           {/* <Route path="/login" element={<LoginPage />} /> */}
//           {/* <Route path="/recipe-menu" element={<MenuAndReview />} /> */}
//           {/* <Route path="/your-thoughts" element={<ModalWriteAReview />} /> */}
//           {/* <Route path="/nutritional-breakdown" element={<NutritionalInfoModalMenuAndReview />} /> */}
//           {/* <Route path="/recipe-card" element={<RecipeModalMenuAndReview />} /> */}
//           {/* <Route path="/review-order" element={<ReviewYourOrder />} /> */}
//           {/* <Route path="/select-meals" element={<SelectMeals />} /> */}
//           {/* <Route path="/meet-our-vendors" element={<SupplierPage />} /> */}
//           {/* <Route path="/tracking" element={<TrackingPage />} /> */}
//           {/* <Route path="/user-profile" element={<UserProfile />} /> */}
//           {/* <Route path="/user-health" element={<UserHealthLogger />} /> */}
//           {/* <Route path="/user-orders" element={<UserOrderTracking />} /> */}

//           <Route path="/your-personal-pref" element={<PersonalizeYourPlan/>} />
//           <Route path="/videos" element={<VideoDetail />} />
//           <Route path="/" element={<Nutritional />}>
//           <Route index element={<SupplierPage />} />
//           {/* <Route path="*" element={<NoPage />} /> */}
//           </Route>
//         </Routes>
//       </AppProvider>
//     </BrowserRouter>
//   );


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


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      suppliers: [],
      users: [],
      user: '',
      userToggle: false
    }

    this.getFAQs = this.getFAQs.bind(this);
    this.getSuppliers = this.getSuppliers.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.addUser = this.addUser.bind(this);
    this.postUser = this.postUser.bind(this);
  }

  componentDidMount() {
    // this.getFAQs()
    this.getSuppliers()
    this.getUsers();
  }


  getFAQs() {
    axios.get('/faqs')
      .then(results => {
        console.log('get FAQs results:', results)
      })
  }


  getSuppliers() {
    axios.get('/suppliers')
      .then(results => {
        this.setState({
          suppliers: results.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }


  getUsers() {
    axios.get('/users')
      .then(results => {
        this.setState({
          users: results.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  userLogin(user) {
    if (user.password) {
      for (let i = 0; i < this.state.users.length; i++) {
        if (this.state.users[i].email === user.email && this.state.users[i].password === user.password) {
          this.setState({
            userToggle: true
          })
          return;
        }
      }
      alert('No User Matching These Credentials');

    } else {
      for (let i = 0; i < this.state.users.length; i++) {
        if (this.state.users[i].email === user.email) {
          this.setState({
            userToggle: true
          })
          return;
        }
      }
      alert('No User Matching These Credentials');
    }
  }

  addUser(user) {
    if (user.password) {
      for (let i = 0; i < this.state.users.length; i++) {
        if (this.state.users[i].email === user.email) {
          alert('Email Already Exists');
          return;
        }
      }
      this.postUser(user)
    } else {
      for (let i = 0; i < this.state.users.length; i++) {
        if (this.state.users[i].email === user.email) {
          alert('Email Already Exists');
          return;
        }
      }
      this.postUser(user);
    }
  }


  postUser(user) {
    axios.post('/users', user)
      .then(res => {
        console.log(res);
        this.setState({
          userToggle: true
        })
      })
      .catch(err => {
        console.log(err);
      })
  }


  render() {
    return (
      <LandingPage />
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
    )
  }
}
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



export default App;

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