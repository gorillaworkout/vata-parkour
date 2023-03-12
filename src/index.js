import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Thunk from 'redux-thunk'
import Reducers from './Redux/Reducers'
import {createStore, applyMiddleware} from 'redux'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Provider store={createStore(Reducers,{},applyMiddleware(Thunk))}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
     </Provider>
</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
