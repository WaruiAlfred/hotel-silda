import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";
import { store } from "./store/store";

const firebaseConfig = {
  apiKey: "AIzaSyDCcDz6R8tt589aNzMEqE2w28DEnMSaEy8",
  authDomain: "hotel-silda.firebaseapp.com",
  projectId: "hotel-silda",
  storageBucket: "hotel-silda.appspot.com",
  messagingSenderId: "278464398662",
  appId: "1:278464398662:web:640b477ad4ce32ac111147",
  measurementId: "G-YP1CZHXYX9",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
