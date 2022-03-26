import { AppContext } from "../context.js";
import React, { useContext } from 'react'
import UpdateProfileModal from './UpdateProfileModal.jsx';
import Masthead from '../shared/Masthead.jsx'
import { Link } from "react-router-dom";
import { Footer } from "./EnterShippingInfo.jsx";
import { SeperatorTitle, SeperatorBar } from "../styles/nutritionalPage/styles.js";

const UserProfile = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     toggle: false,
  //     addressLine2: true
  //   };
  //   this.changeModal = this.changeModal.bind(this);
  // }

  const { toggleProfile, setToggleProfile, currentUser } = useContext(AppContext);

  const changeModal = () => {
    setToggleProfile(!toggleProfile)
  }


  return (
    <div>
      <Masthead />
        <SeperatorBar> <SeperatorTitle>Your Homepage</SeperatorTitle></SeperatorBar>
      <div className="user-profile">

        <div className="profile-sections">
          <div className="profile-links">
            <div>Links</div>
            <br />
            <div className="profile-order-history">
              <Link to="/user-orders">Order History</Link>

            </div>
            <br />
            <div className="profile-health-logger">
              {/* <a href="">Health Logger</a> */}
            </div>
            <br />
          </div>
          {/* <div className="user-info"> */}
          <div className="user-info-data">
            <div className="user-key">
              <div>
                {/* <div>Username:</div>
                <br /> */}
                <div>First Name:</div>
                <br />
                <div>Last Name:</div>
                <br />
                <div>Address:</div>
                <br />
                {/* {this.state.addressLine2 ? (<div><br /></div>) : null} */}

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

              <button className="profile-update update-user-button" onClick={changeModal}>
                Update Info
              </button>
            </div>
            <div className="user-value">
              {/* <div>AllieD</div>
              <br /> */}
              <div>{currentUser.firstName}</div>
              <br />
              <div>{currentUser.lastName}</div>
              <br />
              <div>{currentUser.address1} {currentUser.address2}</div>
              {/* {this.state.addressLine2 ? (<div>apt 123</div>) : null} */}
              <div>{currentUser.city}, {currentUser.state}, {currentUser.zip}</div>

              <br />
              <div>{currentUser.phone}</div>
              <br />
              <div>{currentUser.email}</div>
              <br />
              <br />
              <br />
              <div>{currentUser.type}</div>
              <br />
              <div>{currentUser.numRecipies}</div>
              <br />
              <div>{currentUser.headCount}</div>
              <br />
              <div>{currentUser.subscriptionRate}</div>
              <br />
              <br />
              <br />
              <div></div>
              <br />
              <br />
              <div>{currentUser.creditCard?.slice(currentUser.creditCard.length - 4)}</div>
              <br />
            </div>
          </div>
          {/* </div> */}
        </div>
        <div></div>
      </div>
      <span className="profile-update-modal-container">
        {toggleProfile ? (
          <UpdateProfileModal changeModal={changeModal} />
        ) : null}
      </span>
      <Footer style={{display: 'flex', marginTop: '50px'}}></Footer>

    </div>
  );
}

export default UserProfile;
