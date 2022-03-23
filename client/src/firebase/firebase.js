import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPK0DfxvHKHLCqmQPMXEV-PvBeF5spejw",
  authDomain: "primal-health.firebaseapp.com",
  databaseURL: "https://primal-health-default-rtdb.firebaseio.com",
  projectId: "primal-health",
  storageBucket: "primal-health.appspot.com",
  messagingSenderId: "978802298358",
  appId: "1:978802298358:web:57980813be26ffa6cf8bd7",
  measurementId: "G-6KEVHP9CHQ"
};

// // Initialize Firebase

firebase.initializeApp(firebaseConfig);

export {firebase}