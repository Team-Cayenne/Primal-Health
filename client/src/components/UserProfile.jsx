import React from "react";
import UpdateProfileModal from "./UpdateProfileModal.jsx";
import Masthead from "../shared/Masthead.jsx";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      addressLine2: true
    };
    this.changeModal = this.changeModal.bind(this);
  }

  changeModal() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    return (
      <div>
        <Masthead />
        <div className="user-profile">
          <h2 className="user-profile-title">Your Homepage</h2>
          <div className="profile-sections">
            <div className="profile-links">
              <div>Links</div>
              <br />
              <div className="profile-order-history">
                <a href="">Order History</a>
              </div>
              <br />
              <div className="profile-health-logger">
                <a href="">Health Logger</a>
              </div>
              <br />
            </div>
            {/* <div className="user-info"> */}
            <div className="user-info-data">
            <div className="user-key">
              <div>
                <div>Username:</div>
                <br />
                <div>First Name:</div>
                <br />
                <div>Last Name:</div>
                <br />
                <div>Address:</div>
                <br />
                {this.state.addressLine2 ? (<div><br /></div>) : null}

                <br></br>
                <div>Phone:</div>
                <br />
                <div>Email:</div>
                <br />
                <br />
                <br />
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
                <div>Payment Info:</div>
                <br />
                <div>Credit Card:</div>
                <br />
              </div>
              <br />
              <br />

              <button className="profile-update update-user-button" onClick={this.changeModal}>
                Update Info
              </button>
            </div>
            <div className="user-value">
              <div>AllieD</div>
              <br />
              <div>Allie</div>
              <br />
              <div>Diorio</div>
              <br />
              <div>111 Rainbow Drive</div>
              {this.state.addressLine2 ? (<div>apt 123</div>) : null}
              <div>Mt. Hope, Vermont, 87989</div>

              <br />
              <div>444-444-4444</div>
              <br />
              <div>user@email.com</div>
              <br />
              <br />
              <br />
              <div></div>
              <br />
              <br />
              <div>7</div>
              <br />
              <div>The Big One</div>
              <br />
              <div>$100</div>
              <br />
              <br />
              <br />
              <div></div>
              <br />
              <br />
              <div>XXXX-XXXX-XXXX-1234</div>
              <br />
            </div>
            </div>
            {/* </div> */}
          </div>
          <div></div>
            </div>
          <span className="profile-update-modal-container">
            {this.state.toggle ? (
              <UpdateProfileModal changeModal={this.changeModal} />
            ) : null}
          </span>
      </div>
    );
  }
}

export default UserProfile;
