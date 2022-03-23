import React from "react";
import auth from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {Link}  from "react-router-dom";

export default class GoogleLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.googleLogin = this.googleLogin.bind(this);
    this.addEmail = this.addEmail.bind(this);
    this.addPassword = this.addPassword.bind(this);
    this.submit = this.submit.bind(this);
  }

  googleLogin() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        this.props.setUser(user)

      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        // The email of the user's account used.
        const email = err.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(err);
      })
  }

  addEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  addPassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  submit() {
    this.props.setUser(this.state)
  }

  render() {
    return (
      <div>
        <label>Email</label>
        <input type='email' onChange={this.addEmail}></input>
        <label>Password</label>
        <input onChange={this.addPassword}></input>
        <button onClick={this.submit}>Login</button>
        <button onClick={this.googleLogin} className="login-button">GOOGLE</button>
        <button>
        <Link to="/your-personal-pref">Choose Your Plan</Link>
        </button>
        <button>
        <Link to="/">HOME</Link>
        </button>
      </div>
    );
  }
}