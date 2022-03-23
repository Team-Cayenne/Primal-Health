import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;