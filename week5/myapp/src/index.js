import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import GreetingElementwithProp from './mygreetingapp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GreetingElementwithProp msg="Hi its Monday"/>
  <GreetingElementwithProp msg="Hi its tuesday"/>
  <GreetingElementwithProp msg="Hi its wednesday"/>
  <GreetingElementwithProp msg="Hi its thursday"/>
   <GreetingElementwithProp msg="Hi its friday"/>
   
  </React.StrictMode>
  )
document.getElementById('root')
reportWebVitals()



