import React from "react";
import auth from "./firebase";
import Styled from 'styled-components'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
<<<<<<< HEAD
import {Link}  from "react-router-dom";
=======
import ProgressMasthead from '../shared/ProgressMasthead.jsx'

>>>>>>> c034ad737dd64c42fed6f13b6946b74fd0c07d8e

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
        <ProgressMasthead/>
        <Header>Welcome Back!</Header>
        <LoginContainer>
          <LoginBox>
            <Header2>Sign In</Header2>
            <Text>Email</Text>
            <Email type='email' onChange={this.addEmail}></Email>
            <Text>Password</Text>
            <Password onChange={this.addPassword}></Password>
            <LoginButton onClick={this.submit}>Create account</LoginButton>
            <GoogleButton onClick={this.googleLogin} className="login-button">Continue with Google</GoogleButton>
          </LoginBox>
        </LoginContainer>
      </div>
    );
  }
}

const LoginContainer = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

  display: flex;
  justify-content: center;
  align-items: start;
`
const Text = Styled.div`
  display: flex;
  margin: 20px;
  font-family: 'Quicksand';
`
const Header = Styled.div`
  text-align: center;
  font-size: 44px;
  margin-top: 40px;
  font-family: 'Quicksand';
`
const Header2 = Styled.div`
  font-size: 22px;
  font-family: 'Quicksand';
  margin 15px;
  border-bottom: 1px solid black;
`
const LoginBox = Styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  margin-top: 30px;
  width: 533px;
  height: 496px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  background-color: #E9E9E9;
  box-shadow: 2px 2px 6px black;
`
const Email = Styled.input`
  width: 451px;
  height: 34px;
`
const Password = Styled.input`
  width: 451px;
  height: 34px;
`
const LoginButton = Styled.button`
  width: 277px;
  height: 55px;
  margin: 50px 0px 10px 0px;
  background-color: rgba(38, 191, 0, .25);
  border-radius: 5px;
  border-color: rgba(38, 191, 0, .25);
  color: #26BF00;
  font-size: 18px;
  font-family: 'Quicksand';
`
const GoogleButton = Styled.button`
  width: 277px;
  height: 55px;
  margin: 10px;
  font-family: 'Quicksand';
`
