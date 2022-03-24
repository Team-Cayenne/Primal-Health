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
            <div>Credit Card:</div>
          </div>
          <div className='user-value'>
            <div>{this.props.user.firstName}</div>
            <div>{this.props.user.lastName}</div>
            <div>{this.props.user.address1}</div>
            <div>{this.props.user.city}, {this.props.user.state}, {this.props.user.zip}</div>
            <div>{this.props.user.phone}</div>
            <div>{this.props.user.email}</div>
            <div>The Big One</div>
            <div>5</div>
            <div>2</div>
            <div>$100</div>
            <div>XXXX-XXXX-XXXX-{this.props.user.creditCard?.slice(this.props.user.creditCard.length - 4)}</div>
          </div>
        </div>
        <div>

        </div>
        <button className='profile-update' onClick={this.changeModal}>Update</button>
        <span className='profile-update-modal-container'>
          {this.state.toggle
            ? <UpdateProfileModal changeModal={this.changeModal} user={this.props.user}/>
            : null
          }
        </span>
      </div>
    )
  }
}

export default UserProfile;