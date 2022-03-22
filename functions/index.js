// const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// exports.api = functions.https.onRequest((request, response) => {
//   response.send("Team Cayenne API built!!!");
// });

const functions = require("firebase-functions");
const app = require('express')();

const { getAllTodos } = require('./APIs/todos.js')

app.get('/todos', getAllTodos);
exports.api = functions.https.onRequest(app);

const {
  loginUser
} = require('./APIs/users.js')

// Users
app.post('/login', loginUser);
