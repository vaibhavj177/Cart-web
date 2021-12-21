import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACS6rAmHlcun65uIgSq7S8w7kSXckG5xI",
  authDomain: "cart-c0aac.firebaseapp.com",
  projectId: "cart-c0aac",
  storageBucket: "cart-c0aac.appspot.com",
  messagingSenderId: "545040840287",
  appId: "1:545040840287:web:0e4c51036ae8d14ad20dea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App 
      db={app}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
