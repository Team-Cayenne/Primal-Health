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
      </form>
    </div>
  )
}

export default UpdateProfileModal;