import React, { useContext, useEffect } from "react";
import { AppContext } from '../context.js';
import auth from "./firebase";
import axios from 'axios';
import Styled from 'styled-components'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import ProgressMasthead from '../shared/ProgressMasthead.jsx'


const GoogleLogin = () => {

  const { users, setUsers, setCurrentUser, email, setEmail, password, setPassword } = useContext(AppContext);


  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get('/users')
      .then(results => {
        setUsers(results.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        userLogin(user);

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

  const userLogin = (user) => {
    if (user.password) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === user.email && users[i].password === user.password) {
          setCurrentUser(users[i]);
          return;
        }
      }
      alert('No User Matching These Credentials');

    } else {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === user.email) {
          setCurrentUser(users[i]);
          return;
        }
      }
      alert('No User Matching These Credentials');
    }
  }

  const addEmail = (event) => {
    setEmail(event.target.value)
  }

  const addPassword = (event) => {
    setPassword(event.target.value)
  }

  const submit = () => {
    userLogin({ email: email, password: password })
  }


  return (
    <div>
      <ProgressMasthead />
      <Header>Welcome Back!</Header>
      <LoginContainer>
        <LoginBox>
          <Header2>Sign In</Header2>
          <Text>Email</Text>
          <Email type='email' onChange={addEmail}></Email>
          <Text>Password</Text>
          <Password type='password' onChange={addPassword}></Password>
          <LoginButton onClick={submit}>Create account</LoginButton>
          <GoogleButton onClick={googleLogin} className="login-button">Continue with Google</GoogleButton>
        </LoginBox>
      </LoginContainer>
    </div>
  );
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
export default GoogleLogin;
