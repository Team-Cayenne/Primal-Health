import React from 'react';

const UpdateProfileModal = (props) => {

  return (
    <div className='profile-update-modal'>
      <span className='close-modal' onClick={() => props.changeModal()}>&times;</span>
      <form>
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
            <div>{props.user.firstName}</div>
            <div>{props.user.lastName}</div>
            <div>{props.user.address1}</div>
            <div>{props.user.city}, {props.user.state}, {props.user.zip}</div>
            <div>{props.user.phone}</div>
            <div>{props.user.email}</div>
            <div>The Big One</div>
            <div>5</div>
            <div>2</div>
            <div>$100</div>
            <div>XXXX-XXXX-XXXX-{props.user.creditCard?.slice(props.user.creditCard.length - 4)}</div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdateProfileModal;