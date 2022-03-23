import React from "react";
import auth from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default class GoogleSignUp extends React.Component {
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

        this.props.addUser(user)

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
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      alert('Please Complete Form')
    } else if (this.state.email.indexOf('@') === -1) {
      alert('Must Have Valid Email')
    } else {
      this.props.addUser(this.state)
    }
  }

  render() {
    return (
      <div>
        <label>Email</label>
        <input type='email' onChange={this.addEmail}></input>
        <label>Password</label>
        <input type='password' onChange={this.addPassword}></input>
        <button onClick={this.submit}>Sign Up</button>
        <button onClick={this.googleLogin} className="login-button">GOOGLE</button>
      </div>
    );
  }
}