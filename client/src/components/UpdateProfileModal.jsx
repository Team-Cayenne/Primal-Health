// import React from 'react';

// const UpdateProfileModal = (props) => {

//   return (
//     <div className='profile-update-modal'>
//       <span className='close-modal' onClick={() => props.changeModal()}>&times;</span>
//       <form>
//         <div className='user-info'>
//           <div className='user-key'>
//             <div>Username:</div>
//             <div>First Name:</div>
//             <div>Last Name:</div>
//             <div>Address:</div>
//             <br></br>
//             <div>Phone:</div>
//             <div>Email:</div>
//             <div>Current Subscription:</div>
//             <div>Meals Per Week:</div>
//             <div>Portion Plan:</div>
//             <div>Plan Rate:</div>
//             <div>Payment Info:</div>
//             <div>Credit Card:</div>
//           </div>
//           <div className='user-value'>
//             <div>{props.user.firstName}</div>
//             <div>{props.user.lastName}</div>
//             <div>{props.user.address1}</div>
//             <div>{props.user.city}, {props.user.state}, {props.user.zip}</div>
//             <div>{props.user.phone}</div>
//             <div>{props.user.email}</div>
//             <div>The Big One</div>
//             <div>5</div>
//             <div>2</div>
//             <div>$100</div>
//             <div>XXXX-XXXX-XXXX-{props.user.creditCard?.slice(props.user.creditCard.length - 4)}</div>
//           </div>
import React from "react";

class UpdateProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateUserInfo: true,
      updateSubscription: true,
      updatePaymentInfo: true,
      username: "",
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      address3: "",
      phone: "",
      email: "",
      meals: 0,
      creditCard: "",
    };
    this.handleuserUpdateSubmit = this.handleuserUpdateSubmit.bind(this);
    this.handleUsernameValueChange = this.handleUsernameValueChange.bind(this);
    this.handlefirstNameValueChange =
      this.handlefirstNameValueChange.bind(this);
    this.handlelastNameValueChange = this.handlelastNameValueChange.bind(this);
    this.handleAddress1ValueChange = this.handleAddress1ValueChange.bind(this);
    this.handleAddress2ValueChange = this.handleAddress2ValueChange.bind(this);
    this.handleAddress3ValueChange = this.handleAddress3ValueChange.bind(this);
    this.handlePhoneValueChange = this.handlePhoneValueChange.bind(this);
    this.handleEmailValueChange = this.handleEmailValueChange.bind(this);
    this.handleMealsValueChange = this.handleMealsValueChange.bind(this);
    this.handleCreditCardValueChange =
      this.handleCreditCardValueChange.bind(this);
  }

  handleuserUpdateSubmit(event) {
    event.preventDefault();
    console.log("updating user info");

    this.setState({
      username: "",
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      address3: "",
      phone: "",
      email: "",
      meals: 0,
      creditCard: "",
    });
    this.props.changeModal()
  }

  handleUsernameValueChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handlefirstNameValueChange(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  handlelastNameValueChange(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  handleAddress1ValueChange(event) {
    this.setState({
      address1: event.target.value,
    });
  }

  handleAddress2ValueChange(event) {
    this.setState({
      address2: event.target.value,
    });
  }

  handleAddress3ValueChange(event) {
    this.setState({
      address3: event.target.value,
    });
  }

  handlePhoneValueChange(event) {
    this.setState({
      phone: event.target.value,
    });
  }

  handleEmailValueChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleMealsValueChange(event) {
    this.setState({
      meals: event.target.value,
    });
  }

  handleCreditCardValueChange(event) {
    this.setState({
      creditCard: event.target.value,
    });
  }

  render() {
    return (
      <div className="profile-modal-background">

        <div className="profile-update-modal">
          <form onSubmit={this.handleuserUpdateSubmit}>
            <div className="update-user-modal-user-info-sections">
              <div className="update-user-modal-user-key">
                <div className="update-user-modal-user-info">
                <span className="close-modal" onClick={() => this.props.changeModal()}>&times;</span>
                  <div>Username:</div>
                  <br />
                  <div>First Name:</div>
                  <br />
                  <div>Last Name:</div>
                  <br />
                  <div>Address:</div>
                  <br />
                  <br />
                  <br></br>
                  <div style={{ marginTop: "10px" }}>Phone:</div>
                  <br />
                  <div>Email:</div>
                  <br />
                  <br />
                  <br />
                </div>
                <div className="update-user-modal-user-subscription-info">
                  <div>Current Subscription:</div>
                  <br />
                  <div>Meals Per Week:</div>
                  <br />
                  <div>Portion Plan:</div>
                  <br />
                  <div>Plan Rate:</div>
                  <br />
                  <br />
                  <br />
                </div>

                <div className="update-user-modal-user-payment-info">
                  <div>Payment Info:</div>
                  <br />
                  <div>Credit Card:</div>
                  <br />
                </div>
                <br />
                <br />
              </div>
              <div className="update-user-modal-user-value">
                <div className="update-user-modal-user-info">
                  <input
                    type="text"
                    placeholder="Username"
                    maxLength="20"
                    style={{ width: "300px" }}
                    value={this.state.username}
                    onChange={this.handleUsernameValueChange}
                  />

                  <div></div>
                  <br />
                  <div></div>
                  <input
                    type="text"
                    placeholder="First Name"
                    maxLength="20"
                    style={{ width: "300px" }}
                    value={this.state.firstName}
                    onChange={this.handlefirstNameValueChange}
                  />
                  <br />
                  <br />
                  <div></div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    maxLength="20"
                    style={{ width: "300px" }}
                    value={this.state.lastName}
                    onChange={this.handlelastNameValueChange}
                  />
                  <br />
                  <br />
                  <div></div>
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    maxLength="40"
                    style={{ width: "300px" }}
                    value={this.state.address1}
                    onChange={this.handleAddress1ValueChange}
                  />
                  <div></div>
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    maxLength="40"
                    style={{ width: "300px" }}
                    value={this.state.address2}
                    onChange={this.handleAddress2ValueChange}
                  />
                  <div></div>
                  <input
                    type="text"
                    placeholder="Address Line 3"
                    maxLength="20"
                    style={{ width: "300px" }}
                    value={this.state.address3}
                    onChange={this.handleAddress3ValueChange}
                  />
                  <br />
                  <br />
                  <div></div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    maxLength="20"
                    style={{ width: "300px" }}
                    value={this.state.phone}
                    onChange={this.handlePhoneValueChange}
                  />
                  <br />
                  <br />
                  <div></div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    maxLength="50"
                    style={{ width: "300px" }}
                    value={this.state.email}
                    onChange={this.handleEmailValueChange}
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div></div>
                  <br />
                  <br />
                </div>
                <div className="update-user-modal-user-subscription-info">
                  <div></div>
                  <input
                    type="number"
                    placeholder="#"
                    maxLength="20"
                    style={{ width: "50px" }}
                    value={this.state.meals}
                    onChange={this.handleMealsValueChange}
                  />
                  <br />
                  <br />
                  <div>Radio here!</div>

                  <br />
                  <div>$100</div>

                  <br />
                  <br />
                  <br />
                </div>
                <div></div>
                <div className="update-user-modal-user-payment-info">
                  <br />
                  <br />
                  <div></div>
                  <input
                    type="text"
                    placeholder="Credit Card Number"
                    maxLength="30"
                    style={{ width: "300px" }}
                    value={this.state.creditCard}
                    onChange={this.handleCreditCardValueChange}
                  />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <input
            className="update-user-button"
            type="submit" value="Submit" />
          </form>
          {/* <span className="close-modal" onClick={() => this.props.changeModal()}>&times;</span> */}
        </div>
      </div>
    );
  }
}

export default UpdateProfileModal;