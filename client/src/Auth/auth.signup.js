import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

class UserSignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.addEmail = this.addEmail.bind(this);
    this.addPassword = this.addPassword.bind(this);
    this.signUp = this.signUp.bind(this);
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

  signUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.props.setUser(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  render() {
    return (
      <div>
        <form>
          <input defaultValue='email' onChange={this.addEmail}></input>
          <input defaultValue='password' onChange={this.addPassword}></input>
        </form>
        <button onClick={this.signUp}>Sign Up</button>
      </div>
    )
  }
}

export default UserSignUp;

