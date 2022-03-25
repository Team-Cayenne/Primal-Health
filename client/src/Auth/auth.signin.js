import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const EmailLogin = () => {

const emailLogin = (email, password) => {
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

return (
  <div></div>
)

}