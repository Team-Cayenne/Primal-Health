import React from 'react';
import Nutritional from './Nutritional.jsx'
import VideoDetail from './VideoDetail.jsx'

import SupplierPage from './SupplierPage.jsx'
import UserProfile from './UserProfile.jsx';
import UserOrderTracking from './UserOrderTracking.jsx';
import GoogleLogin from '../Auth/GoogleLogin.js';
import GoogleSignUp from '../Auth/GoogleSignUp.js';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import axios from 'axios';

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
      <div>
        <div>Primal Health Test</div>
        {this.state.userToggle
          ? <SupplierPage suppliers={this.state.suppliers} />
          : null
        }
        {/* <UserProfile /> */}
        {/* <UserOrderTracking /> */}
        {/* <GoogleLogin setUser={this.userLogin} /> */}
        <GoogleSignUp addUser={this.addUser} />
      </div>
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