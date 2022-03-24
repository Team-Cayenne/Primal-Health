// import React from 'react';

// import {firebase} from '../firebase/firebase.js';

//   const LoginPage = () => {

//     const signInWithGoogle = () => {
//       let provider = new firebase.auth.GoogleAuthProvider()
//       firebase.auth().signInWithPopup(provider)
//         .then(result => {
//           console.log(result)
//         })
//         .catch(err => {
//           console.error(err)
//         })
//     }
//     return (
//       <div>
//         <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
//       </div>
//     )
//   }

// export default LoginPage;