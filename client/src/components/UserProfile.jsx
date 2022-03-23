import React from 'react'
import UpdateProfileModal from './UpdateProfileModal.jsx';

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
        <div className='profile-links'>
          <div>Profile</div>
          <div className='profile-order-history'><a href=''>Order History</a></div>
          <div className='profile-health-logger'><a href=''>Health Logger</a></div>
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
            <div>Meals Per Week:</div>
            <div>Portion Plan:</div>
            <div>Plan Rate:</div>
            <div>Payment Info:</div>
            <div>Credit Card:</div>
          </div>
          <div className='user-value'>
            <div>Allie</div>
            <div>Diorio</div>
            <div>111 Rainbow Drive</div>
            <div>Mt. Hope, Vermont, 87989</div>
            <div>444-444-4444</div>
            <div>user@email.com</div>
            <div>The Big One</div>
            <div>7</div>
            <div>$100</div>
            <div>?</div>
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