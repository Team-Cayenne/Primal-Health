import React from 'react'
import UpdateProfileModal from './UpdateProfileModal.jsx';
import Masthead from '../shared/Masthead.jsx'
import {Link}  from "react-router-dom";

class UserProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
    this.changeModal = this.changeModal.bind(this);
  }



  changeModal() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (

      <div className='user-profile'>
        <Masthead />
        <div className='profile-links'>
          <div>Profile</div>
          <br/>
          {/* <div className='profile-order-history'><a href=''>Order History</a></div> */}
          <Link to="/user-orders">Order History</Link>
          {/* <div className='profile-health-logger'><a href=''>Health Logger</a></div> */}
          {/* <Link to="/user-orders">Order History</Link> */}
        </div>
        <div className='user-info'>
          <div className='user-key'>
            <div>Username:</div>
            <div>First Name:</div>
            <div>Last Name:</div>
            <div>Address:</div>
            <br></br>
            <div>Phone:</div>
            <div>Email:</div>
            <div>Current Subscription:</div>
            <div>Portion Plan:</div>
            <div>Meals Per Week:</div>
            <div>Plan Rate:</div>
            {/* <div>Payment Info:</div> */}
            <div>Credit Card:</div>
          </div>
          <div className='user-value'>
            <div>The Big One</div>
            <div>Allie</div>
            <div>Diorio</div>
            <div>111 Rainbow Drive</div>
            <div>Mt. Hope, Vermont, 87989</div>
            <div>444-444-4444</div>
            <div>user@email.com</div>
            <div>7</div>
            <div>2 people</div>
            <div>42</div>
            <div>$545.58</div>
            {/* <div>?</div> */}
            <div>XXXX-XXXX-XXXX-1234</div>
          </div>
        </div>
        <div>

        </div>
        <button className='profile-update' onClick={this.changeModal}>Update</button>
        <span className='profile-update-modal-container'>
          {this.state.toggle
            ? <UpdateProfileModal changeModal={this.changeModal} />
            : null
          }
        </span>
      </div>
    )
  }
}

export default UserProfile;